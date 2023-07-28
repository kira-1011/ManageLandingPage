type ImageHTMLElement = HTMLElement & { src?: string };

let menu_btn: HTMLElement | null = document.getElementById('menu-btn');
let menu_btn_img: ImageHTMLElement | null = document.getElementById('menu-btn-img');
let menu: HTMLElement | null = document.getElementById('menu');
let isOpened: boolean = false;


menu_btn?.addEventListener("click", (ev) => {
    
    menu? menu.classList.toggle('flex') : null;
    menu? menu.classList.toggle('hidden') : null;

    if(isOpened){
        menu_btn_img? menu_btn_img.src = "./images/icon-hamburger.svg" : null; 
        isOpened = false;
    }
    else{
        menu_btn_img? menu_btn_img.src = "./images/icon-close.svg" : null;
        isOpened = true;
    }
})