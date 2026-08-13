/* -------------------------AEROPULSE-IQ(LOGIN.JS)--------------------------------------------- */

const loginForm = document.getElementById("loginForm");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const errorMessage = document.getElementById("errorMessage");
togglePassword.addEventListener("click", () => {
    if(password.type==="password"){
        password.type="text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    }
    else{
        password.type="password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }
});

loginForm.addEventListener("submit",async function(e){
    e.preventDefault();
    errorMessage.innerHTML="";
    const email=document.getElementById("email").value.trim();
    const passwordValue=document.getElementById("password").value.trim();

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        errorMessage.innerHTML="Please enter a valid email address.";
       return;
    }
    if(passwordValue.length<6){
        errorMessage.innerHTML="Password must contain at least 6 characters.";
        return;
    }
    const button=document.querySelector("button");
    button.innerHTML="Logging in...";
    button.disabled=true;
    try{

      // DEMO LOGIN CREDENTIAL FOR PROJECT DEMONSTRATION ONLY
      // THIS IS NOT A PRODUCTION AUTHENTICATION SYSTEM
        if(email==="admin@gmail.com" &&
           passwordValue==="admin123"){
            localStorage.setItem("loggedIn","true");
            window.location.href="index.html";
        }
        else{
            errorMessage.innerHTML="Invalid Email or Password.";
        }
    }
    catch(error){
        errorMessage.innerHTML="Server Error.";
        console.log(error);
    }
    button.innerHTML="Login";
    button.disabled=false;
});
