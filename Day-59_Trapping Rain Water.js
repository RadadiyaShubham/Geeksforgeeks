//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().split(' ').map(
            x => parseInt(x)); // Read and split input into an array
        let obj = new Solution();
        console.log(obj.maxWater(arr)); // Use the array directly

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    
    maxWater(arr) {
        let left = 1;
        let right = arr.length - 2;
        let lMax  = arr[left - 1];
        let rMax = arr[right + 1];
        let res = 0;
        while (left <= right) {
            if (rMax <= lMax) {
                res += Math.max(0, rMax - arr[right]);
                rMax = Math.max(rMax, arr[right]);
                right -= 1;
            } else {
                res += Math.max(0, lMax - arr[left]);
                lMax = Math.max(lMax, arr[left]);
                left += 1;
            }
        }
        return res;
    }
}