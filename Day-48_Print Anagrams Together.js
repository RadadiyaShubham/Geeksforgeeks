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

        let arr = readLine().split(' ');
        let obj = new Solution();

        let ans = obj.anagrams(arr);
        ans.sort((a, b) => a[0].localeCompare(b[0]));
        for (let i = 0; i < ans.length; i++) {
            let temp = "";

            for (let j = 0; j < ans[i].length; j++) {
                temp += ans[i][j];
                temp += " ";
            }
            console.log(temp);
        }
        console.log("~");
    }
}

// } Driver Code Ends


class Solution {
    anagrams(arr) {
        let map = new Map();
        for (let ana of arr) {
            const sortedV = ana.split("").sort().join("");
            if(!map.has(sortedV)) {
                map.set(sortedV,[]);
            }
            map.get(sortedV).push(ana);
        }
        return Array.from(map.values());
    }
}