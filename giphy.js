// default game array
var gameArray = ['Zelda', 'Donkey Kong', 'World of Warcraft', 'Super Mario'];

// function to add buttons based on gameArray titles for each element
var displayArray = function (array) {
    // first empties button div
    $('.btnContain').empty();
    // creates button for each element in array
    for (i = 0; i < array.length; i++) {
        var but = $("<button class='btn btn-outline-secondary mr-2' type='button'></button>").attr('game-name', gameArray[i]);
        but.text(array[i])
        $('.btnContain').append(but);
    }
}
displayArray(gameArray);

// on click function to push text from search bar to gameArray

$('.searchBtn').on('click', function (event) {
    event.preventDefault();
    const input = $('.userIn').val();
    gameArray.push(input);
    displayArray(gameArray);
    $('.userIn').val("");
})

// axios command 
var link = "https://api.giphy.com/v1/gifs/search?api_key=mcTa9s1YDz1zMg4Ad6oszrHFMV71V7oo&q=dog&limit=10&offset=0&rating=PG&lang=en";
axios({ url: link,
        method: "GET",
})
  .then(function (response) {
    const giphy = JSON.stringify(response.data.data[0].images.fixed_width_small.url);
    const pic = $("<img src="+giphy+" class='gif' alt='blank'>");
    $('.gifContain').append(pic);
    console.log(giphy);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })