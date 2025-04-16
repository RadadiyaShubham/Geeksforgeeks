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
        let S = readLine();
        let obj = new Solution();
        let res = obj.findPermutation(S);
        res.sort()
        printArray(res, res.length);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s
 * @return {string[]}
 */

class Solution {
    findPermutation(s) {
        let n = s.length;
        let ans = [];
        function recursive(n) {
            if(n == 1) {
                return [s[n-1]];
            }
            if(n == 2) {
                const str1 = s[0] + s[1];
                const str2 = s[1] + s[0];
                const tempArr = [];
                tempArr.push(str1);
                if(str1 != str2) {
                    tempArr.push(str2);
                }
                return tempArr;
            }
            const tempArr = recursive(n-1);
            let char = s[n-1];
            let newArr = new Set();
            for(let i = 0; i < tempArr.length; i++) {
                let currStr = tempArr[i];
                for (let j = 0; j <= currStr.length; j++) {
                    let newStr = '';
                    newStr += currStr.substr(0,j);
                    newStr += char;
                    newStr += currStr.substr(j);
                    newArr.add(newStr);
                }
            }
            return Array.from(newArr);
        }
        return recursive(n);
    }
}
