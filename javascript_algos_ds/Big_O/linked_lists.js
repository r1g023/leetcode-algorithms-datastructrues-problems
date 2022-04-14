class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
}

//arrays are in contiguous places in memory but linked lists arent', they can be all over the place in memory. This
//linked lists have a variable called head and tail. Each item in linked list points to the next to the next , to the next, etc.. until 'null' and there's no pointer.
