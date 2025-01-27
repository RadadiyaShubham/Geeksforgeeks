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
        // let n = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let n = arr.length;
        let obj = new Solution();
        let res = obj.maximumProfit(arr);
        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends




class Solution {
    /**
    * @param number[] prices

    * @returns number
    */
    maximumProfit(prices) {
        let profit = 0;
        let i = 0;
        
        while (i < prices.length - 1){
            while (i < prices.length - 1 && prices[i] >= prices[i + 1]){
                i++;
            }
            const buy = prices[i];
            
            while (i < prices.length - 1 && prices[i] <= prices[i + 1]){
                i++;
            }
            const sell = prices[i];
            
            profit += sell - buy;
        }
        return profit;
    }
}
