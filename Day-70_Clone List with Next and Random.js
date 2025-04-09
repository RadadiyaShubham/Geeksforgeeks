//{ Driver Code Starts
class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
        this.random = null;
    }
}

function printLinkedList(root) {
    const link = new Map();
    let temp = root;
    let index = 0;

    while (temp) {
        link.set(temp, index++);
        temp = temp.next;
    }

    temp = root;
    const result = [];
    while (temp) {
        const randomIndex = temp.random ? link.get(temp.random) + 1 : "NULL";
        result.push(`[${temp.data}, ${randomIndex}]`);
        temp = temp.next;
    }

    console.log(`[${result.join(", ")}]`);
}

function buildLinkedList(v, orgAddress) {
    const address = new Array(v.length);
    let head = new Node(v[0][0]);
    address[0] = head;
    orgAddress.set(head, 0);
    let temp = head;

    for (let i = 1; i < v.length; i++) {
        const newNode = new Node(v[i][0]);
        orgAddress.set(newNode, i);
        address[i] = newNode;
        temp.next = newNode;
        temp = temp.next;
    }

    temp = head;
    for (let i = 0; i < v.length; i++) {
        const randomIndex = v[i][1];
        if (randomIndex !== -1) {
            temp.random = address[randomIndex - 1];
        }
        temp = temp.next;
    }

    return head;
}

function validateInput(orgAddress, head, v) {
    const address = new Array(v.length);
    let temp = head;

    for (let i = 0; i < v.length; i++) {
        if (!orgAddress.has(temp) || orgAddress.get(temp) !== i) {
            return false;
        }
        address[i] = temp;
        temp = temp.next;
    }

    if (temp !== null) {
        return false;
    }

    temp = head;
    for (let i = 0; i < v.length; i++) {
        const value = v[i][0];
        const randomIndex = v[i][1];

        if (randomIndex === -1) {
            if (temp.random !== null) {
                return false;
            }
        } else {
            const tempNode = address[randomIndex - 1];
            if (temp.random !== tempNode) {
                return false;
            }
        }
        temp = temp.next;
    }
    return true;
}

function validation(res, orgAddress) {
    let temp = res;
    while (temp) {
        if (orgAddress.has(temp)) {
            return false;
        }
        if (orgAddress.has(temp.random)) {
            return false;
        }
        temp = temp.next;
    }
    return true;
}

function main() {
    const T = parseInt(readLine());
    for (let t = 0; t < T; t++) {
        const n = parseInt(readLine());
        const v = [];
        for (let i = 0; i < n; i++) {
            const [a, b] = readLine().split(' ');
            const randomIndex =
                (b === 'NULL' || b === 'N' || b === 'null' || b === 'n' || b === 'Null')
                    ? -1
                    : parseInt(b);
            v.push([ parseInt(a), randomIndex ]);
        }

        const orgAddress = new Map();
        const head = buildLinkedList(v, orgAddress);

        const solution = new Solution();
        const res = solution.cloneLinkedList(head);

        // Validate if input is modified
        if (validateInput(orgAddress, head, v)) {
            if (validation(res, orgAddress)) {
                printLinkedList(res);
            } else {
                console.log("Pointing to the original list");
            }
        } else {
            console.log("Input list modified");
        }
        console.log("~");
    }
}

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

// } Driver Code Ends


/*Link list Node
class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
        this.random = null;
    }
}
*/
class Solution {
    cloneLinkedList(head) {
        if(!head) return null;
        let curr = head;
        while(curr) {
            const temp = new Node(curr.data);
            temp.next = curr.next;
            curr.next = temp;
            curr = temp.next;
        }
        curr = head;
        while(curr) {
            if(curr.random) {
                curr.next.random = curr.random.next;
            }
            curr = curr.next.next;
        }
        curr = head;
        const dummy = new Node(0);
        let copy = dummy;
        while(curr) {
            copy.next = curr.next;
            curr.next = curr.next.next;
            curr = curr.next;
            copy = copy.next;
        }
        return dummy.next;
    }
}