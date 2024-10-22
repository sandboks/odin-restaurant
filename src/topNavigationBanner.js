import HomePage from "./homePage.js";
import MenuPage from "./menuPage.js";
import ShopPage from "./shopPage.js";

const bannerRecipe = [
    ['ホーム', 'HOME', ],
    ['メニュー', 'MENU',],
    ['サービス', 'SHOP', ],
    ['こだわり', 'ABOUT', ],
];

import headerLogo from "./img/headerLogo.png";
   


export default () => {
    
    const content = document.querySelector(".topBanner");
    
    CreateLogoButton(content);

    for (let i = 0; i < bannerRecipe.length; i++) {
        let button = CreateOneButton(content, bannerRecipe[i][0], bannerRecipe[i][1]);
        
    }
};

function CreateLogoButton(parentNode) {
    console.log("createlogobutton");
    
    const a = document.createElement('a');
    parentNode.appendChild(a);
    
    const button = document.createElement('button');
    button.classList.add("topLogo");
    a.appendChild(button);

    const img = document.createElement('img');
    button.appendChild(img);
    img.src = headerLogo;
}

function CreateOneButton(parentNode, textJapanese, textEnglish) {
    //const a = parentNode.createElement('a');
    const a = document.createElement('a');
    //a.href = url;

    const button = document.createElement('button');
    a.appendChild(button);

    const span1 = document.createElement('span');
    span1.textContent = textJapanese;
    button.appendChild(span1);

    const br = document.createElement('br');
    button.appendChild(br);

    const span2 = document.createElement('span');
    span2.textContent = textEnglish;
    span2.classList.add('subMenu');
    button.appendChild(span2);

    // ADD EVENT LISTENER
    button.addEventListener("click", () => {
        DestroyInnerContent();

        switch(textEnglish) {
            case "HOME":
                HomePage();
                break;
            case "MENU":
                MenuPage();
                break;
            case "SHOP":
                ShopPage();
                break;
        }
    });

    parentNode.appendChild(a);
    return button;
}

function DestroyInnerContent() {
    const myNode = document.querySelector(".content");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
}