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
        let arr = readLine().split(' ').map(x => parseInt(x));
        let target = parseInt(readLine());

        let obj = new Solution();
        let res = obj.countTriplets(arr, target);

        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends



/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

class Solution {
    countTriplets(arr, target) {
        let n = arr.length;
        let count = 0;
        for (let i = 0; i < n; i++) {
            let j = i + 1;
            let k = n - 1;
            while(j < k) {
                const sum = arr[i] + arr[j] + arr[k];
                if (sum === target) {
                    const ele1 = arr[j];
                    let ele2=arr[k];
                    let cnt1 = 0;
                    let cnt2 = 0;
                    while(j <= k && arr[j] === ele1) {
                        j++;
                        cnt1++;
                    }
                    while(j <= k && arr[k] === ele2) {
                        k--;
                        cnt2++;
                    }
                    if(ele1!==ele2) {
                        count += cnt1*cnt2;
                    }
                    else {
                        count +=(cnt1*(cnt1-1))/2
                    }
                }
                else if (sum < target) {
                    j++;
                } else {
                    k--;
                }
            }
        }
        return count;
    }
}