//{ Driver Code Starts
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
    constructor(x) {
        this.key = x;
        this.left = null;
        this.right = null;
    }
}

let s = "";

function postOrder(root) {
    if (!root) return;

    postOrder(root.left);
    postOrder(root.right);
    s = s + root.key + " ";
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        // Read inorder and preorder arrays
        let inorder = readLine().split(" ").map((x) => parseInt(x));
        let preorder = readLine().split(" ").map((x) => parseInt(x));

        // Create an instance of Solution
        let obj = new Solution();
        // Build the tree
        let root = obj.buildTree(inorder, preorder);

        // Output post-order traversal
        s = "";
        postOrder(root);
        console.log(s.trim());
    }
}

// } Driver Code Ends


// User function Template for javascript

/*
class Node
{
    constructor(x){
        this.key = x;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {number[]} inorder
 * @param {number[]} preorder
 * @return {Node}
 */
class Solution {
    buildTree(inorder, preorder) {
        let inorderIndex = new Map();
        inorder.forEach((val, idx) => inorderIndex.set(val, idx));
        let preIdx = 0;
        function build(left, right) {
            if(left > right) return null;
            let rootVal = preorder[preIdx++];
            let root = new Node(rootVal);
            root.left = build(left, inorderIndex.get(rootVal) - 1);
            root.right = build(inorderIndex.get(rootVal) + 1, right);
            return root;
        }
        return build(0, inorder.length - 1);
    }
}
