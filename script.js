const outputValue = document.querySelector('#outputValue');
const icons = document.querySelector('.icons');
const span = document.querySelectorAll('span');
const inputValues = document.querySelector('#inputValues');
let arr1 = [];
// console.log('arr:',arr1);
// let prev = inputValues.value;
// let show;

let value = [];

span.forEach(span => {
    span.addEventListener('click', (e)=> {

        let currentValue = e.target.innerText;
        console.log('currentVal: ',currentValue);

        value.push(currentValue);
        console.log(value);

        inputValues.innerText = value.join('');

        let currentValueString = String(value.join(''));
        console.log('str', currentValueString);

        let plus = '+';
        let index = currentValueString.indexOf(plus);

        let beforeValue = currentValueString.substring(0, index).trim();    
        let afterValue = currentValueString.substring(index + plus.length).trim();
        console.log('Before: ', beforeValue);
        console.log('After: ', afterValue);

        if(currentValue === '+'){

            function addition( ) {
                
        
            }

            addition(); 
        }


        if (e.target.classList[0] === 'plus') {
            // inputValues.style.color = 'green';
            inputValues.style.padding = '2px';

            // plus();

        } else if (e.target.classList[0] === 'minus') {
            inputValues.style.padding = '2px';

            minus();

        } else if (e.target.classList[0] === 'multiply') {
            inputValues.style.padding = '2px';

            multiply();

        } else if (e.target.classList[0] === 'divide') {
            inputValues.style.padding = '2px';

            divide();

        } else {
            decimal();
        }
        

    });
    
});

function plus(params) {
    // alert('plus clicked')
    
}

function minus(params) {
    // alert('minus clicked')
}

function multiply(params) {
    // alert('multiply clicked')
}

function divide(params) {
    // alert('divide clicked')
}

function decimal(params) {
    // alert('decimal clicked')
}


document.querySelector('#cancel').addEventListener('click', () => {
    location.reload();
})

