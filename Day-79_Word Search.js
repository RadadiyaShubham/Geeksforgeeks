//{ Driver Code Starts
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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let m = parseInt(readLine());
        let mat = new Array(n);

        for (let j = 0; j < n; j++) {
            let input_line = readLine().split(" ");
            mat[j] = new Array(m);
            for (let k = 0; k < m; k++) mat[j][k] = input_line[k];
        }

        let word = readLine();
        let obj = new Solution();
        let res = obj.isWordExist(mat, word);

        if (res) {
            console.log("true");
        } else {
            console.log("false");
        }

        console.log("~");
    }
}
// } Driver Code Ends


/**
 * @param {string[]} mat
 * @param {string} word
 * @returns {boolean}
 */

class Solution {
    isWordExist(mat, word) {
        let s = new Solution()
        for(let row = 0; row < mat.length; row++) {
            for(let col = 0; col < mat[0].length; col++) {
                if(mat[row][col] == word[0]) {
                    if(s.isValid(mat, word, row, col)) return true
                }
            }
        }
        return false;
    }
    isValid(arr, word, row, col, wldx = 0) {
        let s = new Solution()
        if(wldx == word.length) return true;
        if(row < 0 || col < 0 || row >= arr.length || col >= arr[0].length) return false
        if(arr[row][col] == word[wldx]) {
            let temp = arr[row][col];
            arr[row][col] = '$'
            let res = s.isValid(arr, word, row+1, col, wldx+1)||s.isValid(arr, word, row-1, col, wldx+1)||s.isValid(arr, word, row, col+1, wldx+1)||s.isValid(arr, word, row, col-1, wldx+1)
            arr[row][col] = temp
            return res;
        }
        return false
    }
}