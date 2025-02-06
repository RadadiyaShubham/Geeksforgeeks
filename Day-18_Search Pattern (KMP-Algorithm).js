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

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = '';
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let s = readLine();
        let pat = readLine();
        let obj = new Solution();
        let res = obj.search(pat, s);
        if (res.length == 0)
            console.log("[]");
        else
            printArray(res, res.length);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} pat
 * @param {string} txt
 * @returns {number[]}
 */

class Solution {

    search(pat, txt) {
        let result = [];
        let patLength = pat.length;
        for (let i = 0; i <= txt.length - patLength; i++) {
            if (txt.substring (i, i+ patLength) === pat) {
                result.push(i);
            }
        }
        return result;
    }
}