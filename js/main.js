"use strict";
let menu_btn = document.getElementById('menu-btn');
let menu_btn_img = document.getElementById('menu-btn-img');
let menu = document.getElementById('menu');
let isOpened = false;
menu_btn === null || menu_btn === void 0 ? void 0 : menu_btn.addEventListener("click", (ev) => {
    menu ? menu.classList.toggle('flex') : null;
    menu ? menu.classList.toggle('hidden') : null;
    if (isOpened) {
        menu_btn_img ? menu_btn_img.src = "./images/icon-hamburger.svg" : null;
        isOpened = false;
    }
    else {
        menu_btn_img ? menu_btn_img.src = "./images/icon-close.svg" : null;
        isOpened = true;
    }
});
