const outputValue = document.querySelector('#outputValue')
const icons = document.querySelector('.icons');
const span = document.querySelectorAll('span');

span.forEach(span => {
    span.addEventListener('click', (e)=> {
        // console.log(e.target.innerText);
        let value = e.target.innerText;
        // console.log(value);

        const inputValues = document.querySelector('#inputValues');

        // if (inputValues.value === '') {
        //     // inputValues.style.paddingLeft = '80%';
        //     inputValues.value = value;
        //     console.log(value);
        // }
        // let firstClick = value;
        // console.log('firstclick',firstClick);

        inputValues.value = value;
        console.log(value);

        // let concat = this.value + value; 
        if (inputValues.value !== '') {
            // inputValues.style.paddingLeft = '80%';
            inputValues.value += value;
            console.log(value);

        }

        // inputValues.style.position = 'relative';
        // inputValues.style.paddingLeft = '85%';
        // inputValues.value = value;




    })
})