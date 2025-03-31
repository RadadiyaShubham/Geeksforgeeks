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

function printArray(res, n) {
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
        let arr = readLine().split(' ').map(x => parseInt(x));

        let obj = new Solution();
        let res = obj.maxLen(arr);
        console.log(res);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */

class Solution {
    maxLen(arr) {
        let n = arr.length;
        for(let i = 0; i<n; i++) {
            if(arr[i] == 0)
            arr[i] = -1;
        }
        let map = new Map()
        let sum = 0;
        let ans = 0
        for(let i = 0; i<n; i++) {
            sum += arr[i];
            if(sum == 0)
            ans = i + 1;
            if(map.has(sum))
            ans = Math.max(ans, i-map.get(sum));
            if(!map.has(sum))
            map.set(sum, i)
        }
        return ans;
    }
}