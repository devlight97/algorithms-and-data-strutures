class Graph {
  constructor() {
    this.adjacencyList = new Map()
  }

  addVertex(vertex) {
    if (!this.adjacencyList.get(vertex)) this.adjacencyList.set(vertex, new Set())
    return Array.from(this.adjacencyList.get(vertex))
  }

  removeVertex(vertex) {
    this.adjacencyList.get(vertex).forEach(otherVertex => {
      this.adjacencyList.get(otherVertex).delete(vertex)
    })
    return this.adjacencyList.delete(vertex)
  }

  addEdge(vertex1, vertex2) {
    try {
      if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
        this.adjacencyList.get(vertex1).add(vertex2)
        this.adjacencyList.get(vertex2).add(vertex1)
        return true
      } else if (!this.adjacencyList.has(vertex1)) throw new Error(`Vertex ${vertex1} is not exist`)
      else if (!this.adjacencyList.has(vertex2)) throw new Error(`Vertex ${vertex2} is not exist`)
    } catch (error) {
      console.error(error);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      const isSuccess1 = this.adjacencyList.get(vertex2).delete(vertex1)
      const isSuccess2 = this.adjacencyList.get(vertex1).delete(vertex2)
      return isSuccess1 && isSuccess2
    }
  }

  depthFirstTraverse(vertex, callback) {
    if (!this.adjacencyList.has(vertex)) return false
    const traversedList = new Map()
    const stack = []
    stack.push(vertex)
    while (true) {
      const currentVertex = stack.pop()
      if (!traversedList.has(currentVertex)) {
        callback(currentVertex)
        traversedList.set(currentVertex, true)
        this.adjacencyList
          .get(currentVertex)
          .forEach(relatedVertex => {
            if (!traversedList.has(relatedVertex)) stack.push(relatedVertex)
          })
      }

      if (stack.length === 0) break
    }
  }

  breadthFirstTraverse(vertex, callback) {
    const queue = []
    if (!this.adjacencyList.has(vertex)) return false
    const traversedList = new Map()
    queue.push(vertex)
    while (true) {
      const currentVertex = queue.shift()
      if (!traversedList.has(currentVertex)) {
        callback(currentVertex)
        traversedList.set(currentVertex, true)
        this.adjacencyList
          .get(currentVertex)
          .forEach(relatedVertex => {
            if (!traversedList.has(relatedVertex)) queue.push(relatedVertex)
          })
      }

      if (queue.length === 0) break
    }
  }
}

const graph = new Graph()
graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')
graph.addVertex('d')
graph.addVertex('e')
graph.addVertex('f')
graph.addEdge('a', 'b')
graph.addEdge('a', 'c')
graph.addEdge('a', 'd')
graph.addEdge('a', 'b')
graph.addEdge('b', 'e')
graph.addEdge('b', 'f')
// graph.removeEdge('a', 'c')
// graph.removeVertex('a')
// console.log(graph.adjacencyList.get('a'));
// console.log(graph.adjacencyList.get('b'));
// console.log(graph.adjacencyList.get('c'));
// console.log(graph.adjacencyList.get('d'));

// graph.depthFirstTraverse('a', vertex => console.log(vertex))
graph.breadthFirstTraverse('a', vertex => console.log(vertex))
