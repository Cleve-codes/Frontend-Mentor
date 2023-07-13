// Global variables
const btnNext = document.getElementsByClassName('next');
const btnBack = document.getElementsByClassName('back');
console.log(btnNext, btnBack)

// Containers
const step1 = document.getElementsByClassName('step1Container')
const step2 = document.getElementsByClassName('step-2-container')
console.log(step1, step2)


// Go to next page feature

    btnNext.addEventListener('click', function(e){
        for(let i = 0; i <= btnNext; i++){
            e.preventDefault();
            console.log(e.target)
        }
    })

