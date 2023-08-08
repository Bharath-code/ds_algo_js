// we are going to implement stack using using linked list, not using arrays
// Advantage of using LL is unshift(val) and shift() BigO will be O(1)
// where in the end push(val) will be O(1) and pop() will be O(n)
// when using array as stack use push and pop - BigO -> O(1) not shift and unshift as BigO will be O(n)
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }

}

class Stack{
    constructor(value){
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }
    // we are renaming unshift to push in stack , but functionality wise it's unshift like in linkedlist
    push(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.top = newNode
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++
        return this
    }
    // similar to shift method in linked list
    pop(){
        if(this.length === 0) return undefined
        let temp = this.top
        this.top = temp.next
        temp.next = null
        this.length--
        return temp

    }
}

const myStack = new Stack(1)
console.log(myStack)
myStack.push(2)
myStack.push(3)
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack)