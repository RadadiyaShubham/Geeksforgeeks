//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = "";
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let obj = new Solution();
        let res = obj.maxProduct(arr);
        if (res === -0) {
            res = 0;
        }
        console.log(res.toString());
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
    maxProduct(arr) {
        let n = arr.length;
        let max = Number.MIN_SAFE_INTEGER;
        let prefix = 1;
        let suffix = 1;
        
        for (let i = 0; i < n; i++){
            if (prefix === 0) prefix = 1;
            if (suffix === 0) suffix = 1;
            
            prefix *= arr[i];
            suffix *= arr[n - 1 - i];
            
            max = Math.max(max, Math.max(prefix, suffix));
        }
        return max;
    }
}