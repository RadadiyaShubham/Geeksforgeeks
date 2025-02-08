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
        let input_line = readLine().split(' ');
        let s1 = input_line[0];
        input_line = readLine().split(' ');
        let s2 = input_line[0];
        let obj = new Solution();
        if (obj.areRotations(s1, s2))
            console.log("true");
        else
            console.log("false");

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */

class Solution {

    areRotations(s1, s2) {
        if (s1.length !== s2.length) return false;
        return (s1 +s1).includes(s2);
    }
}