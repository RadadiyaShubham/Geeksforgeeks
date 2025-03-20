//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x)); // Array input

        let obj = new Solution();
        console.log(obj.countTriangles(arr));
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    
    countTriangles(arr) {
        let count = 0;
        for(let i = 0; i < arr.length; i++) {
            for (let j = i+1; j < arr.length; j++) {
                for (let k = j+1; k < arr.length; k++) {
                    let a = arr[i]
                    let b = arr[j]
                    let c = arr[k]
                    if(a+b>c && b+c>a && a+c>b) {
                        count++
                    }
                }
            }
        }
        return count
    }
}