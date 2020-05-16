// Given a singly linked list, group all odd nodes together followed by the even nodes. 
// Please note here we are talking about the node number and not the value in the nodes.

// You should try to do it in place. The program should run in O(1) space complexity 
// and O(nodes) time complexity.

// Example 1:

// Input: 1->2->3->4->5->NULL
// Output: 1->3->5->2->4->NULL
// Example 2:

// Input: 2->1->3->5->6->4->7->NULL
// Output: 2->3->6->7->1->5->4->NULL
// Note:

// The relative order inside both the even and odd groups should remain as it was in the input.
// The first node is considered odd, the second node even and so on ...

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = head => {
    if(!head) return head;
    if(head.next == null) return head;
    let currentNode = head;
    let evenList = head.next;
    let currentEven = evenList;
    let tail = null;
    let temptail = null;
    while (currentNode != null) {
        temptail = currentNode.next;
        if (temptail != null) {
            currentNode.next = temptail.next;
            currentEven.next = temptail;
            tail = currentNode;
            currentNode = currentNode.next;
            currentEven = currentEven.next;
            currentEven.next = null;
            
        } else {
            tail = currentNode;
            currentEven.next = null;
            currentNode.next = null;
            break
        }

    }
    tail.next = evenList;
    return head;
};


 exports.solution = oddEvenList;
