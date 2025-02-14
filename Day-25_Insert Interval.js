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
        let n = parseInt(readLine().trim());
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            let temp = readLine().split(' ').map(x => parseInt(x));
            arr[i] = [ temp[0], temp[1] ];
        }
        let h = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.insertInterval(arr, h);
        process.stdout.write("[");

        for (let i = 0; i < ans.length; i++) {
            process.stdout.write("[");
            process.stdout.write(ans[i][0] + "," + ans[i][1]);
            process.stdout.write("]");

            if (i !== ans.length - 1) {
                process.stdout.write(",");
            }
        }

        console.log("]");
        console.log("~");
    }
}
// } Driver Code Ends


class Solution {
    insertInterval(intervals, newInterval) {
        intervals.push(newInterval);
        intervals.sort((a,b) => a[0]-b[0]);
        
        let res = [intervals[0]];
        for(let i=1; i<intervals.length;i++) {
            let last = res[res.length - 1];
            if(last[1]>=intervals[i][0]) {
                last[1] = Math.max(last[1],intervals[i][1]);
            } else {
                res.push(intervals[i]);
            }
        }
        return res;
    }
}