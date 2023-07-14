/* Check for previous code implementation and thought process at the end of the code */  

// Global variables
const btnNext = document.querySelectorAll('.next');
const btnBack = document.querySelectorAll('.back');
const btnSubmit = document.querySelector('.submit')

// Steps
const steps = document.querySelectorAll('.content')
const stepBtn = document.querySelectorAll('.stepBtn')

/////////////////////////////////////////////////////////////////
// Function to show or hide active steps

const showBtn = function(btnIndex){
    stepBtn[btnIndex].classList.add('active');
}

const hideBtn = function(btnIndex){
    stepBtn[btnIndex].classList.remove('active')
}

//Change Content based on clicking step button
stepBtn.forEach((button, i) => {
    button.addEventListener('click', function(e){
        e.preventDefault();
        
        //Button not active
        if(!button.classList.contains('active')){
            // Check if the button is hidden
            if(steps[i].classList.contains('hidden')){
                steps[currentStep].classList.add('hidden')
                steps[i].classList.remove('hidden')
                stepBtn[i].classList.add('active');
                // steps[i].classList.remove('hidden')
                currentStep = i;
            } 
            else {
                return;
            }   
        } 

        // Button active
        if(button.classList.contains('active')) {
            // Step content hidden
            if(steps[i].classList.contains('hidden')){
                steps[currentStep].classList.add('hidden')
                steps[i].classList.remove('hidden')
                // steps[i].classList.remove('hidden')
                currentStep = i;
                
            }
            else{
                return;
            }
        }
        
    })
})

//////////////////////////////////////////////////////////
// Function to show or hide step content

const showStep = function(stepIndex){
    if (stepIndex < 0 || stepIndex >= steps.length) {
        return; // Check for invalid step index
      }
      steps[stepIndex].classList.remove('hidden');
}

const hideStep = function(stepIndex){
    if (stepIndex < 0 || stepIndex >= steps.length) {
        return;
    }
    steps[stepIndex].classList.add('hidden');
}

// Current step index
let currentStep = 0;


showBtn(currentStep)

// Go to next page feature
btnNext.forEach((button)=>{
button.addEventListener('click', function(e) {
    e.preventDefault();
    // Hide current step
    hideStep(currentStep);

    // Increment current step index
    currentStep++;

    // Show next step
    showStep(currentStep);
    showBtn(currentStep);
});
})


// Go to previous page feature
btnBack.forEach((button) =>{
    button.addEventListener('click', function(e) {
        e.preventDefault();
        // Hide current step
        hideBtn(currentStep)
        hideStep(currentStep);
    
        // Decrement current step index
        currentStep--;
    
        // Show previous step
        showBtn(currentStep)
        showStep(currentStep);
    });
})

// Submit button
btnSubmit.addEventListener('click', function(){
    // Hide current step
    hideStep(currentStep)

    // Increment step counter
    currentStep++;

    // Show next step
    showStep(currentStep)
})






//////////////////////////////////////////////////////////
// Version 1

// Containers
// const step1 = document.querySelector('.step1Container');
// const step2 = document.querySelector('.step-2-container');
// const step3 = document.querySelector('.step-3-container');
// const step4 = document.querySelector('.step-4-container');
// const lastContainer = document.querySelector('.successContainer')

// Function to hide a step
// function hideStep(stepIndex) {
//     if (stepIndex === 0) {
//         step1.classList.add('hidden')
//     } else if (stepIndex === 1) {
//         step2.classList.add('hidden')
//     } else if (stepIndex === 2){
//         step3.classList.add('hidden')
//     } else if (stepIndex === 3){
//         step3.classList.add('hidden')
//     } else if (stepIndex === 4){
//         step4.classList.add('hidden');
//     } else if (stepIndex == 4){
//         lastContainer.classList.add('hidden')
//     }
// }

// Function to show a step
// function showStep(stepIndex){
//     if (stepIndex === 0){
//         step1.classList.remove('hidden')
//     } else if (stepIndex === 1){
//         step2.classList.remove('hidden')
//     } else if (stepIndex === 2){
//         step3.classList.remove('hidden')
//     } else if (stepIndex === 3){
//         step3.classList.remove('hidden')
//     } else if (stepIndex === 4){
//         step4.classList.remove('hidden');
//     } else if (stepIndex == 4){
//         lastContainer.classList.add('hidden')
//     }
// }
