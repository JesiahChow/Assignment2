

$(document).ready(function () {
  const APIKEY = "63d1f5f8a95709597409cf9c";


  //get question data
  url = "https://opentdb.com/api.php?amount=10&category=24  "

  //get questions

  fetch(url)
  .then(response => {return response.json()})
  .then(loadedQuestions => console.log(loadedQuestions.results));


  let player_info= ["Bob","Bob@gmail.com","BobLovesCake",2314,2,"Politics","Easy"] //test_player info



  //obtain player info
  let playerName = $("#player-name").val();
  let playerEmail = $("#player-email").val();
  let playerPassword = $("#player-password").val();
  let playerScore = $("#player-score").val();
  let playerLives = $("#player-lives").val();
  let playerCategory = $("#player-category").val();
  let playerDifficulty = $("#player-difficulty").val();


//data to post
  let jsondata =
  {
    /*"Name": playerName,
    "Email": playerEmail,
    "Password": playerPassword,
    "Score" : playerScore,
    "Lives" : playerLives,
    "Category" : playerCategory,
    "Difficulty" : playerDifficulty */

    "Name": player_info[0],
    "Email": player_info[1],
    "Password": player_info[2],
    "Score" : player_info[3],
    "Lives" : player_info[4],
    "Category" : player_info[5],
    "Difficulty" : player_info[6] //test submit data
  }

  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://leaderboard-4a7a.restdb.io/rest/players",
    "method": "POST", //[cher] we will use post to send info
    "headers": {
      "content-type": "application/json",
      "x-apikey": APIKEY,
      "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(jsondata),
    "beforeSend": function(){

    }
  }

  $.ajax(settings).done(function (response) {
  });

  let player_selection = {"Category" : "General Knowledge", "Difficulty" : "Easy"} // test player selection



  function getPlayerinfo(all = true) {
  

    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://leaderboard-4a7a.restdb.io/rest/players",
      "method": "GET", //[cher] we will use GET to retrieve info
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
    }

    //[STEP 8]: Make our AJAX calls
    //Once we get the response, we modify our table content by creating the content internally. We run a loop to continously add on data
    //RESTDb/NoSql always adds in a unique id for each data, we tap on it to have our data and place it into our links 
    $.ajax(settings).done(function (response) {
      
      for (var i = 0; i < response.length ; i++) {

        let content = "";

        // filter leaderboard to player selection
        if (response[i].Category == player_selection["Category"] && response[i].Difficulty == player_selection["Difficulty"]){


          content = `${content}<tr id='${response[i]._id}'>
          <td>${response[i].Name}</td>
          <td>${response[i].Email}</td>
          <td>${response[i].Password}</td>
          <td>${response[i].Score}</td>
          <td>${response[i].Lives}</td>
          <td>${response[i].Category}</td>
          <td>${response[i].Difficulty}</td>
          <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td><a href='#update-contact-container' class='update' data-id='${response[i]._id}' data-name='${response[i].Name}' data-email='${response[i].Email}' data-password='${response[i].Password}' data-score='${response[i].Score}' data-lives='${response[i].Lives}' data-category='${response[i].Category}' data-difficulty='${response[i].Difficulty}' >Update</a></td></tr>`;
          console.log(content);
          console.log(i);
        
        }
      }


    });

  }
  getPlayerinfo();

});
