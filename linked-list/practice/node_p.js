class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
    getValue(){
        return this.value
    }
    getNext(){
        return this.next
    }
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
console.log(node1)
console.log(node1.getValue())
console.log(node1.getNext())