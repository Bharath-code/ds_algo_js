class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  set(index,value){
    
    let temp = this.get(index)
    if(temp){
        temp.value = value;
        return true;
    }
    return false
    
  }
}

const linkedList = new LinkedList(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
console.log(linkedList);
linkedList.set(2,10);
console.log(linkedList)

