let matrix1 = [];
let nodes=[];
let edges=[];
for (let i = 0; i < 2; i++) {
  matrix1[i] = new Array(2);
}

//console.log(matrix1);
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
     
    console.log(`${i}${j}`);
    matrix1[i][j] = `N${i}-${j}`;
    if(i==0 && j==0){
        nodes.push(node_data={
            id: `N${i}-${j}`,
        });
        edges.push(ed_data ={
            source: `N${i}-${j}`,
            destination:`N${i}-${j+1}`,
        });
        edges.push(ed_data ={
            source: `N${i}-${j}`,
            destination:`N${i+1}-${j}`,
        });
    }if(i==1 && j==0 ){
        nodes.push(node_data={
            id: `N${i}-${j}`,
        });
        edges.push(ed_data ={
            source: `N${i}-${j}`,
            destination:`N${i-1}-${j}`,
        });
        edges.push(ed_data ={
            source: `N${i}-${j}`,
            destination:`N${i}-${j+1}`,
        });
    }
    if(i==0 && j==1 ){
        nodes.push(node_data={
            id: `N${i}-${j}`,
        });
        edges.push(ed_data ={
            source: `N${i}-${j}`,
            destination:`N${i}-${j-1}`,
        });
        edges.push(ed_data ={
            source: `N${i}-${j}`,
            destination:`N${i+1}-${j}`,
        });
    }
    if(i==1 && j==0 ){
        nodes.push(node_data={
            id: `N${i}-${j}`,
        });
        edges.push(ed_data ={
            source: `N${i}-${j}`,
            destination:`N${i-1}-${j}`,
        });
        edges.push(ed_data ={
            source: `N${i}-${j}`,
            destination:`N${i}-${j+1}`,
        });
    }
    if(i==1 && j==1 ){
        nodes.push(node_data={
            id: `N${i}-${j}`,
        });
        edges.push(ed_data ={
            source: `N${i}-${j}`,
            destination:`N${i-1}-${j}`,
        });
        edges.push(ed_data ={
            source: `N${i}-${j}`,
            destination:`N${i}-${j-1}`,
        });
    }
    
  }
}

let result={nodes,edges};
console.log(result);
