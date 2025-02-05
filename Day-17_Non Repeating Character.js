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
        let input_line = readLine().split(' ');
        let s = input_line[0];
        let obj = new Solution();
        let ans = obj.nonRepeatingChar(s);
        if (ans == '$') ans = '-1';
        console.log(ans);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {string} s
 * @returns {string}
 */
class Solution {
    
    nonRepeatingChar(s) {
        const queue = [];
        const freqMap = new Map();
        
        for (let char of s) {
            freqMap.set(char, (freqMap.get(char) || 0) + 1);
            queue.push(char);
            
            while (queue.length > 0 && freqMap.get(queue[0]) > 1) {
                queue.shift();
            }
        }
        return queue.length > 0 ? queue[0] : '$';
    }
}