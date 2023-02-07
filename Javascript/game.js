$(document.getElementById("click-absorb")).hide();
$(document.getElementById("load")).addClass("loader")

$(document).ready(function () {
  let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)

    getQuestions()
    setTimeout(() =>{
    makeQuestions();
    },1000)
    if (correct_answer_list.length == 10 && question_list.length == 10 && incorect_answer_list.length == 30)
    {
      myResolve("success"); 
    }else{
      myReject("failure");
    }

    });
    

    myPromise.then(
      function(value) {},
      function(error) {}
    );


  
  var timer = document.getElementById("round-time-bar")
  $(timer).hide();
  const bar = document.getElementsByClassName("round-time-bar");
  var skip_sound = false
  var correct_sound = new Audio ("Audio/Game-show-correct-answer.mp3")
  var incorrect_sound = new Audio("Audio/Incorrect-sound-effect.mp3")
  let i = 0;
  let j = 0;
  let score = 0;
  let increament = 0
  let difficulty_selection = localStorage.getItem("option2");
  let lives = 3
  let heart1 = document.getElementById("heart1")
  let heart2 = document.getElementById("heart2")
  let heart3 = document.getElementById("heart3")
  let score_area = document.getElementById("score-area")
  if (difficulty_selection == "Easy")
  {
    increament = 5
  }
  else if (difficulty_selection == "Medium")
  {
    increament = 10
  }
  else if (difficulty_selection == "Hard")
  {
    increament = 20
  }
  let question_count = 1;
  var score_heading = document.getElementById("score")
var question_heading = document.getElementById("questionCounter")
var elements = document.getElementsByClassName("choice-container");
var question_list = [];
var correct_answer_list =[];
var incorect_answer_list = [];






