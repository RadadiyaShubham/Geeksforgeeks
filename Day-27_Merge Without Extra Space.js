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
        let a = readLine().split(' ').map(x => parseInt(x));
        let b = readLine().split(' ').map(x => parseInt(x));

        // Create an instance of the Solution class
        let obj = new Solution();

        // Call the missingNumber method and print the result
        obj.mergeArrays(a, b)
        console.log(a.join(' '));
        console.log(b.join(' '));

        console.log("~");
    }
}
// } Driver Code Ends


class Solution {
    mergeArrays(a, b) {
        let n = a.length, m = b.length;
        let gap = Math.ceil((n + m) / 2);
        
        while (gap > 0) {
            let i = 0, j = gap;
            
            while (j < (n + m)) {
                if (j < n && a[i] > a[j]) {
                    [a[i], a[j]] = [a[j], a[i]];
                } 
                else if (j >= n && i < n && a[i] > b[j - n]) {
                    [a[i], b[j - n]] = [b[j - n], a[i]];
                } 
                else if (j >= n && i >= n && b[i - n] > b[j - n]) {
                    [b[i - n], b[j - n]] = [b[j - n], b[i - n]];
                }
                i++;
                j++;
            }
            gap = (gap === 1) ? 0: Math.ceil(gap / 2);
        }
    }
}