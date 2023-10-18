let color = "";
const DEFAULT_SIZE = 16
let input = 16;

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function setupGrid(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div')
      gridElement.classList.add('grid-element')
      gridElement.addEventListener('mouseover', colors)
      gridElement.addEventListener('mousedown', colors)
      board.appendChild(gridElement)
    }
  }
function setSize(input){
    if (input >=2 && input <=100){
        document.querySelector('.error').style.display = 'none'
    setupGrid(input);
    }else{
        document.querySelector('.error').style.display = 'flex'
    }

    

}
function colors(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (color === 'random') {
        e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        e.target.style.backgroundColor = color;
  }


}
function changeColor(choice){
    color = choice;
}

function reset(){
    let container = document.getElementById("board");
    let cell = container.querySelectorAll("div");
    cell.forEach((div) => div.style.backgroundColor = "white");
}




window.onload = () => {
    setupGrid(DEFAULT_SIZE)
  }
