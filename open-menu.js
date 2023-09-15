let menuButton = document.getElementById("open-menu");
let menuOption = document.getElementsByTagName("li");

function menuOpenClose(){
    let menu = document.getElementById("menu");
    let body = document.getElementById("body");
    const hamburger = 960;
    if (menu.style.right === "-100%"){
        menu.style.right = 0;
        if(window.screen.width <= hamburger){
            body.style.overflowY = "hidden";
        }
    }
    else{
        menu.style.right = "-100%";
        if(window.screen.width <= hamburger){
            body.style.overflowY = "scroll";
        }
    }
}

menuButton.addEventListener("click", menuOpenClose);

for(let i = 0; i < menuOption.length; i++){
    menuOption[i].addEventListener("click", menuOpenClose);
}