// 10 --- 16 --- 20

//creating a seperate class of newNode so we're using DRY principles.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//!linked List class
class linkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
}

const myLinkedList = new linkedList(10);

myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.prepend(2);
console.log(myLinkedList);