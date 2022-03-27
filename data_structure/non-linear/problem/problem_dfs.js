/* user code */
function Graph() {
  this.edge = {};
  this.visited = {};
}

Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
  this.visited[v] = false;
};

Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2);
  this.edge[v2].push(v1);
};

Graph.prototype.dfs = function (v) {
  if (this.visited[v]) return;

  this.visited[v] = true;
  let neighbors = this.edge[v];
  for (let i = 0; i < neighbors.length; i++) {
    this.dfs(neighbors[i]);
  }
};

function answer(v, e_list) {
  let result = 0;

  let graph = new Graph();
  for (let i = 1; i <= v; i++) {
    graph.addVertex(i);
  }

  for (let i = 0; i < e_list.length; i++) {
    let e = e_list[i]; // [v1, v2]
    graph.addEdge(e[0], e[1]);
  }

  graph.dfs(1); // 1번 노드부터 시작하여 모든 노드를 방문한다.

  for (let vertex in graph.visited) {
    result += graph.visited[vertex] ? 1 : 0;
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [
    7,
    [
      [1, 2],
      [2, 3],
      [1, 5],
      [1, 5],
      [5, 2],
      [5, 6],
      [4, 7],
    ],
  ],
  // TC: 2
  [
    10,
    [
      [8, 6],
      [5, 7],
      [9, 10],
      [7, 4],
      [1, 8],
      [5, 10],
      [7, 2],
    ],
  ],
  // TC: 3
  [
    10,
    [
      [6, 9],
      [9, 4],
      [4, 8],
      [9, 7],
      [6, 8],
      [10, 1],
      [10, 9],
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
// #1 5
// #2 3
// #3 7