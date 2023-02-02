$(document).ready(function () {
    getQuestions();
    //console.log(questions[0])
    //console.log(incorrect_answer)
    let i = 0;
    let j = 0;
  var elements = document.getElementsByClassName("choice-text");
  var question = localStorage.getItem("questions")
  var final_question = question.replace(/&quot;/g,'"')
  var final_question2 = final_question.replace(/&#039;/g,"'")
  var final_question3 = final_question2.replace(/&ldquo;/g,"'")
  var question_list = final_question3.split("?,")

  var correct_answer = localStorage.getItem("correct_answer")


  var correct_answer_list = correct_answer.split(",")
  var incorrect_answer = localStorage.getItem("incorrect_answer")




  var final_inquestion = incorrect_answer.replace(/&quot;/g,'"')
  var final_inquestion2 = final_inquestion.replace(/&#039;/g,"'")
  var final_inquestion3 = final_inquestion2.replace(/&ldquo;/g,"'")
  var incorect_answer_list = final_inquestion3.split(",")
  console.log(incorect_answer_list)





  if (i ==0)
  {
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
    i++
    j += 3
  }

  //add click listener

  $(".choice-container").click(function () {
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
    console.log(set_place)
    console.log(set_place2)
    console.log(set_place3)
    console.log(set_place4)
    i++
    j += 3
    
  })

  })
  


//

