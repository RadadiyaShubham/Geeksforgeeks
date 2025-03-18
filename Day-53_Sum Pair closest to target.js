//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
// Driver code
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (line) => { inputLines.push(line.trim()); });

rl.on('close', () => { main(); });

function readLine() { return inputLines[currentLine++]; }

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let target = parseInt(readLine());

        let ob = new Solution();
        let ans = ob.sumClosest(arr, target);
        if (ans.length === 0) {
            console.log("[]");
        } else {
            console.log(ans.join(" "));
        }
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends


// User function Template for javascript
class Solution {
    sumClosest(arr, target) {
        arr.sort((a,b) => a - b);
        let left = 0, right = arr.length - 1;
        let result = [], closestSum = Infinity;
        while (left < right) {
            let sum = arr[left] + arr[right];
            if(Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
                result = [arr[left], arr[right]];
            } else if (Math.abs(sum - target) === Math.abs(closestSum - target) && 
            Math.abs(arr[right] - arr[left]) > Math.abs(result[1] - result[0])) {
                result = [arr[left], arr[right]];
            }
            sum < target? left++ : right--;
        }
        return result;
    }
}