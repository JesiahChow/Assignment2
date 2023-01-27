//Getting all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');
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
        });
    });
    

});

//const button = document.querySelectorAll('.button2');
//const active = button.querySelector('.button2 a:hover');
//const disable = button.querySelector('.link');
//const blank = document.querySelector('.selected');
//button.disable = true
//button.addEventListener('click',() =>{
    //if(blank.value() !== ""){
        //disable = false;
        //active = true;
        
        
    //}
//});

$(function () {
    
    $(".button2").addClass('disabled');
    
    $("#selection").keyup(function () {

        var a = $("#selection").val();
        if (a) {
            $(".button2").removeClass('disabled');
        } 
        else {
            $(".button2").addClass('disabled');
        }
    });

    $('.button2').click(function () {
        if ($(this).hasClass('disabled')) return false;
    });
});