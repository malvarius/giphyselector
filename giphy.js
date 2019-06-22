// default game array
var gameArray = ['Zelda', 'Donkey Kong','World of Warcraft','Super Mario'];

// function to add buttons based on gameArray titles for each element

for (i=0;i<gameArray.length-1;i++){
var but = $("<button class='btn btn-outline-secondary mr-2' type='button'></button>").attr('game-name',gameArray[i]);
but.text(gameArray[i])
$('.btnContain').append(but);
}