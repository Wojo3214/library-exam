/*let button = document.createElement("button");
button.innerHTML = "Toggle";
button.setAttribute('id', 'dark-mode-toggle');

//Append toggle
let navList = document.querySelector(".nav-list");
navList.appendChild(button);*/

let darkMode = localStorage.getItem('darkMode'); 
let darkModeToggle = document.querySelector("#dark-mode-toggle");

//check if dark mode is enabled
//if it's enabled, turned it off
//if it's disabled, turned it on

const enableDarkMode = () => {
    //1. Add he class dark mode to the body
    document.body.classList.add("dark-mode");
    document.querySelector('.header-top').setAttribute('style', 'background-color: #161616; background: linear-gradient(0deg, rgba(20,20,20) 100%, rgba(20,20,20) 100%);');
    let logo = document.getElementById("logo");
    logo.src = "img/logo-dark-mode.svg";
    //2. update dark mode in the localStorage
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    //1. Add he class dark mode to the body
    document.body.classList.remove("dark-mode");
    document.querySelector('.header-top').setAttribute('style', 'background: rgb(251,250,250); background: linear-gradient(0deg, rgba(251,250,250,1) 0%, rgba(243,243,243,1) 100%);');
    let logo = document.getElementById("logo");
    logo.src = "img/logo.svg";
    //2. update dark mode in the localStorage
    localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled'){
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled'){
        enableDarkMode();
        console.log(darkmode);
    }   else {
        disableDarkMode();
        console.log(darkmode);
    }
});

