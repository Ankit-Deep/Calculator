const outputValue = document.querySelector('#outputValue');
const icons = document.querySelector('.icons');
const spans = document.querySelectorAll('span');
const inputValues = document.querySelector('#inputValues');
let currentValue = '0';
let previousValue = '';
let operation = null;
let result = 0;

spans.forEach(span => {
    span.addEventListener('click', () => {
        const value = span.textContent;
        console.log(value);

        if (!isNaN(value)) {
            // If user presses a number
            handleNumber(value);

        } else if (value === 'C') {
            // If user pressed clear
            clear();

        } else if (value === '=') {
            // To calculate if user presses equal to 
            calculate();

        } else {
            // If user pressed any symbol (+, -, *, /)
            // calculate();
            // operation = value;
            handleOperation(value);
        }

        updateDisplay();

    });
});

function handleNumber(value) {
    if (currentValue === '0') {
        currentValue = value
    } else {
        currentValue += value;
    }
}

// console.log('operation in global: ', operation);


function handleOperation(value) {
    operation = value;
    // console.log('operation in handleOperatioon: ', operation);
    if (operation) {
        calculate();
    }
    // console.log('symbol clicked');

    previousValue = currentValue;
    currentValue = '0';
    // operation = value;

}

function calculate() {
    console.log('Previous', previousValue);
    console.log('current', currentValue);
    // console.log('operation:', operation);

    previousValue = parseFloat(previousValue)
    currentValue = parseFloat(currentValue)
    console.log('Previous after parse', previousValue);
    console.log('current after parse', currentValue);



    // result;

    switch (operation) {
        case '+':
            // result = previousValue;
            result = parseFloat(result);
            console.log('result', result);
            result = result + currentValue;
            // previousValue = result;
            // currentValue = '';
            // console.log('result in plus:', result);
            // console.log('plus clicked');
            break;

        case '-':
            result = parseFloat(previousValue) - parseFloat(currentValue);
            break;

        case '*':
            result = parseFloat(previousValue) * parseFloat(currentValue);
            break;

        case '/':
            result = parseFloat(previousValue) / parseFloat(currentValue);
            break;
    
        default:
            break;
    }
    
    // currentValue = result.toString();
    // console.log('The result is ', result);
    operation = null;
    previousValue = '';
}


function updateDisplay(value) {
    inputValues.textContent = currentValue;
    outputValue.textContent = result;

}


// document.querySelector('#cancel').addEventListener('click', () => {
//     location.reload();
// });

