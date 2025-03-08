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

        let a = readLine().split(' ').map(x => parseInt(x, 10));
        let b = readLine().split(' ').map(x => parseInt(x, 10));

        let obj = new Solution();

        const res = obj.intersectionWithDuplicates(a, b).sort((aa, bb) => aa - bb);

        // Format the result
        if (res.length === 0) {
            console.log("[]");
        } else {
            console.log(res.join(" "));
        }
        console.log("~");
    }
}

// } Driver Code Ends


//Back-end complete function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
class Solution {
    intersectionWithDuplicates(a, b) {
        let m = a.length;
        let n = b.length;
        let st = new Set(a);
        let res = [];
        
        for (let i = 0; i < n; i++) {
            if(st.has(b[i])) {
                res.push(b[i]);
                st.delete(b[i]);
            }
        }
        return res;
    }
}