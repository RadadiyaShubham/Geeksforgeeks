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
        let arr = readLine().split(' ').map(
            x => parseInt(x)); // Read and split input into an array
        let obj = new Solution();
        let ans = obj.circularSubarraySum(arr);
        if (ans == -0) ans = 0;
        console.log(ans);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {[number[]} arr
 * @returns {number}
 */
class Solution {
    
    circularSubarraySum(arr) {
        let n = arr.length;
        
        function kadane(arr) {
            let maxEndingHere = arr[0], maxSoFar = arr[0];
            
            for (let i = 1; i < n; i++) {
                maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
                maxSoFar = Math.max(maxSoFar , maxEndingHere);
            }
            return maxSoFar;
        }
        
        let maxNormal = kadane(arr);
        if (maxNormal < 0) return maxNormal;
        let totalSum = arr.reduce ((acc, val) => acc + val, 0);
        for (let i =0; i < n; i++) { 
            arr[i] = -arr[i];
        }
        
        let maxInverted = kadane(arr);
        let maxCircular = totalSum + maxInverted;
        return Math.max(maxNormal, maxCircular);
    }
}