$(document).ready(function () {
    getQuestions();
    //console.log(questions[0])
    //console.log(incorrect_answer)
    let i = 0;
    let j = 0;
  var elements = document.getElementsByClassName("choice-container");
  var question = localStorage.getItem("questions")
  var final_question = question.replace(/&quot;/g,'"')
  var final_question2 = final_question.replace(/&#039;/g,"'")
  var final_question3 = final_question2.replace(/&ldquo;/g,"'")
  var final_question4 = final_question3.replace(/&rdquo;/g,"'")
  var question_list = final_question4.split("?,")
  if (question_list.length < 10)
  {
    var final_question5 = final_question4.replace("? ","?")
    question_list = final_question5.split("?,")
  }
  var question_list2 = final_question3.split('""')
// ? ,

  var correct_answer = localStorage.getItem("correct_answer")

  var answer1 = correct_answer.replace(/&quot;/g,'"')
  var answer2 = answer1.replace(/&#039;/g,"'")
  var answer3 = answer2.replace(/&ldquo;/g,"'")
  var answer4 = answer3.replace(/&rdquo;/g,"'")

  var correct_answer_list = answer4.split(",")
  var incorrect_answer = localStorage.getItem("incorrect_answer")




  var final_inquestion = incorrect_answer.replace(/&quot;/g,'"')
  var final_inquestion2 = final_inquestion.replace(/&#039;/g,"'")
  var final_inquestion3 = final_inquestion2.replace(/&ldquo;/g,"'")
  var final_inquestion4 = final_inquestion3.replace(/&rdquo;/g,"'")
  var incorect_answer_list = final_inquestion4.split(",")
  console.log(correct_answer_list)
  console.log(question_list)
  const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
  }






  if (i ==0)
  {
    setTimeout(() => {

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

        if (this.id == "selection1")
        {
           this.id = "choice1"
           if (this.id == set_place)
           {
             $(document.getElementById(this.id)).addClass("correct")
           }else{
            $(document.getElementById(this.id)).addClass("incorrect")
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
          }else{
            $(document.getElementById(this.id)).addClass("incorrect")
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
          }else{
            $(document.getElementById(this.id)).addClass("incorrect")
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
          }else{
            $(document.getElementById(this.id)).addClass("incorrect")
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
    }
    document.getElementById('choice1').onclick = reply_click;
    document.getElementById('choice2').onclick = reply_click;
    document.getElementById('choice3').onclick = reply_click;
    document.getElementById('choice4').onclick = reply_click;
    document.getElementById('selection1').onclick = reply_click;
    document.getElementById('selection2').onclick = reply_click;
    document.getElementById('selection3').onclick = reply_click;
    document.getElementById('selection4').onclick = reply_click;

    i++
    j += 3
    $()
  }, 1000)
  setTimeout(() => {
    $(elements).removeClass('correct')
    $(elements).removeClass('incorrect')
  }, 1000)
  }

  //add click listener

  $(".choice-container").click(function () {
 
 
    if (i < 11)
    {

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

   
    console.log(set_place)
    console.log(set_place2)
    console.log(set_place3)
    console.log(set_place4)
    var reply_click = function()
    {

        if (this.id == "selection1")
        {
           this.id = "choice1"
           if (this.id == set_place)
           {
             $(document.getElementById(this.id)).addClass("correct")
            }else{
              $(document.getElementById(this.id)).addClass("incorrect")
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
          }else{
            $(document.getElementById(this.id)).addClass("incorrect")
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
          }else{
            $(document.getElementById(this.id)).addClass("incorrect")
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
          }else{
            $(document.getElementById(this.id)).addClass("incorrect")
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
    }

    document.getElementById('choice1').onclick = reply_click;
    document.getElementById('choice2').onclick = reply_click;
    document.getElementById('choice3').onclick = reply_click;
    document.getElementById('choice4').onclick = reply_click;
    document.getElementById('selection1').onclick = reply_click;
    document.getElementById('selection2').onclick = reply_click;
    document.getElementById('selection3').onclick = reply_click;
    document.getElementById('selection4').onclick = reply_click;




    i++
    j += 3
  },1000)
  setTimeout(() => {
    $(elements).removeClass('correct')
    $(elements).removeClass('incorrect')
  }, 1000)
    console.log(i)
    if (i == 11)
    {
      window.open("leaderboard.html")
    }
    }
    
  })

  
  })




//

