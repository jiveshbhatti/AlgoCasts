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
  //cleaner method to print just the actual node value.
  printList(){
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next;
      }
      console.log(array)
  }

  traverseToIndex(index){
      //check params not important for example

      let counter = 0
      let currentNode = this.head
      while(counter !==index){
          currentNode = currentNode.next;
          counter ++;
      }
      return currentNode
  }
  insert(index,value){
    if (index === 0) {
        this.prepend(value);
        return this.printList();
      }

    if(index >= this.length){
        return this.append(value);
    }

    const newNode = new Node(value) 
    const leader = this.traverseToIndex(index - 1)
    const holdingPointer = leader.next
    leader.next = newNode
    newNode.next = holdingPointer;
    this.length++
    return this.printList()
  }
  remove(index){
    //!check params not done rn
    const leader = this.traverseToIndex(index -1)
    const unwantedNode = leader.next
    leader.next = unwantedNode.next
    this.length--
    return this.printList()

  }

}

const myLinkedList = new linkedList(10);

myLinkedList.append(5);
myLinkedList.append(15);

myLinkedList.insert(20,99)
myLinkedList.printList()
myLinkedList.remove(2)

