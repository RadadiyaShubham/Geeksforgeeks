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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().trim().split(" ").map((int) => { return parseInt(int); });

        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.subarrayXor(arr, k);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    subarrayXor(arr, k) {
        let hMap = new Map(), xr = 0;
        hMap.set(xr,1);
        let cnt = 0;
        for(let i = 0; i < arr.length; i++) {
            xr = xr^arr[i];
            let x = xr^k;
            cnt += hMap.get(x) || 0;
            hMap.set(xr,(hMap.get(xr) || 0)+ 1);
        }
        return cnt;
    }
}