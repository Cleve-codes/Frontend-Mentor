// Global Variables
const pages = Array.from(document.querySelectorAll('.page'));
console.log(pages)
console.log(pages[0], pages[1], pages[2])
const primary = document.querySelector('.primary');

const selection = document.querySelector('.selection');
const select = Array.from(document.querySelectorAll('.img-choice'));

const rulesBtn = document.querySelector('.rulesBtn');
const closeBtn = document.querySelector('.close');
const playAgainBtn = document.querySelector('.playAgain-btn');

let activePage = 0;

// Game functionality
// Scissors BEATS Paper
// Rock BEATS Scissors
// Paper BEATS Rock



selection.addEventListener('click', function(e){ 
    // If clicked element is not same as random Pick
    const randomNumber = Math.floor(Math.random()* 3);
    const randomPick = select[randomNumber];
   

     if(randomPick !== e.target){
        console.log(e.target, "Event target")
        if(e.target === select[0] && randomPick === select[1] || e.target === select[1] && randomPick === select[0]){
            // hidePage(pages[0]);
            pages[0].style.display = 'none'
            showPage(pages[1])
            hideBtn.style.display = 'none'
           
        }
      
        if(e.target === select[1] && randomPick === select[2] || e.target === select[2] && randomPick === select[1]){
            // hidePage(pages[0]);
            pages[0].style.display = 'none'
            showPage(pages[1])
            hideBtn.style.display = 'none'
          
        }
        else if(e.target === select[2] && randomPick === select[0] || e.target === select[0] && randomPick === select[2]){
            // hidePage(pages[0])
            pages[0].style.display = 'none'
            showPage(pages[1])
            hideBtn.style.display = 'none'
          
        } 
    } else{
        pages[0].style.display = 'none'
        showPage(pages[1])
        hideBtn.style.display = 'none'
        
    }

})

//////////////////////////////////////////////////////////////////////
// Function to show page
const showPage = function(page){
    page.classList.remove('hidden');
}

// Function to hide page
const hidePage = function(page){
    page.classList.add('hidden');
}

const hideBtn = function(){
    rulesBtn.classList.add('hidden');
}

const showBtn = function(){
    rulesBtn.classList.remove('hidden');
}

// EventListeners
///////////////////////////////////////////////////////////////////////
// Open modal on rulesBtn click
rulesBtn.addEventListener('click', function(){
    showPage(pages[2]);
    primary.classList.add('overlay')
    hideBtn()
});

// Close modal on clicking close btn
closeBtn.addEventListener('click', function(){
    hidePage(pages[2]);
    showPage(pages[0])
    showBtn();
    primary.classList.remove('overlay')
})

// Close modal on clicking anywhere outside the modal
primary.addEventListener('click', function(e){

    if(e.target !== pages[2]){   
        hidePage(pages[2]);
        showPage(pages[0]);
        primary.classList.remove('overlay')
        showBtn();
    }
})

// Close modal on pressing "Esc" key
document.addEventListener('keydown', function(e){
    if(e.key === "Escape"){
        hidePage(pages[2]);
        showPage(pages[0]);
        primary.classList.remove('overlay')
        showBtn();
    }
})

//////////////////////////////////////////////////////////////////
// Play Again button

playAgainBtn.addEventListener('click', function(){
    pages[0].style.display = 'block'
    hidePage(pages[1]);
    hidePage(pages[2])
    showBtn()
    console.log(pages)
})

