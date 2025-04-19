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
        let n = parseInt(readLine())
        let obj = new Solution();
        let res = obj.nQueen(n);
        if (res.length == 0) {
            console.log(-1);
        } else {
            res.sort((a, b) => {
                for (let j = 0; j < a.length; j++) {
                    if (a[j] !== b[j]) {
                        return a[j] - b[j];
                    }
                }
                return a.length - b.length;
            });
            let ans = "";
            for (let row of res) {
                let s = "[";
                for (let k = 0; k < row.length; k++) {
                    s += row[k];
                    s += " ";
                }
                s += "]";
                ans += s;
                ans += " ";
            }
            console.log(ans);
        }

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @return {number[][]}
 */

class Solution {
    nQueen(n) {
        let ret = [];
        let path = [];
        let used = new Array(n).fill(false);
        const isValid = (path, row, col)=> {
            for(let i = 0; i<path.length;i++) {
                if(Math.abs(i-col) === Math.abs(path[i]-row)) {
                    return false;
                }
            }
            return true;
        };
        let dfs = (path,used)=> {
            if(path.length === n) {
                ret.push(path.map(elem=>elem + 1));
            }
            for(let i=0;i<n;i++) {
                if(used[i]) continue;
                if(!isValid(path,i,path.length)) continue;
                path.push(i);
                used[i]=true;
                dfs(path,used);
                used[i]=false;
                path.pop();
            }
        }
        dfs(path,used);
        return ret;
    }
}