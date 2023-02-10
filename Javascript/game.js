
//put loader while preparng questions
$(document.getElementById("click-absorb")).hide();
$(document.getElementById("load")).addClass("loader")

$(document).ready(function () {

  //get questions using API and format questions first
  let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)

    getQuestions()
    setTimeout(() =>{
    makeQuestions();
    },7000)
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





  //format each question answer and incorrect answer
  //since they appear with random characters which make them less readable


  //format questions
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
  final_question13 = final_question13.replace('" ?,','" ,')
  final_question13 = final_question13.replace('Llanfairshy;pwllgwyngyll&shy;gogery&shy;chwyrn&shy;drobwll&shy;llan&shy;tysilio&shy;gogo&shy;goch','llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch')
  //final_question13 = final_question13.replace('?   ,',' ?,')
  final_question13 = final_question13.replace(' must be the..." ,',' must be the..." ?,')

  //make questions into list to use
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
      //make questions into list to use
    final_question14 = final_question14.replace('" ?,','" ,')
    final_question14 = final_question14.replace('..,','.. ?,')
    final_question14 = final_question14.replace(' must be the..." ,',' must be the..." ?,')
    question_list = final_question14.split("?,")
    
  }


  //sometimes 2nd spot in list will have an error
  if(question_list.length > 10)
  {
    question_list.splice(1,1)
  }


  //format correct answers
  var answer1 = correct_answer.replace(/,/g,',@')
  answer1 = answer1.replace(/&quot;/g,'"')
  var answer2 = answer1.replace(/&#039;/g,"'")
  var answer3 = answer2.replace(/&ldquo;/g,"'")
  var answer4 = answer3.replace(/&rdquo;/g,"'")
  //answer4 = answer4.replace(",2,",",")
  //answer4 = answer4.replace(", Inc,",",")
  var answer5 = answer4.replace("&","")
  var answer6 = answer5.replace(";","")
  answer6 = answer6.replace("I came,@ I saw,@ I conquered","I came, I saw, I conquered")
  answer6 = answer6.replace('November 11,@ 2006','November 11, 2006')
  answer6 = answer6.replace('D. G. Yuengling and Son,@ Inc','D. G. Yuengling and Son, Inc')
  answer6 = answer6.replace('2,@722 ft','2,722 ft')
  answer6 = answer6.replace('July 4,@ 1776','July 4, 1776')
  answer6 = answer6.replace('September 23rd,@ 1889','September 23rd, 1889')
  answer6 = answer6.replace('Maine,@ United States','Maine, United States')
  answer6 = answer6.replace("Sheep's Heart,@ Liver and Lungs","Sheep's Heart, Liver and Lungs")
  answer6 = answer6.replace('Snivy,@ Tepig,@ Oshawott','Snivy, Tepig, Oshawott')
  answer6 = answer6.replace(/&/g,'')
  answer6 = answer6.replace(/;/g,'')

  

  //make correct answers into list
  correct_answer_list = answer6.split(",@")


  //format incorrect answers
  var final_inquestion = incorrect_answer.replace(/,/g,',@')
  final_inquestion = final_inquestion.replace(/&quot;/g,'"')
  var final_inquestion2 = final_inquestion.replace(/&#039;/g,"'")
  var final_inquestion3 = final_inquestion2.replace(/&ldquo;/g,"'")
  var final_inquestion4 = final_inquestion3.replace(/&rdquo;/g,"'")
  var final_inquestion5 = final_inquestion4.replace("&","")
  var final_inquestion6 = final_inquestion5.replace(";","")
  final_inquestion6 = final_inquestion6.replace("See no evil,@ hear no evil,@ speak no evil,@Life,@ liberty,@ and happiness,@Past,@ present,@ and future","See no evil, hear no evil, speak no evil,@Life, liberty, and happiness,@Past, present, and future")
  final_inquestion6 = final_inquestion6.replace('January 8,@ 2007,@December 25,@ 2007,@July 16,@ 2006','January 8, 2007,@December 25, 2007,@July 16, 2006')
  final_inquestion6 = final_inquestion6.replace('2,@717 ft,@2,@546 ft,@3,@024 ft','2,717 ft,@2,546 ft,@3,024 ft')
  final_inquestion6 = final_inquestion6.replace('May 4,@ 1776,@June 4,@ 1776,@July 2,@ 1776','May 4, 1776,@June 4, 1776,@July 2, 1776')
  final_inquestion6 = final_inquestion6.replace('October 19th,@ 1891,@March 4th,@ 1887,@December 27th,@ 1894','October 19th, 1891,@March 4th, 1887,@December 27th, 1894')
  final_inquestion6 = final_inquestion6.replace('Hesse,@ Germany,@Masovia,@ Poland,@Bavaria,@ Poland','Hesse, Germany,@Masovia, Poland,@Bavaria, Poland')
  final_inquestion6 = final_inquestion6.replace("Sheep's Heart,@ Kidneys and Lungs,@Sheep's Liver,@ Kidneys and Eyes","Sheep's Heart, Kidneys and Lungs,@Sheep's Liver, Kidneys and Eyes")
  final_inquestion6 = final_inquestion6.replace('A Chinese meal,@ essentially composed of fish','A Chinese meal, essentially composed of fish')
  final_inquestion6 = final_inquestion6.replace('Snivy,@ Fennekin,@ Froakie,@Chespin,@ Tepig,@ Froakie,@Chespin,@ Fennekin,@ Oshawott','Snivy, Fennekin, Froakie,@Chespin, Tepig, Froakie,@Chespin, Fennekin, Oshawott')
  final_inquestion6 = final_inquestion6.replace(/&/g,'')
  final_inquestion6 = final_inquestion6.replace(/;/g,'')





//make incorrect answers into list
  incorect_answer_list = final_inquestion6.split(",@")
  console.log(final_question13)
  console.log(final_question14)
  console.log(answer6)
  console.log(localStorage.getItem("correct_answer"))
  console.log(localStorage.getItem("incorrect_answer"))
  console.log(question_list);
  console.log(correct_answer_list)
  console.log(incorect_answer_list)
  localStorage.removeItem("incorrect_answer")
  localStorage.removeItem("correct_answer")
  localStorage.removeItem("questions")


  




}

//first program for the first question
setTimeout(() => {


if (i ==0)
{

  //check if there is correct amount of questions answers and incorrect answers
  setTimeout(() => {
    if (question_list.length != 10 ||  correct_answer_list.length != 10 || incorect_answer_list.length != 30)
    {
      //if not reload the page
      window.location.reload();
    }
  },1000)

  //if its enough, remove loader an show gamepage
  setTimeout(() => {
    $(document.getElementById("load")).removeClass("loader")
    $(document.getElementById("click-absorb")).show();
    $(timer).show();

    //randomly place questions in spots 1-4
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

  //response when the user clicks an option
  var reply_click = function()
  {
    
    //stop  countdown timer
    clearTimeout(timeoutId)

    //ensure user cannot click other options
    $(elements).addClass('overlay')
    //check which option user clicked
      if (this.id == "selection1")
      {
         this.id = "choice1"
         //check if its correct
         if (this.id == set_place && skip_sound == false)
         {
            console.log("active")
           $(document.getElementById(this.id)).addClass("correct")
          //ensure they clicked and it wasnt them running out of time
           if (skip_sound == false)
           {
            correct_sound.play()
           }
           score += increament
           score_heading.textContent = score
         }else{
          //if incorrect
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
         //check if its correct
         if (this.id == set_place)
         {
          $(document.getElementById(this.id)).addClass("correct")
          correct_sound.play()
          score += increament
          score_heading.textContent = score
        }else{
          //if incorrect
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
          //check if its correct
         if (this.id == set_place)
         {
          $(document.getElementById(this.id)).addClass("correct")
          correct_sound.play()
          score += increament
          score_heading.textContent = score
        }else{
          //if incorrect
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
         //check if its correct
         if (this.id == set_place)
         {
          $(document.getElementById(this.id)).addClass("correct")
          correct_sound.play()
          score += increament
          score_heading.textContent = score
        }else{
          //if incorrect
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
      //check amount of lives
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

  //event listeners for clicks on the 4 options
  document.getElementById('choice1').onclick = reply_click;
  document.getElementById('choice2').onclick = reply_click;
  document.getElementById('choice3').onclick = reply_click;
  document.getElementById('choice4').onclick = reply_click;
  document.getElementById('selection1').onclick = reply_click;
  document.getElementById('selection2').onclick = reply_click;
  document.getElementById('selection3').onclick = reply_click;
  document.getElementById('selection4').onclick = reply_click;

  //for the 10 second timer
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

  //add 1 to i for question and answer reference
  //add 3 to j for incorect answer reference
  i++
  j += 3
  $()
}, 2000)

//after 2 seconds of showing user feedback
//allow user to click and do next question
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
},6000)


//add click listener for question 2-10

$(".choice-container").click(function () {


  //ensure game has not ended
  if (i < 11)
  {

    //randomly place questions in spots 1-4
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


   //response when the user clicks an option
  var reply_click = function()
  {

    //stop countdown timer
    clearTimeout(timeoutId)

    //stop user from clicking
    $(elements).addClass('overlay')

      //check what option user has  picked
      if (this.id == "selection1")
      {
         this.id = "choice1"
         //check if option is correct and user clicked on it
         if (this.id == set_place && skip_sound == false)
         {
          $(document.getElementById(this.id)).addClass("correct")
            correct_sound.play()
            score += increament
           score_heading.textContent = score
          }else{
            //if incorrect
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
          //check if option is correct
          $(document.getElementById(this.id)).addClass("correct")
          correct_sound.play()
          score += increament
          score_heading.textContent = score
        }else{
          //if incorrect
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
          //check if option is correct
          $(document.getElementById(this.id)).addClass("correct")
          correct_sound.play()
          score += increament
          score_heading.textContent = score
        }else{
          //if incorrect
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
          //check if option is correct
          $(document.getElementById(this.id)).addClass("correct")
          correct_sound.play()
          score += increament
           score_heading.textContent = score
        }else{
          //if incorrect
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

      //check on lives user has
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

  //event listener for if user clicks on an option
  document.getElementById('choice1').onclick = reply_click;
  document.getElementById('choice2').onclick = reply_click;
  document.getElementById('choice3').onclick = reply_click;
  document.getElementById('choice4').onclick = reply_click;
  document.getElementById('selection1').onclick = reply_click;
  document.getElementById('selection2').onclick = reply_click;
  document.getElementById('selection3').onclick = reply_click;
  document.getElementById('selection4').onclick = reply_click;

  //timer of 10seconds to answer question
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

  //reset timer at end of each question
  $(timer).removeClass("round-time-bar");
  timer.offsetWidth;
  $(timer).addClass("round-time-bar");

  //add 1 to i for question and answer reference
  //add 3 to j for incorrect answer referenc
  i++
  j += 3
},2000)

//after 2 seconds of user feedback, move on to next question
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

    //if isnt first question, add to question counter
    if (i != 1)
    {
    question_count ++
    question_heading.textContent = question_count + "/10"
    }

    //if its the last question or user has lost all 3 lives
    if (i == 10 || lives == 0)
    {

      //check if user wants to appear on leaderboard
     let ranked = localStorage.getItem("option3")
      if (ranked = "Yes")
      {

        //if so, get user information
        let playername = localStorage.getItem("playername")
        let playeremail = localStorage.getItem("playeremail")
        let playerpassword = localStorage.getItem("playerpassword")
        let playercategory = localStorage.getItem("option1")
        let playerDifficulty = localStorage.getItem("option2")


        //upload user info to leaderboard
        setTimeout(() =>{
        uploadPlayerinfo(playername,playeremail,playerpassword,score,lives,playercategory,playerDifficulty)
        },3000)
      }
    }

    // check if its the end of game
    if (i >10 || lives == 0)
    {
      $(document.getElementById("click-absorb")).hide();
      $(document.getElementById("load")).addClass("loader")
      setTimeout(() => {
      window.location = 'leaderboard.html'
      },7000)
    }
  

  }, 2000)

    }

    
  })


})



