const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

let showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const samll = formControl.querySelector('small');
    small.innerText = message;
}

let showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

let isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

let checkRequired = (inputArr) => {
    inputArr.forEach((input) => {
        input.value.trim() === '' ? showError(input, `${getFieldName(input)} is required`) : showSuccess(input);
    })
}

let getFieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([username, email, password, password2]);

})