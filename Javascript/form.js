/*form validation for signup */
function formValidation(){
    let email = document.forms["form"]["email"].value;
    let name = document.forms["form"]["name"].value
    let pwd = document.forms["form"]["password"].value
    if(email == "" || name == "" || pwd == ""){
    alert("Please fill the above fields");
    return false;
  }
  /*upload player information into database */
  else{
      uploadPlayerinfo(name,email,pwd,0,0,"NIL","NIL")
      return false;
      
    }
}
  /*Form validation for login*/ 
  function formValidate(){
    let name = document.forms["form"]["name"].value
    let pwd = document.forms["form"]["password"].value
    if(name == "" || pwd == ""){
    alert("Please fill the above fields");
    return false;
  }
    else{
      Login();
      return false;
      
  
    }
  }
  /*Back button to redirect to index.html*/
function Redirect(){
  location.replace("https://jesiahchow.github.io/Assignment2/")
};








  function uploadPlayerinfo(name,email,password,score,lives,category,difficulty){
    //these url and apiKEY lead to Leaderboard database
    var APIKEY = "63d1f5f8a95709597409cf9c";
    var url = "https://leaderboard-4a7a.restdb.io/rest/players"
    //change APIKey depending on whether user is on game menu or in signup page
    //since function is only used to either submit player score and to sign up
    //url and APIkey change will lead to login database
    if (document.URL.includes("http://127.0.0.1:5500/form.html") || document.URL.includes("http://127.0.0.1:5500/signup.html") || document.URL.includes("https://jesiahchow.github.io/Assignment2/form.html") || document.URL.includes("https://jesiahchow.github.io/Assignment2/signup.html"))
    {
      //login
      APIKEY = "63e2603c478852088da67e5c";
      url =   "https://login-dc79.restdb.io/rest/players";

    }

//2 different APIKEY and url depending on webpage
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
      "Name": player_info[0],
      "Email": player_info[1],
      "Password": player_info[2],
      "Score" : player_info[3],
      "Lives" : player_info[4],
      "Category" : player_info[5],
      "Difficulty" : player_info[6] 
    }

    let settings = {
      "async": true,
      "crossDomain": true,
      "url": url,
      "method": "POST", 
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata),
      //check error
      error: function(xhr, status, error) {
        let err = JSON.parse(xhr.responseText)
        console.log(err.message)
        //if error is this, means that username/email already exists in database
        if (err.message == "Unable to save record (validation)")
          {
            //inform user
            alert("UserName/Email already exists")
          }
        
        },
      
      "beforeSend": function(){
      }
    }

    $.ajax(settings).done(function (response) {
      //check if database being used is the login database
      if(   url ==   "https://login-dc79.restdb.io/rest/players")
      {
        alert("You have signed in!");
        //store user name,password and email for future use
        //for score submission
        localStorage.setItem("playername",name )
        localStorage.setItem("playerpassword",password )
        localStorage.setItem("playeremail",email )
        //redirect to home page
        window.location = "home.html"
      }
    });
  }


  function Login()
  {
    //obtain input values of name and password
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var found_name = false;


    var APIKEY = "63e2603c478852088da67e5c";
    var url =   "https://login-dc79.restdb.io/rest/players";      
  
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET", 
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        error: function(xhr, status, error) {
          let err = JSON.parse(xhr.responseText)
          console.log(err.message)
        },

      }

    $.ajax(settings).done(function (response) { 



      for (let i = 0; i < response.length ; i++) {
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
          //for each response, check if response name is the same
          if (response[i].Name == name)
          {
            found_name = true
            //if password of response is the same
            if (response[i].Password == password)
            {
              alert("You have signed in!");
              //store user name,password and email for future use
              //for score submission
              localStorage.setItem("playername",response[i].Name )
              localStorage.setItem("playerpassword",response[i].Password )
              localStorage.setItem("playeremail",response[i].Email )
              //redirect to home page
              window.location = "home.html"
            }
            else
            {
              //password is wrong
              alert("password is wrong");
            }
          }
          //if its the last response and there is not a response with the same name
          else if (i == (response.length -1) && found_name == false)
          {
            alert("Please ensure you have typed in the right username")
          }



        }


      }


    })
  }


$(document).ready(function () {

  //check if the current page is login or signup
  if (document.URL.includes("http://127.0.0.1:5500/form.html") || document.URL.includes("http://127.0.0.1:5500/signup.html") || document.URL.includes("https://jesiahchow.github.io/Assignment2/form.html") || document.URL.includes("https://jesiahchow.github.io/Assignment2/signup.html"))
  {
  //if so, remove all local storage of name password and email
  localStorage.removeItem("playername")
  localStorage.removeItem("playerpassword")
  localStorage.removeItem("playeremail")
  }
});







