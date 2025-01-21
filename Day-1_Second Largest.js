//{ Driver Code Starts
// Initial Template for javascript

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.getSecondLargest(arr);
        console.log(ans);
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    // Function returns the second largest element
    getSecondLargest(arr) {
        let max = -Infinity, secondMax = -Infinity;
        
        for(let ele of arr){
            if(ele > max){
                secondMax = max;
                max = ele;
            }
            else if(ele > secondMax && ele < max){
                secondMax = ele;
            }
        }
        
        return secondMax === -Infinity ? -1 : secondMax;
    }
    
}