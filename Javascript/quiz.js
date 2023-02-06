/*Mikhail*/

function getQuestions(){
    console.log("hi")
  //get players info for leaderboard
  //need add arguments for FUTURE
    let questions = [];
    let incorrect_answer = []
    let correct_answer = []
    var i = 0;

    //variables for url
    let category_input = ""
    let difficulty_input = ""
    let category_selection = localStorage.getItem("option1");
    let difficulty_selection = localStorage.getItem("option2");

    //test player selection
    let player_selection = {"Category" : category_selection, "Difficulty" : difficulty_selection}

    if (player_selection["Category"] == "General Knowledge")
    {
      category_input = "9"
    }
    else if (player_selection["Category"] == "Politics")
    {
      category_input = "24"
    }
    else if (player_selection["Category"] == "Sports")
    {
      category_input = "21"
    }


    if (player_selection["Difficulty"] == "Easy")
    {
      difficulty_input = "easy"
    }
    else if (player_selection["Difficulty"] == "Medium")
    {
      difficulty_input = "medium"
    }
    else if (player_selection["Difficulty"] == "Hard")
    {
      difficulty_input = "hard"
    }
    

    //question database
    //change url to get different questions
    url = `https://opentdb.com/api.php?amount=10&category=${category_input}&difficulty=${difficulty_input}&type=multiple`

    //get questions

    fetch(url)
    .then(response => {return response.json()})
    .then(loadedQuestions => 
        {
        loadedQuestions.results.map((loadedQuestion) => {
            const formattedQuestion = {
                question: loadedQuestion.question,
                answer: loadedQuestion.correct_answer,
                incorrect_answer : loadedQuestion.incorrect_answers
            };

            questions[i] = formattedQuestion.question
            correct_answer[i] = formattedQuestion.answer
            incorrect_answer[i] = formattedQuestion.incorrect_answer
            i++

            if (i <= 10)
            {
              let text = questions.toString(',')
              localStorage.setItem("questions",text)
              let text2 = correct_answer.toString(',')
              localStorage.setItem("correct_answer",text2)
              let text3 = incorrect_answer.toString(',')
              localStorage.setItem("incorrect_answer",text3)
            }


            return formattedQuestion;

        })
      })

 
      //console.log(questions[0])
      //console.log(incorrect_answer)
  }

  function getPlayerinfo(all = true) {
    //get players info for leaderboard
    //need add arguments for FUTURE
  
    let player_selection = {"Category" : "General Knowledge", "Difficulty" : "Easy"} // test player selection
  
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

    function uploadPlayerinfo(){

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
  
        //add loading/finished screen
        "beforeSend": function(){
        }
      }
  
      $.ajax(settings).done(function (response) {
      });
    }


$(document).ready(function () {
  const APIKEY = "63d1f5f8a95709597409cf9c";
  //getQuestions();
  //uploadPlayerinfo();
  //getPlayerinfo();

});
