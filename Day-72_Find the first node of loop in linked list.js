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

function printList(head) {
    let s = '';
    while (head) {
        s += head.data;
        s += ' ';
        head = head.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let head = new Node(input_ar1[0]);
        let tail = head;
        for (let i = 1; i < input_ar1.length; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let pos = parseInt(readLine());
        loopHere(head, tail, pos);
        let obj = new Solution();
        let res = obj.findFirstNode(head);
        console.log(res === null ? -1 : res.data);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/*Node Class

class Node {
    constructor(data) {
        this.data = data; // data -> value stored in node
        this.next = null;
    }
}
*/

class Solution {
    findFirstNode(head) {
        let slow = head;
        let fast = head;
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if(slow === fast) {
                let entry = head;
                while(entry !== fast) {
                    entry = entry.next;
                    fast = fast.next;
                }
                return entry
            }
        }
        return null
    }
}