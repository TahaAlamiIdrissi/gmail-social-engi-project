const email = document.getElementById("email")
const password = document.getElementById("password")
const button = document.getElementById("button")


button.addEventListener("click",() => {
    console.log({email,password});
    email.value=""
    password.value=""
});

