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
        let n = parseInt(readLine());
        let matrix = new Array(n);
        for (let i = 0; i < n; i++) {
            let a = new Array(n);
            let input_ar1 = readLine().split(' ').map(x => parseInt(x));
            for (let j = 0; j < n; j++) a[j] = input_ar1[j];
            matrix[i] = a;
        }

        let obj = new Solution();
        obj.rotateby90(matrix);

        for (let i = 0; i < n; i++) {
            let s = "";
            for (let j = 0; j < n; j++) {
                s += matrix[i][j];
                s += " ";
            }
            console.log(s);
        }
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[][]} matrix
 */
class Solution {

    rotateby90(mat) {
        const n = mat.length;
        const res = Array.from({length: n}, () => Array(n).fill(0));
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                res[n - j - 1][i] = mat[i][j];
            }
        }
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                mat[i][j] = res[i][j];
            }
        }
    }
}