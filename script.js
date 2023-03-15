function createRow(){
  const row = document.createElement('div');
  row.classList.add('grid-row');
  row.classList.add('flex');
  return row;
}

function createColumn(row){
  const square = document.createElement('div');
  square.classList.add('square');
  row.appendChild(square);
}

function createGrid(){
  const grid = document.querySelector('.grid');
  for(let i = 0; i < 16; i++){
    const row = createRow();
    for(let j = 0; j < 16; j++){
      createColumn(row);
    }
    grid.appendChild(row);
  }
}

createGrid();

function changeColor(e){
  e.target.style.backgroundColor = 'blue';
}

document.querySelectorAll('.square').forEach((square)=>{
  square.addEventListener('mouseover', changeColor);
})