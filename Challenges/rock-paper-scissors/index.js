// Global Variables
const pages = Array.from(document.querySelectorAll('.page'));
const primary = document.querySelector('.primary');

const selection = document.querySelector('.selection');

const select = Array.from(document.querySelectorAll('.img-choice'));

// const paper = document.querySelector('.paper');
// const rock = document.querySelector('.rock');
// const scissors = document.querySelector('.scissors');

const rulesBtn = document.querySelector('.rulesBtn');
const closeBtn = document.querySelector('.close');
const playAgainBtn = document.querySelector('.playAgainBtn');

let activePage = 0;

// Game functionality
// Scissors BEATS Paper
// Rock BEATS Scissors
// Paper BEATS Rock



selection.addEventListener('click', function(e){ 
    // If clicked element is not same as random Pick
    const randomNumber = Math.floor(Math.random()* 3);
    console.log(randomNumber, "Random number")
    const randomPick = select[randomNumber];
    console.log(randomPick)

     if(randomPick !== e.target){
        console.log(e.target, "Event target")
        if(e.target === select[0] && randomPick === select[1] || e.target === select[1] && randomPick === select[0]){
            // hidePage(pages[0]);
            pages[0].style.display = 'none'
            showPage(pages[1])
            console.log('Paper')
        }
      
        if(e.target === select[1] && randomPick === select[2] || e.target === select[2] && randomPick === select[1]){
            // hidePage(pages[0]);
            pages[0].style.display = 'none'
            showPage(pages[1])
            console.log('rock')
        }
        else if(e.target === select[2] && randomPick === select[0] || e.target === select[0] && randomPick === select[2]){
            // hidePage(pages[0])
            pages[0].style.display = 'none'
            showPage(pages[1])
            console.log('Scissors')
        } 
    } else{
        pages[0].style.display = 'none'
        showPage(pages[1])
        console.log("Draw")
    }

})

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




