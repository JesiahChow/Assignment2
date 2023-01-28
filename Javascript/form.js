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
  