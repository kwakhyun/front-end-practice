// 무방향 그래프!
// key: vertex
// value: list 형태로 연결된 vertex를 표현하여 edge object 연결 관계 표현

// edge object 객체 저장을 위한 생성자
function Graph() {
  this.edge = {};
}

// vertex 추가
Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
};

// edge 추가
Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2);
  this.edge[v2].push(v1);
};

// edge 삭제
Graph.prototype.removeEdge = function (v1, v2) {
  if (this.edge[v1]) {
    let index = this.edge[v1].indexOf(v2);

    if (index > -1) {
      this.edge[v1].splice(index, 1);
    }

    if (this.edge[v1].length === 0) {
      delete this.edge[v1];
    }
  }

  if (this.edge[v2]) {
    let index = this.edge[v2].indexOf(v1);

    if (index > -1) {
      this.edge[v2].splice(index, 1);
    }

    if (this.edge[v2].length === 0) {
      delete this.edge[v2];
    }
  }
};

// vertex 삭제
Graph.prototype.removeVertex = function (v) {
  if (this.edge[v] === undefined) {
    return;
  }

  let length = this.edge[v].length;
  let connectedVertex = [...this.edge[v]];

  for (let i = 0; i < length; i++) {
    // 연결된 vertex 삭제
    this.removeEdge(v, connectedVertex[i]);
  }
};

// vertex 개수 반환
Graph.prototype.sizeVertex = function () {
  return Object.keys(this.edge).length;
};

// 해당 vertex의 edge 개수 반환
Graph.prototype.sizeEdge = function (vertex) {
  return this.edge[vertex] ? Object.keys(this.edge[vertex]).length : 0;
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
// B -> A E F
// C -> A G
// D -> A G H
// E -> B I
// F -> B
// G -> C D
// H -> D
// I -> E

graph.removeEdge("B", "F");
graph.removeEdge("D", "H");
graph.print();
// A -> B C D
// B -> A E
// C -> A G
// D -> A G
// E -> B I
// G -> C D
// I -> E

graph.removeVertex("B");
graph.print();
// A -> C D
// C -> A G
// D -> A G
// E -> I
// G -> C D
// I -> E

graph.removeVertex("D");
graph.print();
// A -> C
// C -> A G
// E -> I
// G -> C
// I -> E

console.log(graph.sizeVertex()); // 5
console.log(graph.sizeEdge("A")); // 1
console.log(graph.sizeEdge("B")); // 0
console.log(graph.sizeEdge("C")); // 2
