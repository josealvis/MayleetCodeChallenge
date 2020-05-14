// Implement a trie with insert, search, and startsWith methods.

// Example:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");   
// trie.search("app");     // returns true
// Note:

// You may assume that all inputs are consist of lowercase letters a-z.
// All inputs are guaranteed to be non-empty strings.

/**
 * Initialize your data structure here.
 */
class Trie {
    constructor(string = "", contain = false) {
        this.value = string;
        this.children = [];
        this.contained = contain;
    }

    insert(value) {
        let node = this.iterateNodes(value, (currentNode, currentkey) => {
            //this code run when a key is not found
            let newNode = new Trie(currentkey);
            currentNode.children.push(newNode)
            return newNode;
        });
        node.contained =true;
    }

    search(value) {
        let node = this.iterateNodes(value);
        return node && node.contained;
    }

    startsWith(value) {
        let node = this.iterateNodes(value);
        return node != null? true : false;
    }

   // iterate nodes and return the node if it exist, if not return null
   // calback is called every time the key is not found.
    iterateNodes(value, fn = () => false) {
        let arryVal = value.split("");
        let key = "";
        let currentNode = this;
        let node = {}
        while (arryVal.length > 0) {
            key = currentNode.value + arryVal.shift();
            node = currentNode.children.filter(c => c.value == key)[0]
            if (node) {
                currentNode = node;
            } else {
                currentNode = fn(currentNode, key);
                if (!currentNode) return null;
            }
        }
        return currentNode;
    }
};


exports.solution = Trie;


