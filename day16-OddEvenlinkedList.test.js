const { solution } = require('./day16-OddEvenlinkedList');

test('Should work',()=>{
    let linkedList = LinkedListCreator([1,2,3,4,5]);
    solution(linkedList);
    expect(same([1,3,5,2,4],linkedList)).toBe(true);
});

test('Should work',()=>{
    // Input: 2->1->3->5->6->4->7->NULL
// Output: 2->3->6->7->1->5->4->NULL
    let linkedList = LinkedListCreator([2,1,3,5,6,4,7]);
    solution(linkedList);
    expect(same([2,3,6,7,1,5,4],linkedList)).toBe(true);
});

test('Should work',()=>{
    let linkedList = LinkedListCreator([1,2,1,2,1,2,1,2]);
    solution(linkedList);
    expect(same([1,1,1,1,2,2,2,2],linkedList)).toBe(true);
});


test('Should work',()=>{
    let linkedList = LinkedListCreator([1,1]);
    solution(linkedList);
    expect(same([1,1],linkedList)).toBe(true);
});


test('Should work',()=>{
    let linkedList = LinkedListCreator([]);
    solution(linkedList);
    expect(same([],linkedList)).toBe(true);
});



function same(arr, list){
    if(arr.length==0) return list.next == null;
    let temp = list;
     for(let i =0; i< arr.length; i++){
         if(temp.val != arr[i]) return false;
         temp = temp.next;
     }

     return temp == null;
}


function LinkedListCreator(arr){
   let list =  new ListNode(arr[0]);
   let temp = list;
    for(let i =1; i< arr.length; i++){
        temp.next = new ListNode(arr[i]);
        temp = temp.next;
    }
    return list
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}