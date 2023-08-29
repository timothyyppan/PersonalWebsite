let menuButton = document.getElementById("open-menu");
let menuOption = document.getElementsByTagName("li");
let submitButton = document.getElementById("submit-button");

function menuOpenClose(){
    let menu = document.getElementById("menu");
    if (menu.style.right === "-100%"){
        menu.style.right = 0;
    }
    else{
        menu.style.right = "-100%";
    }
}

function contactSubmit(){
    let contactInfo = document.getElementsByClassName("input-box");
}

menuButton.addEventListener("click", menuOpenClose);
submitButton.addEventListener("click", contactSubmit);

for(let i = 0; i < menuOption.length; i++){
    menuOption[i].addEventListener("click", menuOpenClose);
}