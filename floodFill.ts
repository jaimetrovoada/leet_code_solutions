// BFS
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {

  let startColor = image[sr][sc]

  if (startColor === color) {
    console.log("same")
    return image
  }

  const m = image.length // number of rows
  const n = image[0].length // number of cols

  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

  function dfs(x: number, y: number) {
    console.log("in dfs")
    const outOfBounds = x < 0 || x >= m || y < 0 || y >= n
    console.log({ oob: outOfBounds || image[x][y] !== startColor })
    if (outOfBounds || image[x][y] !== startColor) { return };

    image[x][y] = color

    for (const [dx, dy] of dirs) {
      console.log({ dx, dy })
      dfs(x + dx, y + dy);
    }

  }

  dfs(sr, sc);
  return image;
}

console.log({
  floodFill: floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  ),
});
