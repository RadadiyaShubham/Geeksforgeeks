//{ Driver Code Starts
const readline = require('readline');

const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

// Read all input lines
rl.on('line', (input) => { inputLines.push(input); });

// After reading all lines, process them
rl.on('close', () => {
    let t = parseInt(inputLines[currentLine++]);

    while (t-- > 0) {
        // Read first array
        let input = inputLines[currentLine++];
        let arr = input.split(' ').map(Number);

        let solution = new Solution();
        let res = solution.longestConsecutive(arr);

        console.log(res);
        console.log("~");
    }
});

// } Driver Code Ends


/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    
    longestConsecutive(arr) {
        arr.sort((a,b) => a - b);
        let conNum = 0;
        let max = 0;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i + 1] == arr[i] + 1) {
                conNum++;
            }
            else if (arr[i + 1] == arr[i]) continue
            else { max = Math.max(max, conNum); conNum = 0;}
        }
        return max == 0 ? 1 : ++max
    }
}
