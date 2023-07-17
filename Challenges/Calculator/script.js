const userInput = document.getElementById('userInput');

let expression = '';

const press = function(num){
    expression += num;
    userInput.value = expression;
}

const equal = function(){
    // userInput.value = eval(expression)

    try {
        const result = eval(expression);
        userInput.value = result !== undefined ? result : 'Error';
        expression = ''
    } catch (error) {
        userInput.value = 'Error';
    }
}

const erase = function(){
    expression = ''
    userInput.value = expression
}