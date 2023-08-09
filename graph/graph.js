class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertices(value){
        if(!this.adjacencyList[value]){
            this.adjacencyList[value] = []
            return true
        }
        return false
    }
    addEdges(vertex1,vertex2){
        // this if is true for empty array -> []&&[] -> [] is not falsy-> remember this
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
            return true
        }
        return false
    }
    removeEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
            return true
        }
        return false
    }
    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            while(this.adjacencyList[vertex].length){
                let temp = this.adjacencyList[vertex].pop()
                this.removeEdge(vertex,temp)
            }
            delete this.adjacencyList[vertex]
            return this
        }
    }
}

const myGraph = new Graph()
myGraph.addVertices('A')
myGraph.addVertices('B')
myGraph.addVertices('C')
myGraph.addVertices('D')
myGraph.addEdges('A','B')
myGraph.addEdges('A','C')
myGraph.addEdges('A','D')
myGraph.addEdges('B','D')
myGraph.addEdges('C','D')
myGraph.removeVertex('D')
console.log(myGraph)