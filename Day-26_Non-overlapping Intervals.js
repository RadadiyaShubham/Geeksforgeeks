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
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        let intervals = new Array(n);
        for (let i = 0; i < n; i++) {
            input_line = readLine().split(' ');
            intervals[i] = [ parseInt(input_line[0]), parseInt(input_line[1]) ];
        }
        let obj = new Solution();
        let ans = obj.minRemoval(intervals);
        console.log(ans);

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[][]} intervals
 * @returns {number}
 */

class Solution {
    
    minRemoval(intervals) {
        if (intervals.length === 0) return0;
        intervals.sort((a,b) => a[1] - b[1]);
        
        let removals = 0;
        let prevEnd = intervals[0][1];
        
        for(let i = 1; i < intervals.length; i++) {
            let [start, end] = intervals[i];
            
            if (start < prevEnd) {
                removals++;
            } else {
                prevEnd = end;
            }
        }
        return removals;
    }
}