class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }

    this.length--;
    return temp;
  }
  // this is different from singly linked list , because we have prev and next , so we divide the list into two and we search the desired value
  get(index){
    if(index <0 || index >= this.length){
        return undefined
    }
    let temp = this.head
    if(index < this.length/2){
        for (let i = 0; i < index; i++) {
          temp = temp.next;
        }
    }else{
        temp = this.tail
        for(let i=this.length-1; i > index; i--){
            temp = temp.prev
        }
    }
    
    return temp
  }
  set(index,value){
    let temp = this.get(index)
    if(temp){
        temp.value =value
        return true
    }
    return false
  }
  insert(index,value){
    
    if(index === 0) return this.unshift(value)
    if(index === this.length) return this.push(value)
    if(index < 0 || index > this.length) return false
    const newNode = new Node(value)
    //another method
    /*let temp =  this.get(index)
    let before = temp.prev
    newNode.prev = before
    newNode.next = temp
    temp.prev = newNode
    before.next = newNode*/
    const before = this.get(index-1)
    const after = before.next
    before.next = newNode
    newNode.next = after
    newNode.prev = before
    after.prev = newNode
    this.length++
    return true
  }
  remove(index){
    if (index === 0) return this.shift();
    if (index === this.length-1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;
      const temp = this.get(index);
      const after = temp.next;
      const before = temp.prev
      before.next = after
      after.prev = before
      temp.prev = null
      temp.next = null
      this.length--
      return temp

  }
}

const newDLinkedList = new DoublyLinkedList(1);

newDLinkedList.push(2);
newDLinkedList.push(3);
console.log(newDLinkedList.remove(1))
console.log(newDLinkedList);
