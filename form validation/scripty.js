const username = document.getElementById('username');
const password = document.getElementById('password');
const userNameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');
const submitBtn = document.querySelector('.login-btn');
const show = document.querySelector('.show');

show.addEventListener("click", ()=> {
    if(password.type === "password"){
        password.type = "text";
        show.textContent = "HIDE";
        show.style.color = "green";
    } else{
        password.type = "password";
        show.textContent = "SHOW";
        show.style.color = "black";
    }
});
username.addEventListener("keypup", ()=> {
    if(username.value == ""){
        userNameError.style.display = "block";
    } else{
        userNameError.style.display = "none";
    }
});

password.addEventListener("keypup", ()=> {
    if(password.value == ""){
        passwordError.style.display = "block";
        show.style.top = "40%";
    } else{
        passwordError.style.display = "none";
        show.style.top = "50%";
    }
});

submitBtn.addEventListener("click", ()=>{
    if(username.value == ""){
        userNameError.style.display = "block";
    } 
    if(password.value == ""){
        passwordError.style.display = "block";
        show.style.top = "40%";
    } 
    else{
        userNameError.style.display = "none";
        passwordError.style.display = "none";
        show.style.top = "50%";
        let cred = {
            userName: `${username.value}`,
            password: `${password.value}`,
        }
        console.log(cred);
    };
});