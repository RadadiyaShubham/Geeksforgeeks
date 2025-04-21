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
        let n = 9;
        let matrix = new Array(n);
        for (let i = 0; i < n; i++) {
            let a = new Array(n);
            let input_ar1 = readLine().split(' ').map(x => parseInt(x));
            for (let j = 0; j < n; j++) a[j] = input_ar1[j];
            matrix[i] = a;
        }

        let obj = new Solution();
        obj.solveSudoku(matrix);

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


class Solution {

    /**
     * @param {number[][]} mat
     */

    solveSudoku(mat) {
        this.solve(mat);
    }
    solve(board) {
        for(let row = 0; row < 9; row++) {
            for(let col = 0; col < 9; col++) {
                if(board[row][col] === 0) {
                    for(let num = 1; num <= 9; num++) {
                        if(this.isValid(board, row, col, num)) {
                            board[row][col] = num;
                            if(this.solve(board))
                            return true;
                            board[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    isValid(board, row, col, num) {
        for(let i = 0; i < 9; i++) {
            if(board[row][i] === num || board[i][col] === num) return false;
        }
        let startRow = row-(row % 3);
        let startCol = col-(col % 3);
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(board[startRow + i] [startCol + j] === num) return false;
            }
        }
        return true;
    }
}