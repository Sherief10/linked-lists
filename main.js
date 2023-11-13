class linkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    //check if it's an empty node
    if (!this.head) {
      this.head = new node(value);
      return this;
    }
    let tail = this.getTail();
    tail.next = new node(value);
    return tail;
  }
}

class node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
