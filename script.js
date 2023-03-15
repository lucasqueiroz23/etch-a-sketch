function createColumn(){
  const column = document.createElement('div');
  column.classList.add('grid-col');
  column.classList.add('flex');
  return column;
}

function createSquare(column){
  const square = document.createElement('div');
  square.classList.add('square');
  column.appendChild(square);
}

function createGrid(){
  const grid = document.querySelector('.grid');
  for(let i = 0; i < 16; i++){
    const column = createColumn();
    for(let j = 0; j < 16; j++){
      createSquare(column);
    }
    grid.appendChild(column);
  }
}

createGrid()