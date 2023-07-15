const quoteText =  document.querySelector('.text');
const quoteNumber = document.querySelector('.quoteNumber')
const diceBtn = document.querySelector('.dice')


const generateQuote = function(){
   return fetch(`https://quote-garden.onrender.com/api/v3/quotes/random`)
    .then((res) => res.json())
    .then((data) => {
    const randomNumber = Math.trunc(Math.random() * 200) + 1;
    const randomQuote = `"${data.data[0].quoteText}"`;
    quoteText.textContent = randomQuote;
    quoteNumber.textContent = randomNumber;
    })
    .catch(err => console.log(err))
}

// Generate random quote 
diceBtn.addEventListener('click', function(){
    generateQuote();
})







