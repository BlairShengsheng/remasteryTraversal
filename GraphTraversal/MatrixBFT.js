const matrix = [
  [ 0, 1, 0, 0, 1 ],
  [ 1, 0, 0, 0, 1 ],
  [ 1, 1, 0, 1, 1 ],
  [ 0, 1, 1, 0, 0 ],
  [ 0, 0, 0, 0, 0 ]
];
function getNeighbors(node, matrix){
  let neighbors = [];
  let [x, y] = node;

  //up
  if(x - 1 >= 0){
    neighbors.push([x - 1, y]);

    if(y - 1 >= 0){// up left
      neighbors.push([x - 1, y - 1]);
    }

    if(y + 1 < matrix[x - 1].length){// up right 
      neighbors.push([x - 1, y + 1]);
    }
  }

  //down
  if(x + 1 < matrix.length){
    neighbors.push([x + 1, y]);

    if(y - 1 >= 0){ // down left
      neighbors.push([x + 1, y + 1]);
    }

    if(y + 1 < matrix[x + 1].length){// down right
      neighbors.push([x + 1, y + 1]);
    }
  }

  //left 
  if(y - 1 >= 0){
    neighbors.push([x, y - 1]);
  }

  //right
  if(y + 1 < matrix[x].length){
    neighbors.push([x + 1, y + 1]);
  }

  return neighbors;
}

// BFT Traversal in Matrix Graph
function traverseMatrix(matrix, startNode){
  let q = [startNode];
  let v = new Set().add(startNode);

  while(q.length){
    let curr = q.shift();
    console.log(curr.toString());

    let neighbors = getNeighbors(curr, matrix);
    for(let neighbor of neighbors){
      if(!v.has(neighbor.toString()) && matrix[neighbor[0]][neighbor[1]] === 1){
        v.add(neighbor.toString());
        q.push(neighbor);
      }
    }
  }
  return undefined;
}

console.log(traverseMatrix(matrix, [0,0]));
