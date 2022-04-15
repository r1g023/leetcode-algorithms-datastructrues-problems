class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    // this.head is = to newNode, however, this.tail will also be pointing to the same value of this.head instead of being assigned the node value, in this case, both head/tail share the same pointer to node.
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      //because there's no node in linkedlist yet, we point head and tail to the Node, they have the same value;
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let node = new LinkedList(23);
console.log(node);

//arrays are in contiguous places in memory but linked lists arent', they can be all over the place in memory. This
//linked lists have a variable called head and tail. Each item in linked list points to the next to the next , to the next, etc.. until 'null' and there's no pointer.
