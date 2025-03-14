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
        let obj = new Solution();
        let res = obj.findTriplets(arr);
        res = res.sort((x, y) => {
            for (let i = 0; i < 3; i++) {
                if (x[i] !== y[i]) {
                    return x[i] - y[i];
                }
            }
            return 0;
        });
        if (res.length === 0) {
            process.stdout.write('[]\n');
        }
        for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < res[i].length; j++) {
                process.stdout.write(res[i][j] + ' ');
            }
            process.stdout.write('\n');
        }
        process.stdout.write('~\n');
    }
}

// } Driver Code Ends


// User function Template for javascript
class Solution {
    /**
     * @param {number[]} arr
     * @return {number[][]}
     */
    findTriplets(arr) {
        const res = [];
        const n = arr.length;
        
        for(let i = 0; i < n - 2; i++) {
            for(let j = i + 1; j < n - 1; j++) {
                for(let k = j + 1; k < n; k++) {
                    if(arr[i] + arr[j] + arr[k] === 0) {
                        res.push([i, j, k]);
                    }
                }
            }
        }
        return res;
    }
}