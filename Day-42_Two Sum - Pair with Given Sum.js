//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let x = parseInt(readLine());
        let arr = readLine().split(' ').map(Number);
        let obj = new Solution();
        let res = obj.twoSum(arr, x);
        console.log(res ? "true" : "false");
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {boolean}
 */

class Solution {
    twoSum(arr, target) {
        let Seen = new Set();
        for(let num of arr) {
            let complement = target - num;
            if(Seen.has(complement)) {
                return true;
            }
            Seen.add(num);
        }
        return false;
    }
}