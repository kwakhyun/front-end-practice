import { Stack } from "./stack.mjs";

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
  // this.dfsRecursiveVisit(startVertex);
  this.dfsLoopVisit(startVertex);
};

// DFS 재귀 호출
Graph.prototype.dfsRecursiveVisit = function (vertex) {
  if (this.visited[vertex]) return;
  this.visited[vertex] = true;
  console.log(vertex);

  let neighbors = this.edge[vertex];
  for (let i = 0; i < neighbors.length; i++) {
    this.dfsRecursiveVisit(neighbors[i]);
  }
};

// 스택을 이용한 DFS
Graph.prototype.dfsLoopVisit = function (vertex) {
  let stack = new Stack();
  stack.push(vertex); // 시작 노드를 스택에 삽입

  while (!stack.isEmpty()) {
    // 스택이 비어있지 않을 때까지 반복
    let v = stack.pop();
    if (this.visited[v]) continue; // 아직 방문하지 않은 vertex
    this.visited[v] = true; // 방문 처리
    console.log(v);

    let neighbors = this.edge[v];
    for (let i = neighbors.length - 1; i >= 0; i--) {
      // 인접한 모든 정점을 스택에 삽입
      stack.push(neighbors[i]);
    }
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

// 스택을 이용한 DFS
graph.dfs("A"); // A B C G D H E F I
