const bannerRecipe = [
    ['ホーム', 'HOME', ''],
    ['メニュー', 'MENU', 'test3'],
    ['サービス', 'SHOP', 'test3'],
    ['こだわり', 'ABOUT', 'test3'],
];

import headerLogo from "./img/headerLogo.png";
   


export default () => {
    console.log("HELLO");
    
    const content = document.querySelector(".topBanner");
    
    CreateLogoButton(content);

    for (let i = 0; i < bannerRecipe.length; i++) {
        CreateOneButton(content, bannerRecipe[i][0], bannerRecipe[i][1], bannerRecipe[i][2]);
    }
};

function CreateLogoButton(parentNode) {
    const a = document.createElement('a');
    parentNode.appendChild(a);
    
    const button = document.createElement('button');
    button.classList.add("topLogo");
    a.appendChild(button);

    const img = document.createElement('img');
    button.appendChild(img);
    img.src = headerLogo;
}

function CreateOneButton(parentNode, textJapanese, textEnglish, url) {
    //const a = parentNode.createElement('a');
    const a = document.createElement('a');
    a.href = url;

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

    parentNode.appendChild(a);

}