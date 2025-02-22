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
        let k = parseInt(readLine());
        let a = readLine().split(" ").map((x) => parseInt(x));
        let b = readLine().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.kthElement(a, b, k);

        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number} k

 * @returns {number}
 */

class Solution {
    kthElement(a, b, k) {
        let r = [];
        let i = 0;
        let j = 0;
        let x= 0;
        while (i < a.length && j < b.length) {
            if (a[i] <= b[j]){
                r[x++] = a[i];
                i++;
            } else {
                r[x++] = b[j];
                j++;
            }
        }
        while (i < a.length) {
            r[x++] = a[i];
            i++;
        }
        while (j < b.length) {
            r[x++] = b[j];
            j++;
        }
        return r[k - 1];
    }
}