function makeQuestions (){
    var question = localStorage.getItem("questions")
    var correct_answer = localStorage.getItem("correct_answer")
    var incorrect_answer = localStorage.getItem("incorrect_answer")





  //format each question

  var final_question = question.replace(/&quot;/g,'"')
  final_question = final_question.replace('";,',",")
  final_question = final_question.replace('";',"?")
  final_question = final_question.replace('?W',"?,W")
  final_question = final_question.replace('hellip;',".....")
  final_question = final_question.replace('envious",',"envious ")
  final_question = final_question.replace('"Goldbricking",','"Goldbricking" ')
  final_question = final_question.replace('? ,','  ?,')
  final_question = final_question.replace('?','?, ')
  

  var final_question2 = final_question.replace(/&#039;/g,"'")
  var final_question3 = final_question2.replace(/&ldquo;/g,"'")
  var final_question4 = final_question3.replace(/&rdquo;/g,"'")
  var final_question5 = final_question4.replace(/cute;/g,"'")
  var final_question6 = final_question5.replace(/cute;/g,"'")
  var final_question7 = final_question6.replace(".,","?,")
  var final_question8 = final_question7.replace("%","")
  var final_question9 = final_question8.replace("a'","")
  var final_question10 = final_question9.replace(".',","?")
  var final_question11 = final_question10.replace(/&rsquo;/g,"'")
  var final_question12 = final_question11.replace("&","")
  var final_question13 = final_question12.replace('",','"')
  final_question13 = final_question13.replace(",F","F")
  final_question13 = final_question13.replace(", W",",W")
  final_question13 = final_question13.replace(",O","O")
  final_question13 = final_question13.replace(",H","H")
  final_question13 = final_question13.replace(",I",",I")
  final_question13 = final_question13.replace("    ,","")
  final_question13 = final_question13.replace("  ,","")
  final_question13 = final_question13.replace(" ,","")
  final_question13 = final_question13.replace('Llanfairshy;pwllgwyngyll&shy;gogery&shy;chwyrn&shy;drobwll&shy;llan&shy;tysilio&shy;gogo&shy;goch','llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch')
  //final_question13 = final_question13.replace('?   ,',' ?,')

  console.log(final_question13)
  question_list = final_question13.split("?,")
  if (question_list.length < 10)
  {
    console.log("yes")
    var final_question5 = final_question4.replace("? ","?")
    var final_question6 = final_question5.replace(/cute;/g,"'")
    var final_question7 = final_question6.replace(".,",",")
    var final_question8 = final_question7.replace("%","")
    var final_question9 = final_question8.replace("a'","")
    var final_question10 = final_question9.replace(".',","' ?,")
    var final_question11 = final_question10.replace(";',","?,")
    var final_question12 = final_question11.replace(/&rsquo;/g,"'")
    var final_question13 = final_question12.replace("&","")
    var final_question14 = final_question13.replace('",','" ?,')
    final_question14 = final_question14.replace("    ,","")
    final_question14 = final_question14.replace("  ,","")
    final_question14 = final_question14.replace(" ,","")
    final_question14 = final_question14.replace("&....","....")
    final_question14 = final_question14.replace('Llanfairshy;pwllgwyngyll&shy;gogery&shy;chwyrn&shy;drobwll&shy;llan&shy;tysilio&shy;gogo&shy;goch','llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch')
    console.log(final_question14)
    question_list = final_question14.split("?,")
    
  }
  if(question_list.length > 10)
  {
    question_list.splice(1,1)
  }




  var answer1 = correct_answer.replace(/&quot;/g,'"')
  var answer2 = answer1.replace(/&#039;/g,"'")
  var answer3 = answer2.replace(/&ldquo;/g,"'")
  var answer4 = answer3.replace(/&rdquo;/g,"'")
  //answer4 = answer4.replace(",2,",",")
  //answer4 = answer4.replace(", Inc,",",")
  var answer5 = answer4.replace("&","")
  var answer6 = answer5.replace(";","")
  console.log(answer6)
  correct_answer_list = answer6.split(",")





  var final_inquestion = incorrect_answer.replace(/&quot;/g,'"')
  var final_inquestion2 = final_inquestion.replace(/&#039;/g,"'")
  var final_inquestion3 = final_inquestion2.replace(/&ldquo;/g,"'")
  var final_inquestion4 = final_inquestion3.replace(/&rdquo;/g,"'")
  var final_inquestion5 = final_inquestion4.replace("&","")
  var final_inquestion6 = final_inquestion5.replace(";","")


  incorect_answer_list = final_inquestion6.split(",")


  



console.log(correct_answer_list)
console.log(question_list)
console.log(incorect_answer_list)

}





const sleep = async (milliseconds) => {
  await new Promise(resolve => {
      return setTimeout(resolve, milliseconds)
  });
}






if (i ==0)
{



  setTimeout(() => {
    if (correct_answer_list.length != 10 || question_list.length != 10 || incorect_answer_list.length != 30)
    {
      window.location.reload();
    }
  },1000)
  setTimeout(() => {
    $(document.getElementById("load")).removeClass("loader")
    $(document.getElementById("click-absorb")).show();
    $(timer).show();
  console.log(i)
  let selection = ["choice1","choice2","choice3","choice4"]
  document.getElementById("question").textContent = question_list[i ]  
  let location = Math.floor(Math.random() * 4)
  let set_place = selection[location]
  document.getElementById(set_place).textContent = correct_answer_list[i] 
  selection.splice(location,1)
  let location2 = Math.floor(Math.random() * 3)
  let set_place2 = selection[location2] 
  document.getElementById(set_place2).textContent = incorect_answer_list[j] 
  selection.splice(location2,1)
  let location3 = Math.floor(Math.random() * 2)
  let set_place3 = selection[location3]
  document.getElementById(set_place3).textContent = incorect_answer_list[j + 1] 
  selection.splice(location3,1)
  let location4 = Math.floor(Math.random() * 1)
  let set_place4 = selection[location4]
  document.getElementById(set_place4).textContent = incorect_answer_list[j +2] 
  selection.splice(location4,1)
  var reply_click = function()
  {
    clearTimeout(timeoutId)
    $(elements).addClass('overlay')
      if (this.id == "selection1")
      {
         this.id = "choice1"
         if (this.id == set_place && skip_sound == false)
         {
            console.log("active")
           $(document.getElementById(this.id)).addClass("correct")
           if (skip_sound == false)
           {
            correct_sound.play()
           }
           score += increament
           score_heading.textContent = score
         }else{
          $(document.getElementById(this.id)).addClass("incorrect")
          incorrect_sound.play()
          lives -= 1
          if (set_place == "choice1")
          {
            $(document.getElementById("selection1")).addClass("correct")
          }
          if (set_place == "choice2")
          {
            $(document.getElementById("selection2")).addClass("correct")
          }
          if (set_place == "choice3")
          {
            $(document.getElementById("selection3")).addClass("correct")
          }
          if (set_place == "choice4")
          {
            $(document.getElementById("selection4")).addClass("correct")
          }
         }
         //alert(this.id)
         this.id = "selection1"
      }
      if (this.id == "selection2")
      {
         this.id = "choice2"
         if (this.id == set_place)
         {
          $(document.getElementById(this.id)).addClass("correct")
          correct_sound.play()
          score += increament
          score_heading.textContent = score
        }else{
          $(document.getElementById(this.id)).addClass("incorrect")
          incorrect_sound.play()
          lives -= 1
          if (set_place == "choice1")
          {
            $(document.getElementById("selection1")).addClass("correct")
          }
          if (set_place == "choice2")
          {
            $(document.getElementById("selection2")).addClass("correct")
          }
          if (set_place == "choice3")
          {
            $(document.getElementById("selection3")).addClass("correct")
          }
          if (set_place == "choice4")
          {
            $(document.getElementById("selection4")).addClass("correct")
          }
         }
          
         //alert(this.id)
         this.id = "selection2"
      }
      if (this.id == "selection3")
      {
         this.id = "choice3"
         if (this.id == set_place)
         {
          $(document.getElementById(this.id)).addClass("correct")
          correct_sound.play()
          score += increament
          score_heading.textContent = score
        }else{
          $(document.getElementById(this.id)).addClass("incorrect")
          incorrect_sound.play()
          lives -= 1
          if (set_place == "choice1")
          {
            $(document.getElementById("selection1")).addClass("correct")
          }
          if (set_place == "choice2")
          {
            $(document.getElementById("selection2")).addClass("correct")
          }
          if (set_place == "choice3")
          {
            $(document.getElementById("selection3")).addClass("correct")
          }
          if (set_place == "choice4")
          {
            $(document.getElementById("selection4")).addClass("correct")
          }
         }
         //alert(this.id)
         this.id = "selection3"
      }
      if (this.id == "selection4")
      {
         this.id = "choice4"
         if (this.id == set_place)
         {
          $(document.getElementById(this.id)).addClass("correct")
          correct_sound.play()
          score += increament
          score_heading.textContent = score
        }else{
          $(document.getElementById(this.id)).addClass("incorrect")
          incorrect_sound.play()
          lives -= 1
          if (set_place == "choice1")
          {
            $(document.getElementById("selection1")).addClass("correct")
          }
          if (set_place == "choice2")
          {
            $(document.getElementById("selection2")).addClass("correct")
          }
          if (set_place == "choice3")
          {
            $(document.getElementById("selection3")).addClass("correct")
          }
          if (set_place == "choice4")
          {
            $(document.getElementById("selection4")).addClass("correct")
          }
         }
         //alert(this.id)
         this.id = "selection4"

      }
      if (lives==2)
      {
        $(heart1).removeClass('current-heart');
        heart1.src = "Images/broken_heart.png";
        $(heart1).addClass('broken-heart');
        $(heart2).addClass('current-heart');
      }
      else if (lives==1)
      {
        $(heart2).removeClass('current-heart');
        heart2.src = "Images/broken_heart.png";
        $(heart2).addClass('broken-heart');
        $(heart3).addClass('current-heart');
      }
      else if (lives==0)
      {
        $(heart3).removeClass('current-heart');
        $(heart3).addClass('broken-heart');
        heart3.src = "Images/broken_heart.png";
      }


  }
  document.getElementById('choice1').onclick = reply_click;
  document.getElementById('choice2').onclick = reply_click;
  document.getElementById('choice3').onclick = reply_click;
  document.getElementById('choice4').onclick = reply_click;
  document.getElementById('selection1').onclick = reply_click;
  document.getElementById('selection2').onclick = reply_click;
  document.getElementById('selection3').onclick = reply_click;
  document.getElementById('selection4').onclick = reply_click;
  const timeoutId = setTimeout(() =>{
    incorrect_sound.play()
    if (set_place == "choice1")
    {
      $(document.getElementById("selection1")).addClass("correct")
    }
    if (set_place == "choice2")
    {
      $(document.getElementById("selection2")).addClass("correct")
    }
    if (set_place == "choice3")
    {
      $(document.getElementById("selection3")).addClass("correct")
    }
    if (set_place == "choice4")
    {
      $(document.getElementById("selection4")).addClass("correct")
    }
    if (set_place == "choice1")
    {
      skip_sound = true
    }
    const move_to_next_question = document.getElementById('choice1')
    move_to_next_question.click();
    $(elements).removeClass('incorrect')

    score_heading.textContent = score
    skip_sound = false
  },10000)
  i++
  j += 3
  $()
}, 2000)
setTimeout(() => {
  $(elements).removeClass('overlay')
  $(elements).removeClass('correct')
  $(elements).removeClass('incorrect')
  incorrect_sound.pause();
  incorrect_sound.currentTime = 0
  correct_sound.pause();
  correct_sound.currentTime = 0
  skip_sound = false
}, 2000)
}

//add click listener

$(".choice-container").click(function () {



  if (i < 11)
  {

    console.log(i)
    setTimeout(() => {
  let selection = ["choice1","choice2","choice3","choice4"]
  document.getElementById("question").textContent = question_list[i ]  
  let location = Math.floor(Math.random() * 4)
  let set_place = selection[location]
  document.getElementById(set_place).textContent = correct_answer_list[i] 
  selection.splice(location,1)
  let location2 = Math.floor(Math.random() * 3)
  let set_place2 = selection[location2] 
  document.getElementById(set_place2).textContent = incorect_answer_list[j] 
  selection.splice(location2,1)
  let location3 = Math.floor(Math.random() * 2)
  let set_place3 = selection[location3]
  document.getElementById(set_place3).textContent = incorect_answer_list[j + 1] 
  selection.splice(location3,1)
  let location4 = Math.floor(Math.random() * 1)
  let set_place4 = selection[location4]
  document.getElementById(set_place4).textContent = incorect_answer_list[j +2] 
  selection.splice(location4,1)


  var reply_click = function()
  {
    clearTimeout(timeoutId)
    console.log("active1")
    $(elements).addClass('overlay')
      if (this.id == "selection1")
      {
         this.id = "choice1"
         if (this.id == set_place && skip_sound == false)
         {
          $(document.getElementById(this.id)).addClass("correct")
            correct_sound.play()
            score += increament
           score_heading.textContent = score
          }else{
            $(document.getElementById(this.id)).addClass("incorrect")
            incorrect_sound.play()
            lives -= 1
            if (set_place == "choice1")
            {
              $(document.getElementById("selection1")).addClass("correct")
            }
            if (set_place == "choice2")
            {
              $(document.getElementById("selection2")).addClass("correct")
            }
            if (set_place == "choice3")
            {
              $(document.getElementById("selection3")).addClass("correct")
            }
            if (set_place == "choice4")
            {
              $(document.getElementById("selection4")).addClass("correct")
            }
           }
         //alert(this.id)
         this.id = "selection1"
      }
      if (this.id == "selection2")
      {
         this.id = "choice2"
         if (this.id == set_place)
         {
          $(document.getElementById(this.id)).addClass("correct")
          correct_sound.play()
          score += increament
          score_heading.textContent = score
        }else{
          $(document.getElementById(this.id)).addClass("incorrect")
          incorrect_sound.play()
          lives -= 1
          if (set_place == "choice1")
          {
            $(document.getElementById("selection1")).addClass("correct")
          }
          if (set_place == "choice2")
          {
            $(document.getElementById("selection2")).addClass("correct")
          }
          if (set_place == "choice3")
          {
            $(document.getElementById("selection3")).addClass("correct")
          }
          if (set_place == "choice4")
          {
            $(document.getElementById("selection4")).addClass("correct")
          }
         }
         //alert(this.id)
         this.id = "selection2"
      }
      if (this.id == "selection3")
      {
         this.id = "choice3"
         if (this.id == set_place)
         {
          $(document.getElementById(this.id)).addClass("correct")
          correct_sound.play()
          score += increament
          score_heading.textContent = score
        }else{
          $(document.getElementById(this.id)).addClass("incorrect")
          incorrect_sound.play()
          lives -= 1
          if (set_place == "choice1")
          {
            $(document.getElementById("selection1")).addClass("correct")
          }
          if (set_place == "choice2")
          {
            $(document.getElementById("selection2")).addClass("correct")
          }
          if (set_place == "choice3")
          {
            $(document.getElementById("selection3")).addClass("correct")
          }
          if (set_place == "choice4")
          {
            $(document.getElementById("selection4")).addClass("correct")
          }
         }
         //alert(this.id)
         this.id = "selection3"
      }
      if (this.id == "selection4")
      {
         this.id = "choice4"
         if (this.id == set_place)
         {
          $(document.getElementById(this.id)).addClass("correct")
          correct_sound.play()
          score += increament
           score_heading.textContent = score
        }else{
          $(document.getElementById(this.id)).addClass("incorrect")
          incorrect_sound.play()
          lives -= 1
          if (set_place == "choice1")
          {
            $(document.getElementById("selection1")).addClass("correct")
          }
          if (set_place == "choice2")
          {
            $(document.getElementById("selection2")).addClass("correct")
          }
          if (set_place == "choice3")
          {
            $(document.getElementById("selection3")).addClass("correct")
          }
          if (set_place == "choice4")
          {
            $(document.getElementById("selection4")).addClass("correct")
          }
         }
         //alert(this.id)
         this.id = "selection4"
      }
      if (lives==2)
      {
        $(heart1).removeClass('current-heart');
        heart1.src = "Images/broken_heart.png";
        $(heart1).addClass('broken-heart');
        $(heart2).addClass('current-heart');
      }
      else if (lives==1)
      {
        $(heart2).removeClass('current-heart');
        heart2.src = "Images/broken_heart.png";
        $(heart2).addClass('broken-heart');
        $(heart3).addClass('current-heart');
      }
      else if (lives==0)
      {
        $(heart3).removeClass('current-heart');
        $(heart3).addClass('broken-heart');
        heart3.src = "Images/broken_heart.png";
      }


  }

  document.getElementById('choice1').onclick = reply_click;
  document.getElementById('choice2').onclick = reply_click;
  document.getElementById('choice3').onclick = reply_click;
  document.getElementById('choice4').onclick = reply_click;
  document.getElementById('selection1').onclick = reply_click;
  document.getElementById('selection2').onclick = reply_click;
  document.getElementById('selection3').onclick = reply_click;
  document.getElementById('selection4').onclick = reply_click;
  const timeoutId = setTimeout(() =>{
    incorrect_sound.play()
    if (set_place == "choice1")
    {
      $(document.getElementById("selection1")).addClass("correct")
    }
    if (set_place == "choice2")
    {
      $(document.getElementById("selection2")).addClass("correct")
    }
    if (set_place == "choice3")
    {
      $(document.getElementById("selection3")).addClass("correct")
    }
    if (set_place == "choice4")
    {
      $(document.getElementById("selection4")).addClass("correct")
    }
    if (set_place == "choice1")
    {
      skip_sound = true
    }
    const move_to_next_question = document.getElementById('choice1')
    move_to_next_question.click();
    $(elements).removeClass('incorrect')

    score_heading.textContent = score

  },10000)


  $(timer).removeClass("round-time-bar");
  timer.offsetWidth;
  $(timer).addClass("round-time-bar");
  i++
  j += 3
},2000)
  setTimeout(() => {
    $(elements).removeClass('overlay')
    console.log("active2")
    $(elements).removeClass('correct')
    $(elements).removeClass('incorrect')
    incorrect_sound.pause();
    incorrect_sound.currentTime = 0
    correct_sound.pause();
    correct_sound.currentTime = 0
    skip_sound = false
    if (i != 1)
    {
    question_count ++
    question_heading.textContent = question_count + "/10"
    }
    if (i == 10 || lives == 0)
    {
     let ranked = localStorage.getItem("option3")
      if (ranked = "Yes")
      {
        let playername = localStorage.getItem("playername")
        let playeremail = localStorage.getItem("playeremail")
        let playerpassword = localStorage.getItem("playerpassword")
        let playercategory = localStorage.getItem("option1")
        let playerDifficulty = localStorage.getItem("option2")
        console.log("reached")
        uploadPlayerinfo(playername,playeremail,playerpassword,score,lives,playercategory,playerDifficulty)
      }
    }
    if (i >10 || lives == 0)
    {
      $(document.getElementById("click-absorb")).hide();
      $(document.getElementById("load")).addClass("loader")
      setTimeout(() => {
      localStorage.removeItem("incorrect_answer")
      localStorage.removeItem("correct_answer")
      localStorage.removeItem("questions")
      window.location = 'leaderboard.html'
      },10000)
    }
  

  }, 2000)

    }

    
  })


})

//REMOVE LOCAL STORAGE TO GET ACCURATE QUESTIONS



//

