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
        let k = parseInt(readLine());
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        console.log(obj.getMinDiff(arr, k));
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    
    getMinDiff(arr, k) {
        const n = arr.length;
        if (n === 1)
        return 0;
        
        arr.sort((a, b) => a - b);
        let result = arr[n - 1] - arr[0];
        
        for (let i = 1; i < n; i++){
            if (arr[i] - k < 0) continue;
            
            const minHeight = Math.min(arr[0] + k, arr[i] - k);
            const maxHeight = Math.max(arr[n - 1] - k, arr[i - 1] + k);
            result = Math.min(result, maxHeight - minHeight);
        }
        return result;
    }
}