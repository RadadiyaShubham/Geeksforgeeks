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
        this.next = null;
    }
}

function loopHere(head, tail, position) {
    if (position === 0) return;
    let walk = head;
    for (let i = 1; i < position; i++) walk = walk.next;
    tail.next = walk;
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        // let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let head = new Node(input_ar1[0]);
        let tail = head;
        let n = input_ar1.length;
        for (let i = 1; i < n; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let pos = parseInt(readLine());
        loopHere(head, tail, pos);
        let obj = new Solution();
        if (obj.detectLoop(head)) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head
 * @returns {boolean}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    detectLoop(head) {
        let map = new Map();
        let curr = head;
        while(curr!=null) {
            let d = curr.next;
            if(map.has(d))
            {
                return true;
            }
            else
            {
                map.set(d,1);
            }
            curr = curr.next;
        }
        return false;
    }
}