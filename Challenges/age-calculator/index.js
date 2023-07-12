/* Global Variables */

// Inputs
const inputDate = document.querySelector('.date');
const inputMonth = document.querySelector('.month');
const inputYear = document.querySelector('.year');
// console.log(inputDate, inputMonth, inputYear)

const years = document.querySelector('.years')
const days = document.querySelector('.days')
const months = document.querySelector('.months')
// console.log(years, days, months)

const checkAgeBtn = document.querySelector('.check-age')
const yearInMs = 365*24*60*60*1000

// Convert time into seconds
const now = Number(new Date());
// console.log(now, typeof now);

// Add
checkAgeBtn.addEventListener('click', function(){
    // Get The birthdate in ms
    const birthDate = Number(new Date(inputYear.value, inputMonth.value, inputDate.value));

    //Subtract the Date now from the birthdate
    const age = new Date((now - birthDate));
    console.log(age)
    //console.log(birthDate);
})


/*
    24*60*60*1000 = 1 day in Ms
    1 year = 365*24*60*60*1000

    1 month = 
*/