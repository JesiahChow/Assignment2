/*form validation for signup */
function formValidation(){
    let email = document.forms["form"]["email"].value;
    let name = document.forms["form"]["name"].value
    let pwd = document.forms["form"]["psw"].value
    if(email == "" || name == "" || pwd == ""){
    alert("Please fill the above fields");
    return false;
  }
  else{
      uploadPlayerinfo(name,email,pwd,0,0,"NIL","NIL")
      return false;
      
    }
}
  /*Form validation for login*/ 
  function formValidate(){
    let name = document.forms["form"]["name"].value
    let pwd = document.forms["form"]["psw"].value
    if(name == "" || pwd == ""){
    alert("Please fill the above fields");
    return false;
  }
    else{
      Login();
      return false;
      
  
    }
  }








  function uploadPlayerinfo(name,email,password,score,lives,category,difficulty){
    const APIKEY = "63d1f5f8a95709597409cf9c";

    let player_info= [name,email,password,score,lives,category,difficulty] //test_player info



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
      error: function(xhr, status, error) {
        let err = JSON.parse(xhr.responseText)
        console.log(err.message)
        if (err.message == "Unable to save record (validation)")
          {
            alert("UserName/Email already exists")
          }
        
        },
      

      //add loading/finished screen
      "beforeSend": function(){
      }
    }

    $.ajax(settings).done(function (response) {

    });
  }


  function Login()
  {

    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    console.log(name)
    console.log(password)


    const APIKEY = "63d1f5f8a95709597409cf9c";
  
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
        error: function(xhr, status, error) {
        alert(xhr.responseText);
        },

      }

    $.ajax(settings).done(function (response) { 



      for (let i = 0; i < response.length ; i++) {
        console.log(i)
        let content = "";

        if (response[i].Category == "NIL" && response[i].Difficulty == "NIL"){

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
          if (response[i].Name == name)
          {
            found_name = true
            if (response[i].Password == password)
            {
              alert("You have signed in!");
            }
            else
            {
              alert("password wrong");
            }
          }



        }


      }


    })
  }



/*$(document).ready(function () {
  const start_button = document.getElementById('register');
  $(start_button).click(function () {

    let status = formValidation();
    console.log(status)

    if (status == true)
    {
      uploadPlayerinfo()
    }


  })

});*/






/*RestDB Database

const apikey = "63b79ea5969f06502871ab23"

$("#register").on("click",function(e){
  e.preventDefault();
  const emailValue = $("#email").val();
  const passwordValue = $("#password").val();
  let jsondata = {
    "email":emailValue,
    "password": passwordValue
  };
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://interactivedev-8487.restdb.io/rest/account",
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "x-apikey": apikey,
      "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(jsondata),
    "beforeSend":function(){
        $("#register").prop("disabled",true);
        $("#signup-form").trigger("reset");
    }
  }
  $.ajax(settings).done(function(response){
    console.log(response);
    $("#signup-form").prop("disabled",false);
    getTable();
  })
  
})

function getTable(){
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://interactivedev-8487.restdb.io/rest/account",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": apikey,
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  
}
*/
