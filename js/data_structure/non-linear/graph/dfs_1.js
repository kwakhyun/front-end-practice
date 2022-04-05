// 깊이 우선 탐색 - DFS (Depth First Search)
function Graph() {
  this.edge = {};
  this.visited = {};
}

// vertex 추가
Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
  this.visited[v] = false;
};

// edge 추가
Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2);
};

// 연결 상태 출력
Graph.prototype.print = function () {
  for (let vertex in this.edge) {
    let neighbors = this.edge[vertex];
    if (neighbors.length === 0) continue;

    process.stdout.write(`${vertex} -> `);
    for (let i = 0; i < neighbors.length; i++) {
      process.stdout.write(neighbors[i] + " ");
    }
    console.log();
  }
};

// DFS
Graph.prototype.dfs = function (startVertex) {
  this.dfsRecursiveVisit(startVertex);
};

// DFS 재귀 호출
Graph.prototype.dfsRecursiveVisit = function (vertex) {
  if (this.visited[vertex]) return; // 이미 방문한 vertex
  this.visited[vertex] = true; // 방문 처리
  console.log(vertex); // 방문한 vertex 출력

  let neighbors = this.edge[vertex]; // vertex에 연결된 모든 vertex를 얻음
  for (let i = 0; i < neighbors.length; i++) {
    // 방문하지 않은 vertex를 찾아서 방문
    this.dfsRecursiveVisit(neighbors[i]);
  }
};

let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
graph.print();
// A -> B C D
// B -> E F
// C -> G
// D -> G H
// E -> I

// 재귀 호출을 이용한 DFS
graph.dfs("A"); // A B C D G H E F I
