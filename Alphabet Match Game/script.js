
/*

--- me trying to implement it as a array where if [1] = [2] it is a match 

let selectedCards = [];

function newGame(){
  selectedCards = [];
  reload();
}

quickly decided to ditch that idea since i thought of something else that seems simpler to implement

*/
// making a constant letters and assigning it the alphabet and image objects
const letters = document.querySelectorAll(".Alphabet, .AlphabetImage");

// using that constant to add event listeners to the objects
letters.forEach(letter => letter.addEventListener('click', matchLetter));

// starting to write my function for matching the letters with their images, and just
// declaring some variables here
let hasClicked = false;
let firstCard, secondCard;

function matchLetter(){

  if (!hasClicked) {          // if statement - if not hasClicked 
    hasClicked = true;        // hasClicked indicates whether or not the user has clicked on a card yet. so here I am simply declaring it to be                                true when the user clicks if they have not clicked yet
    firstCard = this;         // Since this is their first click, I will set the card they click to firstCard
    return;
  }
    secondCard = this;        // This is what will happen if hasClicked is true, I will simply set what the user clicks to secondCard because                               // if they are here it means they have already clicked
    hasClicked = false;       // Also setting hasClicked to false to allow them to go on to click other cards and make another match
 

  checkForMatch();            // Running another function here that will check if the cards match, and display the result to the user
 }

let isMatch;

function checkForMatch(){
  if (firstCard.dataset.letter === secondCard.dataset.letter){      // I have set a data- dataset property to each html element for my alphabets                                                                       and their images, here I am declaring an if condition to check if they are                                                                      the same.
    isMatch = true;
    alert("Good job, it's a match!");
  }else{
    isMatch = false;
    alert("These two don't quite match, please try again");
  return;
  }
}