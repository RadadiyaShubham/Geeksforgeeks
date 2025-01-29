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
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.maxSubarraySum(arr);
        if (ans == -0) ans = 0;
        console.log(ans);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    
    maxSubarraySum(arr) {
        const maxCrossingSum = (arr, left, mid, right) => {
            let leftSum = -Infinity;
            let currSum = 0;
            
            for (let i = mid; i >= left; i--){
                currSum += arr[i];
                leftSum = Math.max(leftSum, currSum);
            }
            let rightSum = -Infinity;
            currSum = 0;
            
            for (let i = mid + 1; i <= right; i++){
                currSum += arr[i];
                rightSum = Math.max(rightSum, currSum);
            }
            return leftSum + rightSum;
        };
        
        const maxSubArraySumUtil = (arr, left, right) => {
            if (left === right) return arr[left];
            const mid = Math.floor((left + right) / 2);
            const leftSum = maxSubArraySumUtil(arr, left, mid);
            const rightSum = maxSubArraySumUtil(arr, mid + 1, right);
            const crossSum = maxCrossingSum(arr, left, mid, right);
            return Math.max(leftSum, rightSum, crossSum);
        };
        return maxSubArraySumUtil(arr, 0, arr.length - 1);
    }
}