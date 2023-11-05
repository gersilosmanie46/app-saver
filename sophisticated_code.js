Here's a code example that meets your requirements. The filename is "sophisticated_code.js" and the code generates a random maze using a depth-first search algorithm:

```javascript
// sophisticated_code.js
// Random Maze Generator

class Maze {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.grid = this.initializeGrid();
    this.stack = [];
    this.currentCell = this.grid[0][0];
    this.currentCell.visited = true;
  }

  initializeGrid() {
    let grid = new Array(this.rows);
    for (let i = 0; i < this.rows; i++) {
      grid[i] = new Array(this.cols);
      for (let j = 0; j < this.cols; j++) {
        grid[i][j] = new Cell(i, j);
      }
    }
    return grid;
  }

  getUnvisitedNeighbors(cell) {
    const { x, y } = cell;
    let neighbors = [];

    if (x > 0 && !this.grid[x - 1][y].visited) {
      neighbors.push(this.grid[x - 1][y]);
    }
    if (x < this.rows - 1 && !this.grid[x + 1][y].visited) {
      neighbors.push(this.grid[x + 1][y]);
    }
    if (y > 0 && !this.grid[x][y - 1].visited) {
      neighbors.push(this.grid[x][y - 1]);
    }
    if (y < this.cols - 1 && !this.grid[x][y + 1].visited) {
      neighbors.push(this.grid[x][y + 1]);
    }

    return neighbors;
  }

  removeWall(currentCell, nextCell) {
    const xDiff = currentCell.x - nextCell.x;
    const yDiff = currentCell.y - nextCell.y;

    if (xDiff === 1) {
      currentCell.walls.left = false;
      nextCell.walls.right = false;
    } else if (xDiff === -1) {
      currentCell.walls.right = false;
      nextCell.walls.left = false;
    } else if (yDiff === 1) {
      currentCell.walls.top = false;
      nextCell.walls.bottom = false;
    } else if (yDiff === -1) {
      currentCell.walls.bottom = false;
      nextCell.walls.top = false;
    }
  }

  depthFirstSearch() {
    let nextCell = this.getRandomNeighbor(this.currentCell);

    if (nextCell) {
      nextCell.visited = true;
      this.stack.push(this.currentCell);
      this.removeWall(this.currentCell, nextCell);
      this.currentCell = nextCell;
    } else if (this.stack.length > 0) {
      this.currentCell = this.stack.pop();
    }
  }

  getRandomNeighbor(cell) {
    const neighbors = this.getUnvisitedNeighbors(cell);
    if (neighbors.length > 0) {
      const randIndex = Math.floor(Math.random() * neighbors.length);
      return neighbors[randIndex];
    } else {
      return null;
    }
  }

  generate() {
    while (this.stack.length > 0) {
      this.depthFirstSearch();
    }
  }
}

class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.visited = false;
    this.walls = {
      top: true,
      right: true,
      bottom: true,
      left: true,
    };
  }
}

// Example usage
const maze = new Maze(10, 10);
maze.generate();

for (let i = 0; i < maze.rows; i++) {
  let row = "";
  for (let j = 0; j < maze.cols; j++) {
    const cell = maze.grid[i][j];
    row += cell.walls.top ? "###" : "# #";
  }
  console.log(row);
  row = "";
  for (let j = 0; j < maze.cols; j++) {
    const cell = maze.grid[i][j];
    row += cell.walls.left ? "#" : " ";
    row += " ";
    row += cell.walls.right ? "#" : " ";
  }
  console.log(row);
  row = "";
  for (let j = 0; j < maze.cols; j++) {
    const cell = maze.grid[i][j];
    row += cell.walls.bottom ? "###" : "# #";
  }
  console.log(row);
}
```

This code generates and prints a random maze using a depth-first search algorithm. It creates a `Maze` class that represents the maze and a `Cell` class that represents each individual cell in the maze. The `depthFirstSearch` method implements the depth-first search algorithm to generate the maze.

The generated maze is then printed to the console using ASCII characters, where `#` represents a wall and space represents an open passage.