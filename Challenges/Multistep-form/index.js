// Global variables
const btnNext = document.querySelectorAll('.next');
const btnBack = document.querySelectorAll('.back');
console.log(btnNext, btnBack)

// Containers
const step1 = document.querySelector('.step1Container')
const step2 = document.querySelector('.step-2-container')
console.log(step1, step2)


// Current step index
let currentStep = 0;

// Go to next page feature
btnNext.addEventListener('click', function(e) {
    e.preventDefault();
    // Hide current step
    hideStep(currentStep);

    // Increment current step index
    currentStep++;

    // Show next step
    showStep(currentStep);
});

// Go to previous page feature
btnBack.addEventListener('click', function(e) {
    e.preventDefault();
    // Hide current step
    hideStep(currentStep);

    // Decrement current step index
    currentStep--;

    // Show previous step
    showStep(currentStep);
});

// Function to hide a step
function hideStep(stepIndex) {
    if (stepIndex === 0) {
        step1.classList.add('hidden')
    } else if (stepIndex === 1) {
        step2.classList.add('hidden')
    }
}

// Function to show a step
function showStep(stepIndex){
    if (stepIndex === 0){
        step1.classList.remove('hidden')
    } else if (stepIndex === 1){
        step2.classList.remove('hidden')
    }
}
