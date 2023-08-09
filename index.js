const holderName = document.querySelector('.s-name');
const cardNumber = document.querySelector('.s-number');
const expDateMonth = document.querySelector('.s-dateMonth');
const expDateYear = document.querySelector('.s-dateYear');
const cvc = document.querySelector('.s-cvc');
const form = document.querySelector('form');
const thanks = document.querySelector('.div-thanks');
const oHolderName = document.querySelectorAll('small')[1];
const oCvc = document.querySelectorAll('small')[0];
const oExp = document.querySelectorAll('small')[2];
const oCardNumber = document.querySelector('#cardNum');

form.addEventListener("submit", e => {
    e.preventDefault();

    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var regNumber = /[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}/;
    var reg2 = /[0-9]{2}/;
    var reg3 = /[0-9]{3}/;
    var a = '';
    var b = '';
    var c = '';
    var d = '';
    var e = '';

    // Cardholder Name
    if(holderName.value == ''){
        error(holderName, "Can't be blank");
    } else if(!regName.test(holderName.value)){
        error(holderName, "Invalid name")
    } else {
        removeError(holderName);
        a = holderName.value;
    };

    // Card Number
    if(cardNumber.value == ''){
        error(cardNumber, "Can't be blank");
    } else if(!regNumber.test(cardNumber.value)){
        error(cardNumber, "Wrong format");
    } else {
        removeError(cardNumber);
        b = cardNumber.value;
    };

    // Expiry Month
    if(expDateMonth.value == ''){
        error(expDateMonth.parentElement, "Can't be blank");
        expDateMonth.classList.add('error');
    } else if(!reg2.test(expDateMonth.value)) {
        error(expDateMonth.parentElement, "Invalid date");
        expDateMonth.classList.add('error');
    } else {
        removeError(expDateMonth.parentElement);
        expDateMonth.classList.remove('error');
        c = expDateMonth.value;
    };

    // Expiry Year
    if(expDateYear.value == ''){
        error(expDateYear.parentElement, "Can't be blank");
        expDateYear.classList.add('error');
    } else if(!reg2.test(expDateYear.value)) {
        error(expDateYear.parentElement, "Invalid date");
        expDateYear.classList.add('error');
    } else {
        removeError(expDateYear.parentElement);
        expDateYear.classList.remove('error');
        d = expDateYear.value;
    };

    // CVC
    if(cvc.value == ''){
        error(cvc, "Can't be blank");
    } else if(!reg3.test(cvc.value)){
        error(cvc, "Invalid cvc");
    } else {
        removeError(cvc);
        e = cvc.value;
    };

    // SUBMIT
    if (a == '' || b == '' || c == '' || d == '' || e == ''){
        return;
    } else {
        form.classList.add('d-none');
        thanks.classList.remove('d-none');
        oHolderName.innerText = a;
        oCardNumber.innerText = b;
        oExp.innerText = c;
        oExp.innerText = c + '/' + d; 
        oCvc.innerText = e;
    }
});

function error (input, message){
    const parent = input.parentElement;
    parent.querySelector('small').innerText = message;
    input.classList.add('error');
}

function removeError (input){
    const parent = input.parentElement;
    parent.querySelector('small').innerText = "";
    input.classList.remove('error');
}