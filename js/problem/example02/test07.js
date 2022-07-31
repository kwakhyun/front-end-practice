// 문명이는 M이라는 문자가 맘에들어, 모든 문자열을 M자 모양으로 늘어놓기로 마음먹었다.
// M자의 순서는 왼쪽 하단부터 시작해서 한붓그리기처럼 한다. 예를 들어, `zerobaseiswow`를 높이가 4인 M자로 배치하면 아래와 같다.

// ```
// o s
// r b i w
// e a e o
// z s w
// ```

// 이렇게 M자로 배열한 문자를 다시 첫 줄부터 순서대로 읽으면 `osrbiweaeozsw` 된다.
// 문명이는 M자를 무조건 완성해야 하기 때문에, 문자열의 길이가 짧으면 문자열을 반복해서 입력하여 M자로 만들고, 문자열의 길이가 길면 잘라서 M자로 만든다. 예를 들면,

// (abcd, 3)

// ```
// c c
// b d b d
// a a a
// ```

// (iwanttogohomenow, 3)

// ```
// a o
// w n t g
// i t o
// ```

// input: s = ""zerobaseiswow", n = 4
// output: "osrbiweaeozsw"
