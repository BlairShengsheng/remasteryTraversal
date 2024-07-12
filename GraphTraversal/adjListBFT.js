const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
}

function BreadthFirstTraversal(start){
  const q = [start];
  const v = new Set().add(start);

  while(q.length){
    let curr = q.shift();
    console.log(curr);

    adjList[curr].forEach(node => {
      if(!v.has(node)){
        v.add(node);
        q.push(node);
      }
    })
  }
}

BreadthFirstTraversal(1);
