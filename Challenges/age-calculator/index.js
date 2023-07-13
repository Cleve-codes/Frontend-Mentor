/* Global Variables */
// Inputs
const selectDate = document.querySelector('.date');
const selectMonth = document.querySelector('.month');
const selectYear = document.querySelector('.year');
// console.log(inputDate, inputMonth, inputYear)

const years = document.querySelector('.years')
const days = document.querySelector('.days')
const months = document.querySelector('.months')
// console.log(years, days, months)

const checkAgeBtn = document.querySelector('.check-age')
const ageDisplay = document.querySelector('.ageDisplay')
const currentYear = new Date().getFullYear()

// Convert time into seconds
const now = Number(new Date());
// console.log(now, typeof now);


////////////////////////////////////////////////////////////////////////////////////
// Initial states
// Function to Generate Options

const generateOptions = function(start, end, element){
  for(let i = start; i <= end; i++){
    const option = document.createElement('option');
    option.text = i;
    option.value = i;
    element.appendChild(option)
  }
}

generateOptions(1, 31, selectDate);
generateOptions(1, 12, selectMonth);
generateOptions(1990, currentYear, selectYear)



// AddEventlistener to get inputs
checkAgeBtn.addEventListener('click', function(e){
    e.preventDefault();


  // Get the entered date values
  const date = parseInt(selectDate.value, 10);
  const month = parseInt(selectMonth.value, 10) - 1; // Months are zero-based
  const year = parseInt(selectYear.value, 10);


  // Create a new Date object with the entered date
  const birthDay = new Date(year, month, date);

  // Check if the entered date is in the future
  if (birthDay > new Date()) {
    alert('Invalid date! Please enter a date in the past.');
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

})

