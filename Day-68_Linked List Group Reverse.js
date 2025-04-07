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
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = null;

function findNode(head, search_for) {
    let current = head;
    while (current !== null) {
        if (current.data == search_for) break;
        current = current.next;
    }
    return current;
}

function printlist(head) {
    let current = head;
    let s = '';
    while (current !== null) {
        s += current.data + " ";
        current = current.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        head = null;
        head = new Node(input_ar1[0]);
        let tail = head;
        for (let i = 1; i < input_ar1.length; i++) {
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let k = parseInt(readLine());
        let obj = new Solution();
        let newHead = obj.reverseKGroup(head, k);
        printlist(newHead);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

*/

class Solution {
    reverseKGroup(head, k) {
        if(!head) return null;
        let prev = null;
        let current = head;
        let next = null;
        let count = 0;
        while(current && count < k) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            count++;
        }
        if(next) {
            head.next = this.reverseKGroup(next,k)
        }
        return prev;
    }
}