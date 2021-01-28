const email = document.getElementById("email")
const password = document.getElementById("password")
const button = document.getElementById("button")


button.addEventListener("click",() => {
    alert("ton email c'est : "+ email.value+" \nton mot de passe c'est : "+password.value+"\n vous avez été hacké, Cordialement !")
    email.value=""
    password.value=""
});

