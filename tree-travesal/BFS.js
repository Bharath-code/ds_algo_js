class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  // we are not create a node in constructor as previously seen DS
  // we make root point to null and add node via insert method
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this; // we dont want to run anymore code . so we return
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (newNode.value > temp.value) {
          if (temp.right === null) {
            temp.right = newNode;
            return this;
          }
          temp = temp.right;
        }
      }
    }
  }
  contains(value) {
    if (this.root === null || value === undefined) return false;
    let temp = this.root;
    // why we are loop through temp because binary tree are null terminated
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }
  // always pass the node not the value
  // why we use currentNode.left because left of root is where u find min value
  minValueNode(currentNode) {
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
  BFS(){
    let currentNode = this.root
    let result = []
    let queue= []
    queue.push(currentNode)
    while(queue.length){
        currentNode = queue.shift()
        result.push(currentNode.value)
        if(currentNode.left) queue.push(currentNode.left)
        if(currentNode.right) queue.push(currentNode.right)
    }
return result
  }
}

const myBST = new BST();
myBST.insert(47);
myBST.insert(21);
myBST.insert(76);
myBST.insert(18);
myBST.insert(27);
myBST.insert(52);
myBST.insert(82);

console.log(myBST)
console.log(myBST.BFS())