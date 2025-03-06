//{ Driver Code Starts
// Initial Template for javascript

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

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let k = parseInt(readLine(), 10);
        let obj = new Solution();
        console.log(obj.countPairs(arr, k));
        console.log('~');
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
class Solution {
    countPairs(arr, target) {
        const arrMap = new Map();
        let counter = 0;
        
        for(let i = 0; i < arr.length; i++) {
            const complement = target - arr[i];
            if(arrMap.has(complement)) {
                counter += arrMap.get(complement);
            }
            arrMap.set(arr[i], (arrMap.get(arr[i]) || 0) + 1);
        }
        return counter;
    }
}
    