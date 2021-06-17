// all codes will be done within    the event listener below
document.addEventListener('DOMContentLoaded',()=>{

    // make an array of card and give dem names to  used later
// make two of each item as two is needed
const cardArray=[
    {name:"fries",img:'images/fries.png'},
    {name:"fries",img:'images/fries.png'},
    {name:"hotdog",img:'images/hotdog.png'},
    {name:"cheeseburger",img:'images/cheeseburger.png'},
    {name:"ice-cream",img:'images/ice-cream.png'},
    {name:"milkshake",img:'images/milkshake.png'},
    {name:"pizza",img:'images/pizza.png'},
    {name:"hotdog",img:'images/hotdog.png'},
    {name:"cheeseburger",img:'images/cheeseburger.png'},
    {name:"ice-cream",img:'images/ice-cream.png'},
    {name:"milkshake",img:'images/milkshake.png'},
    {name:"pizza",img:'images/pizza.png'}  
]
// randomise d card array using sort n math
cardArray.sort(()=>0.5-Math.random())

const grid = document.querySelector('.grid')
const resultDisplay =document.querySelector('#result')
var cardsChosen =[]
var cardsChosenID=[]
var cardsWon=[]

//  create the gamebaord
function createBoard(){
    for(let i = 0; i<cardArray.length;i++){
        var card= document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipcard)
        grid.appendChild(card)
    }
}
// check for match
function checkForMatch(){
    var cards=document.querySelectorAll('img')
    const optionOneId=cardsChosenID[0]
    const optionTwoId=cardsChosenID[1]
    if(cardsChosen[0]===cardsChosen[1]){
        alert("you found a match")
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen)
    } else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('sorry, try again')
    }
    cardsChosen =[]
    cardsChosenID=[]
    resultDisplay.textContent=cardsWon.length
    if (cardsWon.length===cardArray.length/2){
        resultDisplay.textContent='Congratulations! You foumd them all'}
}

// flipfunction
function flipcard(){
    var cardId=this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenID.push(cardId)
    // thsi.setratribute will let us put images on our cards based on id selected
    this.setAttribute('src',cardArray[cardId].img)
    if (cardsChosen.length===2){
        setTimeout(checkForMatch, 500)
    }
}

createBoard()
})

