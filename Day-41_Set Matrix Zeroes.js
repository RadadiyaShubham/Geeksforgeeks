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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
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
        let grid = new Array();
        for (let i = 0; i < n; i++) {
            let s2 = readLine().split(" ").map(x => parseInt(x));
            let a = new Array();
            for (let j = 0; j < m; j++) {
                a.push(s2[j]);
            }
            grid.push(a);
        }
        let obj = new Solution();
        obj.setMatrixZeroes(grid);
        let res = new Array();
        for (let i = 0; i < n; i++) {
            let s = "";
            for (let j = 0; j < m; j++) {
                s += grid[i][j];
                s += " ";
            }
            res.push(s);
        }
        console.log(res.join("\n"));
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript
class Solution {
    /**
     * @param {number[][]} mat
     */
    setMatrixZeroes(mat) {
       const n = mat.length, m = mat[0].length;
       let c0 = 1;
       
       for(let i = 0; i < n; i++) {
           for(let j = 0; j < m; j++) {
               if(mat[i][j] === 0) {
                   mat[i][0] = 0;
                   if(j === 0)
                   c0 = 0;
                   else mat[0][j] = 0;
               }
           }
       }
       for(let i = 1; i < n; i++) {
           for(let j = 1; j < m; j++) {
               if(mat[i][0] === 0 || mat[0][j] === 0) {
                   mat[i][j] = 0;
               }
           }
       }
       if(mat[0][0] === 0) {
           for(let  j = 0; j < m; j++)
           mat[0][j] = 0;
       }
        if(c0 === 0) {
            for(let i = 0; i < n; i++) {
                mat[i][0] = 0;
            }
        }
    }
}