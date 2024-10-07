// const getTotalIsles = function (grid) {


//   // write your code here

// };

// module.exports = getTotalIsles;


const getTotalIsles = function (grid) {
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

     
      dfs(r - 1, c);  
      dfs(r + 1, c); 
      dfs(r, c - 1);  
      dfs(r, c + 1);  
  };

  
  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (grid[r][c] === 'L') {
              islandCount++;  
              dfs(r, c); 
          }
      }
  }

  return islandCount;
};

module.exports = getTotalIsles;



