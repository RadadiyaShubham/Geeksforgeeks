//{ Driver Code Starts
// Initial Template for javascript

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function printList(node) {
    let current = node;
    let result = [];
    while (current !== null) {
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join(' '));
}

// Position this line where user code will be pasted.

const readline = require('readline');
const rl = readline.createInterface(
    {input : process.stdin, output : process.stdout, terminal : false});

let input = [];
rl.on('line', (line) => { input.push(line); });

rl.on('close', () => {
    let t = parseInt(input[0].trim());
    let idx = 1;

    while (t > 0) {
        let arr = input[idx].trim().split(/\s+/).map(Number);
        let head = null;
        if (arr.length > 0 && arr[0] !== 0) {
            head = new Node(arr[0]);
            let tail = head;
            for (let i = 1; i < arr.length; i++) {
                tail.next = new Node(arr[i]);
                tail = tail.next;
            }
        }

        let k = parseInt(input[idx + 1].trim());
        idx += 2;
        let obj = new Solution();
        head = obj.rotate(head, k);
        printList(head);
        console.log("~");
        t--;
    }
});
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} head
 * @param {number} k
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
    rotate(head, k) {
        let temp = head;
        let len = 1;
        while(temp.next != null) {
            temp = temp.next;
            len++;
        }
        k = k%len;
        if(k==0) return head;
        temp.next = head;
        temp = head;
        for(let i=1; i<k; i++) {
            temp = temp.next;
        }
        head = temp.next;
        temp.next = null;
        return head;
    }
}