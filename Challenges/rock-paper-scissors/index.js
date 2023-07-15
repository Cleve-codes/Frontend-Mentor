// Global Variables
const selection = document.querySelector('.selection');
const rules = document.querySelector('.rules');
const primary = document.querySelector('.primary')

const rulesBtn = document.querySelector('.rulesBtn');
const closeBtn = document.querySelector('.close')

let modalOpen = false;

// Function to show rules
const openModal = function(){
    selection.classList.toggle('hidden');
    rules.classList.toggle('hidden')
    modalOpen = true;
}

// Function to hide rules
const closeModal = function(){
    rules.classList.toggle('hidden');
    selection.classList.toggle('hidden')
    modalOpen = false;
}


// EventListeners
// Show Rules on rulesBtn click
rulesBtn.addEventListener('click', function(){
    if(!modalOpen) {
        openModal()
    }else {
        closeModal()
    }
    body.classList.add('overlay')
});

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

