import { Queue } from "./queue.mjs";
import { Stack } from "./stack.mjs";

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

// 큐를 이용한 BFS - 최단 경로 탐색
Graph.prototype.bfsShortestPath = function (vertex) {
  let queue = new Queue();
  queue.enqueue(vertex);

  let distance = {};
  let previous = {};
  for (let vertex in this.edge) {
    distance[vertex] = 0;
    previous[vertex] = null;
  }

  while (!queue.isEmpty()) {
    let v = queue.dequeue();
    this.visited[v] = true;
    console.log(v);

    let neighbors = this.edge[v];
    for (let i = 0; i < neighbors.length; i++) {
      if (!this.visited[neighbors[i]]) {
        distance[neighbors[i]] = distance[v] + 1; // 거리 저장
        previous[neighbors[i]] = v; // 이전 노드 저장
        queue.enqueue(neighbors[i]); // 큐에 삽입
      }
    }
  }

  return { distance, previous };
};

// 최단 경로 출력
Graph.prototype.fromToPath = function (previous, startVertex, endVertex) {
  let stack = new Stack();

  for (
    let vertex = endVertex;
    vertex !== startVertex;
    vertex = previous[vertex]
  ) {
    stack.push(vertex);
  }
  stack.push(startVertex);

  while (!stack.isEmpty()) {
    let v = stack.pop();
    process.stdout.write(`${v} -> `);
  }
  console.log("end");
};

// 최단 경로 탐색
Graph.prototype.shortestPath = function (startVertex) {
  let result = this.bfsShortestPath(startVertex);

  console.log(result.distance);
  console.log(result.previous);

  for (let vertex in this.edge) {
    if (vertex === startVertex) continue;
    this.fromToPath(result.previous, startVertex, vertex);
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

graph.shortestPath("A");
// A -> B -> end
// A -> C -> end
// A -> D -> end
// A -> B -> E -> end
// A -> B -> F -> end
// A -> D -> G -> end
// A -> D -> H -> end
// A -> B -> E -> I -> end