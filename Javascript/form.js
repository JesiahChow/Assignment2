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
    var APIKEY = "63d1f5f8a95709597409cf9c";
    var url = "https://leaderboard-4a7a.restdb.io/rest/players"
    if (document.URL.includes("http://127.0.0.1:5500/form.html") || document.URL.includes("http://127.0.0.1:5500/signup.html") || document.URL.includes("https://jesiahchow.github.io/Assignment2/form.html") || document.URL.includes("https://jesiahchow.github.io/Assignment2/signup.html"))
    {
      //login
      console.log("yes")
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
      "url": url,
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
      if(   url ==   "https://login-dc79.restdb.io/rest/players")
      {
        alert("You have signed in!");
        localStorage.setItem("playername",name )
        localStorage.setItem("playerpassword",password )
        localStorage.setItem("playeremail",email )
        window.location = "home.html"
      }
    });
  }


  function Login()
  {

    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    console.log(name)
    console.log(password)
    var found_name = false;


    var APIKEY = "63d1f5f8a95709597409cf9c";
    var url = "https://leaderboard-4a7a.restdb.io/rest/players"
    if (document.URL.includes("http://127.0.0.1:5500/form.html") || document.URL.includes("https://jesiahchow.github.io/Assignment2/form.html"))
    {
      //login
      console.log("yes")
      APIKEY = "63e2603c478852088da67e5c";
      url =   "https://login-dc79.restdb.io/rest/players";

    }
  
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET", //[cher] we will use GET to retrieve info
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
              localStorage.setItem("playername",response[i].Name )
              localStorage.setItem("playerpassword",response[i].Password )
              localStorage.setItem("playeremail",response[i].Email )
              window.location = "home.html"
            }
            else
            {
              alert("password is wrong");
            }
          }
          else if (i == (response.length -1) && found_name == false)
          {
            alert("Please ensure you have typed in the right username")
          }



        }


      }


    })
  }


$(document).ready(function () {
  console.log(document.URL)

  if (document.URL.includes("http://127.0.0.1:5500/form.html") || document.URL.includes("http://127.0.0.1:5500/signup.html") || document.URL.includes("https://jesiahchow.github.io/Assignment2/form.html") || document.URL.includes("https://jesiahchow.github.io/Assignment2/signup.html"))
  {
  localStorage.removeItem("playername")
  localStorage.removeItem("playerpassword")
  localStorage.removeItem("playeremail")
  }
  console.log(localStorage.getItem("playername"))
  console.log(localStorage.getItem("playerpassword"))
  console.log(localStorage.getItem("playeremail"))
});







