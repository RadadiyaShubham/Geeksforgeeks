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
        // Read the array of integers
        let inputLine = readLine();
        let arr = inputLine.split(' ').map(x => parseInt(x));

        // Create an instance of the Solution class
        let obj = new Solution();

        // Call the missingNumber method and print the result
        console.log(obj.missingNumber(arr));

        // Print the "~" symbol to match the original output
        // console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    
    missingNumber(arr) {
        let n = arr.length;
        for (let i = 0; i < n; i++) {
            while (arr[i] > 0 && arr[i] <= n && arr[i] !== arr[arr[i] - 1]) {
                [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]];
            }
        }
        
        for (let i = 0; i < n; i++) {
            if (arr[i] !== i + 1) {
                return i + 1;
            }
        }
        return n + 1;
    }
}