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
        let num1 = new Node(input_ar1[0]);
        let tail1 = num1;
        for (let i = 1; i < input_ar1.length; i++) {
            tail1.next = new Node(input_ar1[i]);
            tail1 = tail1.next;
        }

        let input_ar2 = readLine().split(' ').map(x => parseInt(x));
        let num2 = new Node(input_ar2[0]);
        let tail2 = num2;
        for (let i = 1; i < input_ar2.length; i++) {
            tail2.next = new Node(input_ar2[i]);
            tail2 = tail2.next;
        }

        let obj = new Solution();
        let res = obj.addTwoLists(num1, num2);
        printlist(res);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} first
 * @param {Node} second
 * @returns {Node}
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
    addTwoLists(num1, num2) {
        let temp1 = this.reverse(num1)
        let temp2 = this.reverse(num2)
        let ans = new Node(-1);
        let ansTemp = ans;
        let carry  = 0;
        while(temp1 || temp2 || carry ){
            let val1 = temp1?.data || 0
            let val2 = temp2?.data || 0
            let sum = carry + val1 + val2;
            let rem = sum % 10;
            carry = Math.trunc(sum / 10)
            ansTemp.next = new Node(rem)
            ansTemp = ansTemp.next
            if(temp1) temp1 = temp1.next
            if(temp2) temp2 = temp2.next
        }
        let result = this.reverse(ans.next)
        while(result && result.data == 0 && result.next) {
            result = result.next
        }
        return result;
    }
    reverse(head) {
        let temp = head;
        let prev = null;
        while(temp) {
            let next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return prev
    }
}