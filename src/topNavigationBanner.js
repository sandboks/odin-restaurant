import HomePage from "./homePage.js";
import MenuPage from "./menuPage.js";
import ShopPage from "./shopPage.js";
import BrandPage from "./brandPage.js";

const bannerRecipe = [
    ['ホーム', 'HOME', ],
    ['メニュー', 'MENU',],
    ['サービス', 'SHOP', ],
    ['こだわり', 'ABOUT', ],
];

let index = 0; //used to track current page
let navigationLock = false; 

import headerLogo from "./img/headerLogo.png";
import { AppendDivWithClasses } from "./helperFunctions.js";
   


export default () => {
    
    const content = document.querySelector(".topBanner");
    
    CreateLogoButton(content);
    //const buttons = AppendDivWithClasses(content, []);

    for (let i = 0; i < bannerRecipe.length; i++) {
        let button = CreateOneButton(content, bannerRecipe[i][0], bannerRecipe[i][1]);
    }
};

function CreateLogoButton(parentNode) {
    console.log("createlogobutton");
    
    const a = document.createElement('a');
    a.classList.add("logoButton");
    parentNode.appendChild(a);
    
    const button = document.createElement('button');
    button.classList.add("topLogo");
    a.appendChild(button);

    const div = AppendDivWithClasses(button, ["imgContainer"]);

    const img = document.createElement('img');
    div.appendChild(img);
    img.src = headerLogo;

    // ADD EVENT LISTENER
    let textEnglish = "HOME";
    button.addEventListener("click", () => {
        // check to see if we're already on this page, in which case, do nothing
        if (textEnglish == bannerRecipe[index][1] || navigationLock) {
            return;
        }

        PerformButton(textEnglish);
    });
}

function CreateOneButton(parentNode, textJapanese, textEnglish) {
    const a = document.createElement('a');

    const button = document.createElement('button');
    a.appendChild(button);

    const span1 = document.createElement('span');
    span1.textContent = textJapanese;
    button.appendChild(span1);

    const span2 = document.createElement('span');
    span2.textContent = textEnglish;
    span2.classList.add('subMenu');
    button.appendChild(span2);

    // ADD EVENT LISTENER
    button.addEventListener("click", () => {
        // check to see if we're already on this page, in which case, do nothing
        if (textEnglish == bannerRecipe[index][1] || navigationLock) {
            return;
        }

        PerformButton(textEnglish);
    });


    parentNode.appendChild(a);
    return button;
}

async function PerformButton(textEnglish) {
    SetNavigationLock();
    await FadeToWhite();
    DestroyInnerContent();

    switch(textEnglish) {
        case "HOME":
            HomePage();
            index = 0;
            break;
        case "MENU":
            MenuPage();
            index = 1;
            break;
        case "SHOP":
            ShopPage();
            index = 2;
            break;
        case "ABOUT":
            BrandPage();
            index = 3;
            break;
    }

    await FadeToWhite(true);
    SetNavigationLock(false);
}

function SetNavigationLock(b = true) {
    navigationLock = b;
}

async function FadeToWhite(reversed = false) {
    const faderNode = document.querySelector(".whiteFader");
    
    (!reversed) ? faderNode.classList.add("whiteFaderActive") : faderNode.classList.remove("whiteFaderActive");

    await Sleep(250);

}

function DestroyInnerContent() {
    // reset scrolling
    const content = document.querySelector(".contentContainer");
    content.scrollTop = 0;
    
    // destroy all created content
    const myNode = document.querySelector(".content");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
}

// https://www.sitepoint.com/delay-sleep-pause-wait/
function Sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}