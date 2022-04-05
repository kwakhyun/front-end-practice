import { Queue } from "./queue.mjs";

// 너비 우선 탐색 - BFS (Breadth First Search)
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

// BFS
Graph.prototype.bfs = function (startVertex) {
  this.bfsLoopVisit(startVertex);
};

// 큐를 이용한 BFS
Graph.prototype.bfsLoopVisit = function (vertex) {
  let queue = new Queue();
  queue.enqueue(vertex); // 시작 노드를 큐에 삽입

  while (!queue.isEmpty()) {
    // 큐가 비어있지 않을 때까지 반복
    let v = queue.dequeue();

    if (this.visited[v]) continue; // 아직 방문하지 않은 vertex
    this.visited[v] = true; // 방문 처리
    console.log(v);

    let neighbors = this.edge[v];
    for (let i = 0; i < neighbors.length; i++) {
      // 인접한 vertex를 큐에 삽입
      queue.enqueue(neighbors[i]);
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

// 큐를 이용한 BFS
graph.bfs("A"); // A B C D E F G H I
