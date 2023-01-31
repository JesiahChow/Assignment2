/*form validation for signup */
function formValidation(){
    let email = document.forms["form"]["email"].value;
    let name = document.forms["form"]["name"].value
    let pwd = document.forms["form"]["psw"].value
    if(email == "" && name == "" && pwd == ""){
    alert("Please fill the above fields");
    return false
  }
    else{
  
      document.querySelector("#email").value = "";
      document.querySelector("#name").value = "";
      document.querySelector("#password").value = "";
      alert("You have signed in!");
      
  
    }
  }
  /*Form validation for login*/ 
  function formValidate(){
    let name = document.forms["form"]["name"].value
    let pwd = document.forms["form"]["psw"].value
    if(name == "" && pwd == ""){
    alert("Please fill the above fields");
    return false
  }
    else{
  
      document.querySelector("#name").value = "";
      document.querySelector("#password").value = "";
      alert("You have signed in!");
      
  
    }
  }

/*RestDB Database*/

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

