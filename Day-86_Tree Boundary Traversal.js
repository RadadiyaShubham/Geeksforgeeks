//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(data = null) {
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
        let root = buildTree(s_tree);
        let obj = new Solution();
        let res = obj.boundaryTraversal(root);
        let s = "";
        for (let i = 0; i < res.length; i++) {
            s += res[i] + " ";
        }
        console.log(s);
    }
}
// } Driver Code Ends


// User function Template for javascript

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
 * @returns {number[]}
 */

class Solution {
    boundaryTraversal(root) {
        if(!root) return [];
        const res = [];
        const isLeaf = node => !node.left && !node.right;
        const leftBoundary = node => {
            let curr = node.left;
            while(curr) {
                if(!isLeaf(curr))
                res.push(curr.data);
                curr = curr.left? curr.left : curr.right;
            }
        };
        
        const rightBoundary = node => {
            let curr = node.right,tmp = [];
            while(curr) {
                if(!isLeaf(curr))
                tmp.push(curr.data);
                curr = curr.right?curr.right : curr.lrft;
            }
            res.push(...tmp.reverse());
        };
        
        const leaves = node => {
            if(!node) return;
            if(isLeaf(node))
            res.push(node.data);
            leaves(node.left);
            leaves(node.right);
        };
        
        if(!isLeaf(root))
        res.push(root.data);
        leftBoundary(root);
        leaves(root);
        rightBoundary(root);
        return res;
        
    }
}