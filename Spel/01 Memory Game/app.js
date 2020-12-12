document.addEventListener("DOMContentLoaded", () => {


//card options
let cardArray = [
    {
        name: 'calc',
        img: 'images/calculator-716-461701.png'
    },
    {
        name: 'calc',
        img: 'images/calculator-716-461701.png'
    },
    {
        name: 'cover',
        img: 'images/cover.png'
    },
    {
        name: 'cover',
        img: 'images/cover.png'
    },
    {
        name: 'phone',
        img: 'images/MetroUI-Other-Phone-icon.png'
    },
    {
        name: 'phone',
        img: 'images/MetroUI-Other-Phone-icon.png'
    },
    {
        name: 'term',
        img: 'images/terminal-app.png'
    },
    {
        name: 'term',
        img: 'images/terminal-app.png'
    },
    {
        name: 'tree',
        img: 'images/tree.png'
    },
    {
        name: 'tree',
        img: 'images/tree.png'
    },
    {
        name: 'word',
        img: 'images/Word-icon.png'
    },
    {
        name: 'word',
        img: 'images/Word-icon.png'
    }
]


cardArray.sort(() => 0.5 - Math.random());

//create gameboard
 
let grid = document.querySelector('.grid')
let resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function createBoard()
{
    for (let i = 0; i < cardArray.length; i++)
    {
        let card = document.createElement('img');
        card.setAttribute('src', 'images/images.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        grid.appendChild(card);
    }
}

// check for matches
function checkForMatch()
{
    let cards = document.querySelector('img');
    let optionOneId = cardsChosenId[0];
    let optionTwoId = cardsChosenId[1];

    if (optionOneId === optionTwoId)
    {
        
        cards[optionOneId].setAttribute('src', 'images/white-icon-11.jpg');
        cards[optionTwoId].setAttribute('src', 'images/white-icon-11.jpg');
        alert('You have clicked the same image');
       
        
    }else if (cardsChosen[0] === cardsChosen[1])
    {
        alert('You found a match');
        cards[optionOneId].setAttribute('src', 'images/images.png');
        cards[optionTwoId].setAttribute('src', 'images/images.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
        
    }else
    {
        cards[optionOneId].setAttribute('src', 'images/white-icon-11.jpg');
        cards[optionTwoId].setAttribute('src', 'images/white-icon-11.jpg');
        alert('Sorry, try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2)
    {
        resultDisplay.textContent = 'Congratulations! You found them all!';
    }

}



//flip you card
function flipCard()
{
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2)
    {
        setTimeout(checkForMatch, 500);
    }

}




createBoard();










})