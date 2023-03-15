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

function createGrid(size){
  const grid = document.querySelector('.grid');
  for(let i = 0; i < size; i++){
    const row = createRow();
    for(let j = 0; j < size; j++){
      createColumn(row);
    }
    grid.appendChild(row);
  }
}

createGrid(16);

function changeColor(e){
  e.target.style.backgroundColor = 'blue';
}

document.querySelectorAll('.square').forEach((square)=>{
  square.addEventListener('mouseover', changeColor);
})