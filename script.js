const outputValue = document.querySelector('#outputValue');
const icons = document.querySelector('.icons');
const span = document.querySelectorAll('span');
const inputValues = document.querySelector('#inputValues');
let prev = inputValues.value;

span.forEach(span => {
    span.addEventListener('click', (e)=> {
        
        let curr = e.target.innerText;
        let show = prev + curr;
        prev = show;
        inputValues.value = show


    });
});

document.querySelectorAll('.symbols').forEach(symbol => {
    symbol.addEventListener('click', (e)=> {
        console.log(e.target);
        
    })
})