const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

let showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const samll = formControl.querySelector('small');
    samll.innerText = message;
}

let showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

let isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    !username.value ? showError(username, 'Username is required') : showSuccess(username);

    !email.value ? showError(email, 'Email is required') : showSuccess(email);

    !isValidEmail(email.value) ? showError(email, 'Email is not valid') : showSuccess(email);

    !password.value ? showError(password, 'Password is required') : showSuccess(password);

    !password2.value ? showError(password2, 'Password2 is required') : showSuccess(password2);

})