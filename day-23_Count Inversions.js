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
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        console.log(obj.inversionCount(arr));
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    
    inversionCount(arr) {
        let counter = 0;
        (function mergeSort(array) {
            if (array.length <= 1) return array;
            
            const m =Math.floor(array.length / 2);
            let left = mergeSort(array.slice(0, m));
            let right = mergeSort(array.slice(m));
            
            let i = 0;
            let j = 0;
            let result = [];
            
            while (i < left.length && j < right.length) {
                if (left[i] <= right[j]) {
                    result.push(left[i++]);
                } else {
                    result.push(right[j++]);
                    counter += left.length - i;
                }
            }
            return [...result, ...left.slice(i), ...right.slice(j)];
        }) (arr);
        return counter;
    }
}