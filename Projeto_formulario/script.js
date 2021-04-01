let email = document.querySelector("#email");
let password = document.querySelector("#password");

email.addEventListener('focus',()=>{
    email.style.borderColor = "#4A5F6A";
});
email.addEventListener('blur',()=>{
    email.style.borderColor = "#CCC";
});
password.addEventListener('focus',()=>{
    password.style.borderColor = "#4A5F6A";
});
password.addEventListener('blur',()=>{
    password.style.borderColor = "#CCC";
});