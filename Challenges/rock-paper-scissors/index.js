// Global Variables
const selection = document.querySelector('.selection');
const rules = document.querySelector('.rules');

const rulesBtn = document.querySelector('.rulesBtn');
const closeBtn = document.querySelector('.close')

let modalOpen = false;

// Function to show rules
const openModal = function(){
    selection.classList.add('hidden');
    rules.classList.remove('hidden')

}

// Function to hide rules
const closeModal = function(){
    rules.classList.add('hidden');
    selection.classList.remove('hidden')
}

// EventListeners
// Show Rules on rulesBtn click
rulesBtn.addEventListener('click', function(){
    if(!modalOpen) openModal();
    selection.classList.add('overlay')
});

// Close modal on clicking close btn
closeBtn.addEventListener('click', closeModal)

