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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let x = parseInt(readLine());
        let obj = new Solution();
        let res = obj.findPages(arr, x);
        console.log(res);
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    
    findPages(arr, k) {
        if(arr.length < k) {
            return - 1;
        }
        const isPossible = (mid) => {
            let count = 1;
            let sum = 0;
            
            for (let num of arr) {
                sum += num;
                if(sum > mid) {
                    count++;
                    sum = num;
                }
            }
            return count <= k;
        };
        let low = Math.max(...arr);
        let high = arr.reduce((a, b) => a+b, 0);
        let result = high;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if(isPossible(mid)) {
                result = mid;
                high = mid - 1;
            } else {
                low = mid + 1
            }
        }
        return result;
    }
}