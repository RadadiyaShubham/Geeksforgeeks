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
        let s = readLine();
        let obj = new Solution();
        console.log(obj.minChar(s));

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {string} s
 * @returns {number}
 */

class Solution {

    minChar(s) {
        let t ='#' + s.split('').join('#') + '#';
        let n = t.length;
        let p = new Array(n).fill(0);
        let c = 0, r = 0;
        let maxLen = 0;
        for (let i = 0; i < n; i++) {
            let mirror = 2 * c - i;
            if ( i < r) {
                p[i] = Math.min(r - i, p[mirror]);
            }
            while (i - p[i] - 1 >= 0 && i + p[i] + 1 < n && 
                  t[i - p[i] - 1] === t[i + p[i] + 1]) {
                p[i]++;
            }
            if (i + p[i] > r) {
                c = i;
                r = i + p[i];
            }
            if (i - p[i] === 0) {
                maxLen = p[i];
            }
        }
        return s.length - maxLen;
    }
}