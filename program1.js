const getTotalIsles = function (grid) {


  // write your code here

};

module.exports = getTotalIsles;





function numIslands(grid) {
  if (grid === null || grid.length === 0) {
      return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  // Function to perform DFS and mark connected land as visited
  const dfs = (r, c) => {
      // Check boundaries and whether the cell is land ('L')
      if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 'W') {
          return;
      }

      // Mark the current cell as visited (change 'L' to 'W')
      grid[r][c] = 'W';

      // Recursively visit all neighboring cells (up, down, left, right)
      dfs(r - 1, c);  // Up
      dfs(r + 1, c);  // Down
      dfs(r, c - 1);  // Left
      dfs(r, c + 1);  // Right
  };

  // Traverse through the grid
  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (grid[r][c] === 'L') {
              islandCount++;  // Found a new island
              dfs(r, c);  // Mark the whole island as visited
          }
      }
  }

  return islandCount;
}

// Example usage:

// Dispatch 1
const grid1 = [
  ["L", "L", "L", "L", "W"],
  ["L", "L", "W", "L", "W"],
  ["L", "L",
