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
        // Read the array first
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let x = parseInt(readLine());

        let obj = new Solution();
        let res = obj.countDistinct(arr, x);
        let s = "";
        for (let i = 0; i < res.length; i++) s += res[i] + " ";
        console.log(s);

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */

class Solution {
    countDistinct(arr, k) {
        let res = [];
        let freq = new Map();
        for(let i = 0; i < k; i++) {
            let n = arr[i];
            freq.set(n,(freq.get(n) ?? 0) + 1)
        }
        res.push(freq.size);
        for(let i = k; i < arr.length; i++) {
            let n = arr[i];
            freq.set(n,(freq.get(n) ?? 0) + 1)
            freq.set(arr[i - k],(freq.get(arr[i - k]) ?? 0) - 1)
            if(!freq.get(arr[i - k])) {
                freq.delete(arr[i - k])
            }
            res.push(freq.size);
        }
        return res;
    }
}