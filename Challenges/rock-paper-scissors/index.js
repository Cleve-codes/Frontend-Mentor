// Global Variables
const pages = document.querySelectorAll('.page');
const primary = document.querySelector('.primary');

console.log(pages)

const rulesBtn = document.querySelector('.rulesBtn');
const closeBtn = document.querySelector('.close');
const playAgainBtn = document.querySelector('.playAgainBtn');

let activePage = 0;


//////////////////////////////////////////////////////////////////////
// Function to show page
const showPage = function(page){
    page.classList.remove('hidden')
}

// Function to hide page
const hidePage = function(page){
    page.classList.add('hidden')
}


// EventListeners
///////////////////////////////////////////////////////////////////////
// Open modal on rulesBtn click
rulesBtn.addEventListener('click', function(){
    showPage(pages[2]);
    primary.classList.add('overlay')
    rulesBtn.classList.add('hidden')
});

// Close modal on clicking close btn
closeBtn.addEventListener('click', function(){
    hidePage(pages[2]);
    showPage(pages[0])
    rulesBtn.classList.remove('hidden')
    primary.classList.remove('overlay')
})

// Close modal on clicking anywhere outside the modal
primary.addEventListener('click', function(e){

    if(e.target !== pages[2]){   
        hidePage(pages[2]);
        showPage(pages[0]);
        primary.classList.remove('overlay')
        rulesBtn.classList.remove('hidden')
    }
})

// Close modal on pressing "Esc" key
document.addEventListener('keydown', function(e){
    if(e.key === "Escape"){
        hidePage(pages[2]);
        showPage(pages[0]);
        primary.classList.remove('overlay')
        rulesBtn.classList.remove('hidden')
    }
})




