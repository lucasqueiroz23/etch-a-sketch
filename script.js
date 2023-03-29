const grid = document.querySelector('.grid');

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
  for(let i = 0; i < size; i++){
    const row = createRow();
    for(let j = 0; j < size; j++){
      createColumn(row);
    }
    grid.appendChild(row);
  }
  
  document.querySelectorAll('.square').forEach((square)=>{
    square.addEventListener('mouseover', changeColor);
  })
  
}

function changeColor(e){
  e.target.style.backgroundColor = 'black';
}

function clearGrid(){
  document.querySelectorAll('.square').forEach(square=>square.style.backgroundColor = 'white');
}

function removeAllRows(){
  while(grid.firstChild){
    grid.removeChild(grid.firstChild);
  }
}

function updateGridSizeLabel(e){
  const label = document.querySelector('label');
  const newSize = e.target.value;
  label.textContent = `${newSize} x ${newSize}`;
}

function changeGridSize(e){
  removeAllRows();
  createGrid(e.target.value);
}

document.querySelectorAll('.square').forEach((square)=>{
  square.addEventListener('mouseover', changeColor);
})
document.querySelector('input').addEventListener('input', updateGridSizeLabel);
document.querySelector('input').addEventListener('mouseup', changeGridSize);
document.querySelector('button').addEventListener('click', clearGrid);

createGrid(16);

function createCopyRight(){
  const footer = document.createElement('footer');
  const reference = document.createElement('div');
  const anchor = document.createElement('a');
  anchor.setAttribute('href', 'https://github.com/lucasqueiroz23');
  anchor.setAttribute('target', '_blank');
  anchor.textContent = 'Lucas Queiroz'
  reference.textContent = 'Made by ';
  reference.appendChild(anchor);
  footer.appendChild(reference);
  document.querySelector('body').appendChild(footer);
}

createCopyRight();