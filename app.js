const form = document.querySelector('form');
const btn = document.querySelector('button');
const email = form.querySelector('#email');
const emailErr = document.querySelector('.email_err');
const fNameErr = document.querySelector('.f_name_err');
const lNameErr = document.querySelector('.l_name_err');
const passwordErr = document.querySelector('.password_err');
const inputContainer = document.querySelector('.input_container');
const firstName = form.querySelector('#first_name');
const lastName = form.querySelector('#last_name');
const password = form.querySelector('#password');

form.addEventListener("submit", checkInputs);
btn.addEventListener("click", checkInputs);

function checkInputs(e) {
    e.preventDefault();
  
    const fn = firstName.placeholder;
    const ln = lastName.placeholder;
    const pw = password.placeholder;
    const em = email.placeholder;

    const emailValue = email.value.trim();
  
    if (emailValue === "") {
        form.classList.add("error");
        emailErr.innerText = `${em} cannot be empty`;
    } else if (!isEmail(emailValue)) {
        form.classList.add("error");
        emailErr.innerText = "Please provide a valid email";
    } else {
        form.classList.remove("error");
    }

    if(firstName || lastName || password === ""){
        fNameErr.innerText = `${fn} cannot be empty`;
        lNameErr.innerText = `${ln} cannot be empty`;
        passwordErr.innerText = `${pw} cannot be empty`;
    }
  
    email.value = "";
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email);
}
