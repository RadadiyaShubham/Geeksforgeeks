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
        if (arr[i] == -0) arr[i] = 0;
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let s = readLine();
        let obj = new Solution();
        let res = obj.myAtoi(s);
        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s
 * @return {number}
 */

class Solution {
    myAtoi(s) {
        let p = 0;
        let sign = 1;
        let r = 0;
        
        while (p < s.length && s[p] ===''){
          p++;  
        } 
        
        if (p < s.length && s[p] === '-') {
            sign = '-1';
            p++;
        }
        while (p < s.length && s[p] >= 0 && s[p] <= 9) {
            if (r > (Math.pow(2, 31)) / 10 || (r === (Math.floor(Math.pow(2, 31)/ 10)) && s[p] - '0 > 7')) {
                return sign === 1 ? (Math.pow(2, 31) - 1) :- (Math.pow(2, 31));
            }
            r = 10 * r + (s[p]-'0');
            p++;
        }
        return r * sign === -0 ? 0 : r * sign;
    }
}