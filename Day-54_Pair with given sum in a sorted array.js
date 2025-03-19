//{ Driver Code Starts
// Initial Template for javascript
'use strict';

// Position this line where user code will be pasted.
const readline = require('readline');

const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let input = [];
rl.on('line', (line) => { input.push(line); });

rl.on('close', () => {
    let t = parseInt(input[0].trim());
    let index = 1;

    while (t-- > 0) {
        let arr = input[index].trim().split(" ").map(Number);
        index++;
        let target = parseInt(input[index].trim());
        index++;

        let obj = new Solution();
        let res = obj.countPairs(arr, target);
        console.log(res);
        console.log("~");
    }
});

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */

class Solution {
    countPairs(arr, target) {
        var count = 0;
        var tryset = {};
        for (var i = 0; i < arr.length; i++) {
            var val = target-arr[i]
            if(tryset[val] && tryset[val]!=0) {
                count += tryset[val]
            }
            if(tryset[arr[i]])
            tryset[arr[i]]++
            else
            tryset[arr[i]]=1
        }
        return count;
    }
}