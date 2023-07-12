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
const ageDisplay = document.querySelector('.ageDisplay')
const yearInMs = 365*24*60*60*1000

// Convert time into seconds
const now = Number(new Date());
// console.log(now, typeof now);

// INitial states
years.value = months.value = days.months = '00'


// AddEventlistener 
checkAgeBtn.addEventListener('click', function(e){
    e.preventDefault();


    // Get the entered date values
  const date = parseInt(inputDate.value, 10);
  const month = parseInt(inputMonth.value, 10) - 1; // Months are zero-based
  const year = parseInt(inputYear.value, 10);

  // Validate the entered date
  if (isNaN(year) || isNaN(month) || isNaN(date) || date < 1 || date > 31 || month < 0 || month > 11) {
    alert('Invalid date! Please enter a valid date.');
    inputDate.value = inputMonth.value = inputYear.value = '';
    return;
  }

  // Create a new Date object with the entered date
  const birthDay = new Date(year, month, date);

  // Check if the entered date is in the future
  if (birthDay > new Date()) {
    alert('Invalid date! Please enter a date in the past.');
    inputDate.value = inputMonth.value = inputYear.value = '';
    return;
  }


    //Subtract the Date now from the birthdate
    const age = new Date((now - birthDay));
    const userYears = age.getUTCFullYear() - 1970;
    const userMonths = age.getUTCMonth() + 1;
    const userDays = age.getUTCDate();
    console.log(userYears, userMonths, userDays);



    const html = `
      <ul>
      <li class="years"><h2><span>${userYears}</span>years</h2></li>
      <li class="months"><h2><span>${userMonths}</span>Months</h2></li>
      <li class="days"><h2><span>${userDays}</span>days</h2></li></ul>
    `
    ageDisplay.innerHTML = ''

    ageDisplay.insertAdjacentHTML('afterbegin', html)

    // Clear Input fields
    inputDate.value = inputMonth.value = inputYear.value = '';
})


/*
    24*60*60*1000 = 1 day in Ms
    1 year = 365*24*60*60*1000

    1 month = 
*/