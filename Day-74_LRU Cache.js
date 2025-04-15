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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let capacity = parseInt(readLine());
        let cache = new LRUCache(capacity);
        let queries = parseInt(readLine());
        // let input_ar1 = readLine().split(' ');
        let s = '';
        while (queries--) {
            let input_ar1 = readLine().split(' ');
            let q = input_ar1[0];
            if (q === "PUT") {
                let key = parseInt(input_ar1[1]);
                let value = parseInt(input_ar1[2]);
                cache.put(key, value);
            } else {
                let key = parseInt(input_ar1[1]);
                s += cache.get(key) + " ";
            }
        }
        console.log(s);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

class LRUCache {
    constructor(cap) {
        this.capacity = cap;
        this.cache = new Map();
        
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        if(this.cache.has(key)) {
            const value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value);
            return value;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
        
    put(key, value) {
        if(this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        if(this.cache.size > this.capacity) {
            const firstKey = this.cache.keys().next.value;
            this.cache.delete(firstKey);
        }
    }
}
