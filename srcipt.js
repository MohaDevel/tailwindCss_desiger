
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
btn.addEventListener("click",() => {
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
    }
    else{
        menu.classList.add("hidden");
    }
});

const btn_ul = document.querySelector("button.mobile-menu-button-ul");
const menu_ul = document.querySelector(".mobile-menu_ul");
btn_ul.addEventListener("click",() => {
    if(menu_ul.classList.contains("hidden")){
        menu_ul.classList.remove("hidden");
    }
    else{
        menu_ul.classList.add("hidden");
    }
});