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
        let arr = readLine().trim().split(" ").map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.findMin(arr);
        console.log(res);
        console.log('~');
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    
    findMin(arr) {
        let left = 0, right = arr.length - 1;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] > arr[right]) {
                left = mid + 1;
            }
            else {
                right = mid;
            }
        }
        return arr[left];
    }
}