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
        if (arr[i] == -0) arr[i] = 0;
        s += arr[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let m = parseInt(readLine());
        let matrix = new Array(n);
        for (let i = 0; i < n; i++) {
            let a = new Array(m);
            let input_ar1 = readLine().split(' ').map(x => parseInt(x));
            for (let j = 0; j < m; j++) a[j] = input_ar1[j];
            matrix[i] = a;
        }
        let obj = new Solution();
        let ans = obj.spirallyTraverse(matrix);
        printArray(ans, ans.length);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[][]} mat
 * @returns {number[]}
 */

class Solution {
    
    spirallyTraverse(mat) {
        let result = [];
        let rows = mat.length;
        let cols = mat[0].length;
        
        let top = 0, left = 0, bottom = rows - 1, right = cols - 1;
        
        while (top <= bottom && left <= right) {
            for (let i = left; i <= right; i++) {
                result.push(mat[top][i]);
            }
            top++;
            for (let i = top; i <= bottom; i++){
                result.push(mat[i][right]);
            }
            right --;
            if (top <= bottom) {
               for (let i= right; i >= left; i--) {
                   result.push(mat[bottom][i]);
               } 
               bottom--;
            }
            if (left <= right) {
                for (let i = bottom; i >= top; i--) {
                    result.push(mat[i][left]);
                }
                left++;
            }
        }
        return result;
    }
}