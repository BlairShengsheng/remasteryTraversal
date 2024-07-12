const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
}

function DepthFirstTraversal(start){
  const s = [start];
  const v = new Set().add(start);

  while(s.length){
    let curr = s.pop();
    console.log(curr);

    adjList[curr].forEach(node => {
      if(!v.has(node)){
        v.add(node);
        s.push(node);
      }
    })
  }
}

DepthFirstTraversal(1);
