class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val)

    if (!this.root) {
      this.root = newNode
      return this
    }

    let current = this.root

    while (current) {
      if (current.val > val && current.left === null) {
        current.left = newNode
        break
      } else if (current.val < val && current.right === null) {
        current.right = newNode
        break
      }

      current = val < current.val ? current.left : current.right
    }

    return this
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    const newNode = new Node(val)

    if (this.root === null) {
      this.root = newNode
      return this
    }

    if (val < current.val) {
      if (current.left === null) {
        current.left = newNode
        return this
      }
      return this.insertRecursively(val, current.left)
    } else {
      if (current.right === null) {
        current.right = newNode
        return this
      }
      return this.insertRecursively(val, current.right)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root

    while (current) {
      if (current.val === val) return current

      current = val < current.val ? current.left : current.right
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (this.root === null) return

    if (val < current.val) {
      if (current.left === null) return
      return this.findRecursively(val, current.left)
    } else if (val > current.val) {
      if (current.right === null) return
      return this.findRecursively(val, current.right)
    }
    return current
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  //  This is my original attempt. I don't understand why it doesn't work.
  //  Returns [15, 1, 5, 10, 12, 20, 50]
  //  Should return [15, 10, 1, 5, 12, 20, 50]

  // dfsPreOrder(node = this.root, result = []) {
  //   result.push(node.val)
  //   if (node.left) result = this.dfsInOrder(node.left, result)
  //   if (node.right) result = this.dfsInOrder(node.right, result)

  //   return result
  // }

  dfsPreOrder() {
    let data = []
    let current = this.root

    function traverse(node) {
      data.push(node.val) // visit
      node.left && traverse(node.left) // go left if there's a left
      node.right && traverse(node.right) // go right if there's a right
    }

    traverse(current)
    return data
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  //  Since the other two (pre and post) don't work, why does this one?
  dfsInOrder(node = this.root, result = []) {
    if (node.left) result = this.dfsInOrder(node.left, result)
    result.push(node.val)
    if (node.right) result = this.dfsInOrder(node.right, result)

    return result
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  //  This is my original attempt. I don't understand why it doesn't work.
  //  Returns [1, 5, 10, 12, 20, 50, 15]
  //  Should return [5, 1, 12, 10, 50, 20, 15]

  // dfsPostOrder(node = this.root, result = []) {
  //   if (node.left) result = this.dfsInOrder(node.left, result)
  //   if (node.right) result = this.dfsInOrder(node.right, result)
  //   result.push(node.val)

  //   return result
  // }

  dfsPostOrder() {
    let data = []
    let current = this.root

    function traverse(node) {
      node.left && traverse(node.left) // go left if there's a left
      node.right && traverse(node.right) // go right if there's a right
      data.push(node.val) // visit
    }

    traverse(current)
    return data
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root
    let queue = []
    let data = []

    queue.push(node)

    while (queue.length) {
      node = queue.shift()
      data.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }

    return data
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
