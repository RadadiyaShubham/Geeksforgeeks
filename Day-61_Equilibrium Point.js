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
        let ans = obj.findEquilibrium(arr);
        if (ans == -0) ans = 0;
        console.log(ans);
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
    
    findEquilibrium(arr) {
        let sum = arr.reduce((sum, val)=> {
            sum = sum+val
            return sum
        }, 0)
        let currSum = 0
        for(let ele in arr) {
            if(((currSum*2)+arr[ele])===sum) {
                return ele
            }
            currSum=currSum+arr[ele]
        }
        return -1
    }
}