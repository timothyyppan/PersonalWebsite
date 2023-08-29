let menuOptions = document.getElementsByClassName("menu-options");

menuOptions.addEventListener("click", function(){
    let menu = document.getElementById("menu");
    if(menu.style.right === 0){
        menu.style.right = "-100%";
    }
});