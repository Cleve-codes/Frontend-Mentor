// Global Variables
const pages = document.querySelectorAll('.page');
console.log(pages)

const rulesBtn = document.querySelector('.rulesBtn');
const closeBtn = document.querySelector('.close');
const playAgainBtn = document.querySelector('.playAgainBtn');

let activePage = 0;

////////////////////////////////////////////////////////////////////
// Function to open rules modal
const openModal = function(){
    pages.forEach(page => {
        if(!page.classList.contains('hidden')){
            hidePage(page);
            showPage(pages[2])
        }
    })
}

// Function to hide rules modal
const closeModal = function(){
    hidePage(pages[2]);
    showPage(pages[0])
}

//////////////////////////////////////////////////////////////////////
// Function to show page
const showPage = function(page){
    page.classList.remove('hidden')
}

// Function to hide page
const hidePage = function(page){
    page.classList.add('hidden')
}

///////////////////////////////////////////////////////////////////////
// EventListeners
// Show Rules on rulesBtn click
rulesBtn.addEventListener('click', function(){
    showPage(pages[2]);
    hidePage(pages[0])
    rulesBtn.classList.add('hidden')
});

// Close modal on clicking close btn

closeBtn.addEventListener('click', function(){
    hidePage(pages[0])
})




