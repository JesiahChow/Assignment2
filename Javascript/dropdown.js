//Getting all dropdowns from the document
const start_button = document.querySelectorAll('.button2');

const dropdowns = document.querySelectorAll('.dropdown');

localStorage.removeItem("incorrect_answer")
localStorage.removeItem("correct_answer")
localStorage.removeItem("questions")
console.log(document.URL)

//Loop through all dropdown elements
dropdowns.forEach(dropdown =>{
    //Get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const list = dropdown.querySelector('.list');
    const options = dropdown.querySelectorAll('.list li');
    const selected = dropdown.querySelector('.selected');

    //Click event to select element
    select.addEventListener('click',()=>{
        //Add the click select styles to the select element
        select.classList.toggle('select-clicked');
        //Add the rotate styles to the caret element
        caret.classList.toggle('caret-rotate');
        //Add the open styles to the list element 
        list.classList.toggle('list-open');

    });

    //Loop through all option elements
    options.forEach(option => {
        //click event to the option element
        option.addEventListener('click',() =>{
            //change selected inner text to clicked option inner text 
            selected.innerHTML = option.innerHTML;
            //Add the clicked select styles to the select element
            select.classList.remove('select-clicked');
            //Add the rotate styles to the caret element
            caret.classList.remove('caret-rotate');
            //Add the open styles to the list element 
            list.classList.remove('list-open');

            if ($('#option1').text().length != 0 && $('#option2').text().length != 0 && $('#option3').text().length != 0){
                $(start_button).removeClass('disabled');
                console.log(document.getElementById("option1").innerHTML);
                localStorage.setItem("option1",(document.getElementById("option1").innerHTML))
                console.log(document.getElementById("option2").innerHTML);
                localStorage.setItem("option2",(document.getElementById("option2").innerHTML))
                console.log(document.getElementById("option3").innerHTML);
                localStorage.setItem("option3",(document.getElementById("option3").innerHTML))
            } 

            if (document.URL.includes("http://127.0.0.1:5500/leaderboard.html"))
            {
                if ($('#option1').text().length != 0 && $('#option2').text().length != 0)
                {
                    console.log(document.getElementById("option1").innerHTML);
                    localStorage.setItem("Loption1",(document.getElementById("option1").innerHTML))
                    console.log(document.getElementById("option2").innerHTML);
                    localStorage.setItem("Loption2",(document.getElementById("option2").innerHTML))
                    getPlayerinfo();

                    
                }

            }


        });
    });
    

});



$(function () {
    //add css to disabled class to change button color
    $(start_button).addClass('disabled');

    $(start_button).click(function () {
        if ($(this).hasClass('disabled')){
            return false;
        } else
        {

            document.getElementById("option3").innerHTML;

            //put here for now,change a link for start buttom and move this to the js for gameplay html in the FUTURE
            return true;
        }
    });
});

  
  