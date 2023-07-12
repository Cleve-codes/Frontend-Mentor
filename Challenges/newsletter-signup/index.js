// Variables from UI

// const inputEmail = document.getElementsByClassName('email')[0]
// const subscribeBtn = document.getElementsByClassName('subscribe')[0]

/*
    Tried using "document.querySelector()" first but it didn't work out,
    I later realised that It was because I hadn't set the "defer" attribute 
    when linking the Js file :)

*/

// Global UI components
const inputEmail = document.getElementById('email')
const primaryContainer = document.querySelector('.container')
const secondaryContainer = document.querySelector('.success-container')


// Buttons
const subscribeBtn = document.querySelector('.subscribe')
const dismissBtn = document.querySelector('.dismiss')

// Variable to check if email is correct
const submit = true;

// Function to hide UI
const hide = function(el){
  return  el.classList.add('hidden');
}

// Functionto display UI
const display = function(el){
    return el.classList.remove('hidden')
}

// Listening for the submit event.
subscribeBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(inputEmail.value === "clevemomanyi@gmail.com") {
        // Hide primary container then display the secondary one
        hide(primaryContainer)
        display(secondaryContainer)
    } else{
        alert('Incorrect password. Try again')
    }
        //Clear email input field
        inputEmail.value = ''
    });
      

// Returning to primary container on dismiss btn click
dismissBtn.addEventListener('click', function(){
    hide(secondaryContainer);
    display(primaryContainer)
})

