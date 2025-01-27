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
        let prices = new Array();
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < input_ar1.length; i++) prices.push(input_ar1[i]);
        let obj = new Solution();
        let res = obj.maximumProfit(prices);
        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} prices
 * @returns {number}
 */

class Solution {

    maximumProfit(prices) {
        let N = prices.length;
        if (N <= 1) return 0;
        let minPrice = prices[0];
        let maxProfit = 0;
        
        for (let i = 1; i < N; i++){
            minPrice = Math.min(minPrice, prices[i]);
            let profit = prices[i] - minPrice;
            maxProfit = Math.max(maxProfit, profit);
        }
        return maxProfit;
    }
}