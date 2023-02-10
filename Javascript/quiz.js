/*Mikhail*/



    
var getQuestions = function(){

  let questions = [];
  let incorrect_answer = []
  let correct_answer = []
  let data = []

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

            if (i == 10)
            {
              //store strings of the questions for formatting
              let text = questions.toString(',')
              localStorage.setItem("questions",text)
              let text2 = correct_answer.toString(',')
              localStorage.setItem("correct_answer",text2)
              let text3 = incorrect_answer.toString(',')
              localStorage.setItem("incorrect_answer",text3)
              console.log("made")
            } 


        })
      })



      //console.log(questions[0])
      //console.log(incorrect_answer)
  }

  function getPlayerinfo(all = true) {
    for (let i = 5; i >= 1; i--)
    {
      //reset upon calling of this function
      console.log(i)
      document.getElementById(`rank${i}`).textContent = ""
      document.getElementById(`cat${i}`).textContent = ""
      document.getElementById(`name${i}`).textContent = ""
      document.getElementById(`score${i}`).textContent = ""
      document.getElementById(`lives${i}`).textContent = ""
    }
    var player_compare = []
    const APIKEY = "63d1f5f8a95709597409cf9c";

    //get players info for leaderboard
    let category_selection = localStorage.getItem("Loption1");
    let difficulty_selection = localStorage.getItem("Loption2");



    //get leaderboard info
    let player_selection = {"Category" : category_selection, "Difficulty" : difficulty_selection}
  
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

        
        for (let i = 0; i < response.length ; i++) {

  
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


            player_compare.push([response[i].Name,response[i].Score,response[i].Lives])
          
          }
        }

        //sort leader board in descending order best sccore to worst
        player_compare.sort(compareSecondColumn);
        sessionStorage.setItem("players",player_compare)
        console.log(player_compare)


        function compareSecondColumn(a, b) {
          if (a[1] === b[1]) {
              return (a[2] < b[2]) ? -1 : 1;
          }
          else {
              return (a[1] < b[1]) ? -1 : 1;
          }
      }
      var position = 1;

      //put the sorted list of players into the leaderboard
      //only 5 ppositions
      for (let i = player_compare.length -1 ; i >= 0 ; i--)
      {
        console.log(i)
        document.getElementById(`rank${position}`).textContent = position
        document.getElementById(`cat${position}`).textContent = category_selection
        document.getElementById(`name${position}`).textContent = player_compare[i][0]
        document.getElementById(`score${position}`).textContent = player_compare[i][1]
        document.getElementById(`lives${position}`).textContent = player_compare[i][2]
        position ++
        if (position == 6)
        {
          break
        }
      }
  

    });
  
  }


