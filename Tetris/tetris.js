document.addEventListener('DOMContentLoaded',()=>{
// define ur grid

const gridWidth=10
const gridHeight=20
const width=10
const gridSize=gridWidth*gridHeight

let my_element=document.createElement('h1');
let my_span=document.createElement('span')
my_span.innerText='your Mother';
my_element.appendChild(my_span);
my_element.fillStyle="green"
// my_element.classList.add('custom_class');
document.body.appendChild(my_element);

function createGrid(){
    var Grid;
    var gridElement;
    Grid=document.createElement('div')
    Grid.classList.add("grid")
    for(let i =0; i<gridSize;i++){
        let gridElement=document.createElement('div')
        gridElement.classList.add('div')
        Grid.appendChild(gridElement)}
    document.body.appendChild(Grid)
    
    for (let i=0;i<gridWidth;i++){
            grid=document.createElement('div')
            grid.classList.add('taken')
            Grid.appendChild(grid)
        }
    document.body.appendChild(Grid)
 }
createGrid()

//use Array.from() to collect all the div and make dem as array
let squares=Array.from(document.querySelectorAll('.div'))

// draw tetrinimos
const lbrick = [
    [1, gridWidth + 1, gridWidth * 2 + 1, 2],
    [gridWidth, gridWidth + 1, gridWidth + 2, gridWidth * 2 + 2],
    [1, gridWidth + 1, gridWidth * 2 + 1, gridWidth * 2],
    [gridWidth, gridWidth * 2, gridWidth * 2 + 1, gridWidth * 2 + 2]
  ]

  const zbrick = [
    [0, gridWidth, gridWidth + 1, gridWidth * 2 + 1],
    [gridWidth + 1, gridWidth + 2, gridWidth * 2, gridWidth * 2 + 1],
    [0, gridWidth, gridWidth + 1, gridWidth * 2 + 1],
    [gridWidth + 1, gridWidth + 2, gridWidth * 2, gridWidth * 2 + 1]
  ]

  const tbrick = [
    [1, gridWidth, gridWidth + 1, gridWidth + 2],
    [1, gridWidth + 1, gridWidth + 2, gridWidth * 2 + 1],
    [gridWidth, gridWidth + 1, gridWidth + 2, gridWidth * 2 + 1],
    [1, gridWidth, gridWidth + 1, gridWidth * 2 + 1]
  ]

  const obrick = [
    [0, 1, gridWidth, gridWidth + 1],
    [0, 1, gridWidth, gridWidth + 1],
    [0, 1, gridWidth, gridWidth + 1],
    [0, 1, gridWidth, gridWidth + 1]
  ]

  const ibrick = [
    [1, gridWidth + 1, gridWidth * 2 + 1, gridWidth * 3 + 1],
    [gridWidth, gridWidth + 1, gridWidth + 2, gridWidth + 3],
    [1, gridWidth + 1, gridWidth * 2 + 1, gridWidth * 3 + 1],
    [gridWidth, gridWidth + 1, gridWidth + 2, gridWidth + 3]
  ]

  const bricks = [lbrick, zbrick, tbrick,obrick, ibrick]
  
//Randomly select tetrimonos
let StartPositionX=4
let StartPositionY=0
let random= Math.floor(Math.random()*bricks.length)

let current=bricks[random][StartPositionY]

// draw brick.
function draw(){
current.forEach(index=>{squares[StartPositionX+index].classList.add('brick')})
}
function undraw(){
    current.forEach(index=>{squares[StartPositionX+index].classList.remove('brick')})
    }
draw()
// undraw()

// make the bricks move down every sec
const freeze =()=>{
  if(current.some(index=>squares[StartPositionX+index+10].classList.contains("taken"))){
  // current.forEach(index=>squares[StartPositionX+index].classList.add('taken'))
  // stopdraw()
  //start a new random block
  clearInterval(timerId)
  random=Math.floor(Math.random()*bricks.length)
  current=bricks[random][StartPositionY]
  StartPositionX=4
  draw()
}}

// timerId=setInterval(() => {  
// if (StartPositionY<340){
//   undraw()
// StartPositionX+=gridWidth
// StartPositionY+=gridHeight
// draw()
// console.log(StartPositionY)}else

// }, 1000);

function stopdraw(){
clearInterval(timerId)}



//freeze function
//using .Some() i.e itemArray.some(false,true,false) just checking if one function is true then it excecute
//if some of the squrea that makes up the current tetrimino its index and the whole width contains a square
// with the class name of taken, turn each terimonis squares to a square that contains the class of taken





});
