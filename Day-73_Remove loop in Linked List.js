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

function isLoop(head) {
    if (!head) return false;

    let fast = head.next;
    let slow = head;

    while (fast !== slow) {
        if (!fast || !fast.next) return false;
        fast = fast.next.next;
        slow = slow.next;
    }

    return true;
}

function length(head) {
    let res = 0;
    while (head) {
        res++;
        head = head.next;
    }
    return res;
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let head = new Node(input_ar1[0]);
        let tail = head;
        for (let i = 1; i < n; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let pos = parseInt(readLine());
        loopHere(head, tail, pos);
        let obj = new Solution();
        obj.removeLoop(head);
        if (isLoop(head) || length(head) !== n)
            console.log("false");
        else
            console.log("true");
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head
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
    removeLoop(head) {
        let map = new Map()
        let current = head;
        let previous = null
        while(current) {
            if(map.has(current)) {
                previous.next = null;
                break;
            }
            map.set(current, true)
            previous = current;
            current = current.next;
        }
        return head;
    }
}