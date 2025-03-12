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
    while (t-- > 0) {
        let k = parseInt(readLine());
        let arr = readLine().split(' ').map(x => parseInt(x));

        let obj = new Solution();
        let result = obj.countSubarrays(arr, k);

        console.log(result);
        console.log('~');
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    countSubarrays(arr, k) {
        let count = 0;
        let sum = 0;
        
        let map = new Map();
        map.set(0,1,);
        for(let num of arr) {
            sum+=sum;
            if(map.has(sum - k)) {
                count += map.get(sum - k)
            }
            map.set(sum,(map.get(sum)||0)+1)
        }
        return count
    }
}