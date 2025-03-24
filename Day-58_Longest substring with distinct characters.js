//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let s = readLine().trim();
        let obj = new Solution();
        let res = obj.longestUniqueSubstr(s);
        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s
 * @return {number}
 */
class Solution {
    longestUniqueSubstr(s) {
        let left = 0, right = 0, set = new Set(), count = 0;
        while(right < s.length) {
            let letter = s[right];
            if(!set.has(letter)) {
                set.add(letter)
                count = Math.max(count, set.size)
                right++;
            } else {
                set.delete(s[left]);
                left++;
            }
        }
        return count;
    }
}