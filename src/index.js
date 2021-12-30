import contactTab from './contact.js';
import homeTab from './home.js'
import menuTab from './menu.js'


const content = document.querySelector('#content');
const hTab = homeTab();
const mTab = menuTab();
const cTab = contactTab();
const navbar = document.createElement("div");
navbar.classList.add("navbar");
const ul = document.createElement("ul");
const tabContainer = document.createElement("div");

const createNavItems = (text) => {
    const navItem = document.createElement("a");
    const li = document.createElement("li");
    navItem.textContent = text;
    navItem.setAttribute("href", "#");
    li.appendChild(navItem);
    return li;
}

const home = createNavItems("Home");
const menu = createNavItems("Menu");
const contact = createNavItems("Contact");

home.addEventListener("click", () => {
    hTab.classList.add("active");
    mTab.classList.remove("active");
    cTab.classList.remove("active");

});

menu.addEventListener("click", () => {
    mTab.classList.add("active");
    hTab.classList.remove("active");
    cTab.classList.remove("active");

});

contact.addEventListener("click", () => {
    cTab.classList.add("active");
    hTab.classList.remove("active");
    mTab.classList.remove("active");


});



ul.append(home, menu, contact);
navbar.appendChild(ul);

tabContainer.classList.add("tab-container")
tabContainer.append(hTab, cTab, mTab);

content.append(navbar, tabContainer);