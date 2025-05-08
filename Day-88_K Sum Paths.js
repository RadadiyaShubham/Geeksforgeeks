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

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildTree(str) {
    // Corner Case
    if (str.length === 0 || str[0] === "N") return null;

    // Create the root of the tree
    let root = new Node(parseInt(str[0]));

    // Push the root to the queue
    let queue = [];
    let start = 0;
    queue.push(root);

    // Starting from the second element
    let i = 1;
    while (queue.length !== start && i < str.length) {

        // Get and remove the front of the queue
        let currNode = queue[start];
        start++;

        // Get the current node's value from the string
        let currVal = str[i];

        // If the left child is not null
        if (currVal !== "N") {

            // Create the left child for the current node
            currNode.left = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.left);
        }

        // For the right child
        i++;
        if (i >= str.length) break;
        currVal = str[i];

        // If the right child is not null
        if (currVal !== "N") {

            // Create the right child for the current node
            currNode.right = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.right);
        }
        i++;
    }

    return root;
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let s_tree = readLine().trim().split(" ");
        let K = parseInt(readLine());
        let root = buildTree(s_tree);
        let obj = new Solution();
        let res = obj.sumK(root, K);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends


/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @param {number} K
 * @return {number}
 */

class Solution {
    constructor() {
        this.prefixSumFreq = new Map();
        this.count = 0;
    }
    
    findpaths(node, k, currSum) {
        if(!node) return;
        currSum += node.data;
        if(this.prefixSumFreq.has(currSum - k)) {
            this.count += this.prefixSumFreq.get(currSum - k);
        }
        this.prefixSumFreq.set(currSum, (this.prefixSumFreq.get(currSum) || 0) + 1);
        this.findpaths(node.left, k, currSum);
        this.findpaths(node.right, k, currSum);
        if(this.prefixSumFreq.get(currSum) === 1) {
            this.prefixSumFreq.delete(currSum);
        } else {
            this.prefixSumFreq.set(currSum, this.prefixSumFreq.get(currSum) - 1);
        }
    }
    sumK(root, K) {
        this.prefixSumFreq = new Map();
        this.prefixSumFreq.set(0, 1);
        this.count = 0;
        this.findpaths(root, k, 0);
        return this.count;
    }
}