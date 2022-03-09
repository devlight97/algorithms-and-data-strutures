class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.count = 1
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  addNode(value) {
    if (!this.root) {
      this.root = new Node(value)
      return this.root
    }

    let nodeCursor = this.root

    while (true) {
      if (value === nodeCursor.value) {
        return nodeCursor
      }
      if (value < nodeCursor.value) {
        if (nodeCursor.left) {
          nodeCursor = nodeCursor.left
          continue
        }
        nodeCursor.left = new Node(value)
        return
      }
      
      if (nodeCursor.right) {
        nodeCursor = nodeCursor.right
        continue
      }
      nodeCursor.right = new Node(value)
      return
    }
  }

  // ---------------- NO COMPLETE -----------------
  removeNode(value) {
    const node = this.find(value)
    let returnNode = null
    if (!node.right && !node.left) {
    }
    let nodeCursor = node.right
    while (true) {
      
    }
  }
  find(value) {
    let nodeCursor = this.root

    while (true) {
      if (value === nodeCursor.value) return nodeCursor

      if (value < nodeCursor.value) {
        if (nodeCursor.left) {
          nodeCursor = nodeCursor.left
          continue
        }
 
        return
      }
      
      if (nodeCursor.right) {
        nodeCursor = nodeCursor.right
        continue
      }
      return
    }
  }

  depthFirstTraverse(callback) {}
  breadthFirstTraverse(callback) {}
}

const binaryTree = new BinaryTree()
binaryTree.addNode(1)
binaryTree.addNode(2)
binaryTree.addNode(3)
binaryTree.addNode(3)
binaryTree.addNode(9)
binaryTree.addNode(2)

console.log(binaryTree.root)
