// Given an array of ‘K’ sorted LinkedLists, merge them into one sorted list.


class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const Heap = require('./collections/heap');

const merge_lists = function (lists) {
    const minHeap = new Heap([], null, (a, b) => b.value - a.value);

    for (let i = 0; i < lists.length; i++) {
        minHeap.push(lists[i]);
    }
    let head = minHeap.pop();
    let resultHead = head;
    minHeap.push(head.next);
    while (minHeap.length > 0) {
        let node = minHeap.pop();
        head.next = node;
        if (node.next !== null) {
            minHeap.push(node.next);
        }
        head = head.next;
    }
    return resultHead;
};




l1 = new ListNode(2)
l1.next = new ListNode(6)
l1.next.next = new ListNode(8)

l2 = new ListNode(3)
l2.next = new ListNode(6)
l2.next.next = new ListNode(7)

l3 = new ListNode(1)
l3.next = new ListNode(3)
l3.next.next = new ListNode(4)

result = merge_lists([l1, l2, l3])
output = "Here are the elements form the merged list: ";
while (result != null) {
    output += result.value + " ";
    result = result.next;
}
console.log(output);
