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
        let i = 0;let j = arr.length - 1
        let mx = 0
        while(i < j) {
            let water = (j-i)*Math.min(arr[i],arr[j])
            mx = Math.max(mx, water)
            if(arr[i] < arr[j]) i++
            else j--
        }
        return mx
    }
}