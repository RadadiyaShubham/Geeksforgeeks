//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(arr) { console.log(arr.join(' ')); }

function main() {
    let t = parseInt(readLine(), 10);
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let k = parseInt(readLine(), 10);
        let obj = new Solution();
        let res = obj.longestSubarray(arr, k);
        console.log(res);
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
    longestSubarray(arr, k) {
        const n = arr.length;
        let ans = 0;
        let sum = 0;
        const map = new Map();
        for(let i = 0; i < n; i++) {
            sum += arr[i];
            let rem = sum-k;
            if(sum === k) {
                ans = Math.max(ans, i+1);
            }
            if(map.has(rem)) {
                let val=map.get(rem);
                let temp =(i-val);
                ans=Math.max(ans,temp);
            }
            if(!map.has(sum)) {
                map.set(sum, i);
            }
        }
        return ans;
    }
}
