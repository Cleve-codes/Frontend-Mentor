// Global Variables
const pages = document.querySelectorAll('.page');
console.log(pages)

const rulesBtn = document.querySelector('.rulesBtn');
const closeBtn = document.querySelector('.close')

let activePage = 0;

// Function to show rules
const openModal = function(){
    // selection.classList.toggle('hidden');
    // rules.classList.toggle('hidden')
    // modalOpen = true;

    pages.forEach(page => {
        if(!page.classList.contains('hidden')){
            pages[activePage].classList.add('hidden');
            activePage+= 1;
            pages[activePage].classList.add('hidden');
            pages[2].classList.remove('hidden')
        }
    })
}

// Function to hide rules
const closeModal = function(){
    // rules.classList.add('hidden');
    // selection.classList.remove('hidden')
    // resultSection.classList.remove('hidden')
    // modalOpen = false;

    pages.forEach(page => {
        if(!page.classList.contains('hidden')){
            pages[activePage].classList.add('hidden');
            activePage-= 1;
            pages[activePage].classList.add('hidden');
            pages[2].classList.remove('hidden')
        }
    }) 
}


// EventListeners
// Show Rules on rulesBtn click
rulesBtn.addEventListener('click', openModal);

// Close modal on clicking close btn

closeBtn.addEventListener('click', function(){
    closeModal();
    primary.classList.remove('overlay');
})

// Close on pressing escape{
window.addEventListener('keydown', function(e){
        if(!modalOpen){
            if(e.key = 'Escape') closeModal();  
        }
})

window.addEventListener('change', function(){
    console.log("I will detect changes, HA HA HA HAAA")
})

