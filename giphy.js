// default game array
var gameArray = ['Zelda', 'Donkey Kong', 'World of Warcraft', 'Super Mario Bros'];

// function to add buttons based on gameArray titles for each element
var displayArray = function (array) {
    // first empties button div
    // creates button for each element in array
    for (i = 0; i < array.length; i++) {
        var but = $("<button class='btn gifBtn btn-outline-warning mr-2 mt-2' type='button'></button>");
        but.attr('gif-name',array[i]);
        but.text(array[i])
        $('.btnContain').append(but);
    }
}
displayArray(gameArray);

// on click function to push text from search bar to gameArray and regenerate buttons
// IMPORTANT: must have axios on click command within search button command or scope of updated array will not have access

$('.searchBtn').on('click', function (event) {
    event.preventDefault();
    $('.btnContain').empty();
    const input = $('.userIn').val().trim();
    gameArray.push(input);
    $('.userIn').val("");
    displayArray(gameArray);
  })
  // if user pushes enter, function clicks the search btn
  document.onkeyup = function(e){
    if (e.keyCode===13){
      $('.searchBtn').click();
    }
  }


// axios command  to get gifs based on gif-name attribute , gets 10 gifs
$(document.body).on("click", ".gifBtn", function() {
  $('.gifContain').empty();
  const search = $(this).attr('gif-name');
  const link = "https://api.giphy.com/v1/gifs/search?api_key=mcTa9s1YDz1zMg4Ad6oszrHFMV71V7oo&q="+search+"&limit=10&offset=0&rating=PG&lang=en";
axios({ url: link,
      method: "GET",
})
.then(function (response) {
    for(j=0;j<10;j++){
  var gip = JSON.stringify(response.data.data[j].images.downsized_medium.url);
  const pic = $("<img src="+gip+" class='mt-4 mr-3 gif' alt='blank'>");
  $('.gifContain').append(pic);
    }
    
})
.catch(function (error) {
  // handle error
  console.log(error);
})

})
// $('.gifBtn').on('click',function(){
//     $('.gifContain').empty();
//     const search = $(this).attr('gif-name');
//     const link = "https://api.giphy.com/v1/gifs/search?api_key=mcTa9s1YDz1zMg4Ad6oszrHFMV71V7oo&q="+search+"&limit=10&offset=0&rating=PG&lang=en";
// axios({ url: link,
//         method: "GET",
// })
//   .then(function (response) {
//       for(j=0;j<10;j++){
//     var gip = JSON.stringify(response.data.data[j].images.downsized_medium.url);
//     const pic = $("<img src="+gip+" class='mt-4 mr-3 gif' alt='blank'>");
//     $('.gifContain').append(pic);
//       }
      
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })

// })

