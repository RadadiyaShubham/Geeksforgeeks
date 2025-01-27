//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let nums = readLine().split(' ').map(x => parseInt(x));
        let solution = new Solution();
        let ans = solution.findMajority(nums);
        if (ans.length === 0) {
            console.log("[]");
        } else {
            console.log(ans.join(" "));
        }
    }
}
// } Driver Code Ends


class Solution {
    
    findMajority(arr) {
        const result =[];
        const majority = Math.floor(arr.length / 3);
        
        if (arr.length === 0) return[];
        arr.sort((a,b) => a - b);
        let count = 1;
        for (let i =1; i <= arr.length; i++){
            if (i < arr.length && arr[i] === arr[i - 1]){
                count++;
            } else{
                if (count > majority){
                    result.push(arr[i - 1]);
                }
                count = 1;
            }
        }
        return result;
    }
}
