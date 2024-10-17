import mainStageBanner from "./img/b01.jpg";
import sloganBanner from "./img/bnr_sloganCrop.jpg";

import i01 from"./img/01.jpg";
import i02 from"./img/02.jpg";
import i03 from"./img/03.jpg";
import i04 from"./img/04.jpg";

export default () => {
    
    const content = document.querySelector(".content");

    CreateMainStage(content);
    CreateMainSlogan(content);
    CreateMainSpecialty(content);
};

function CreateMainStage(parentNode) {

    const mainStageDiv = AppendDivWithClasses(parentNode, ["main", "mainStage"]);
    AppendImg(mainStageDiv, mainStageBanner);
}

function CreateMainSlogan(parentNode) {
    const mainSloganDiv = AppendDivWithClasses(parentNode, ["main", "slogan"]);
        CreateSectionHeader(mainSloganDiv, 'ブランドスローガン', 'BRAND SLOGAN');

        const mainSloganGrid = AppendDivWithClasses(mainSloganDiv, ['sloganBannerGrid']);
            // img
            AppendImg(mainSloganGrid, sloganBanner);
            const mainSloganGrid2 = AppendDivWithClasses(mainSloganGrid, ['sloganBannerText']);
                AppendTag(mainSloganGrid2, 'span', 'すべての今日を、');
                AppendTag(mainSloganGrid2, 'span', '支えていく。');


}

function CreateMainSpecialty(parentNode) {
    const specialtyArray = [
        ['ミラノサンド', 'MILANO SANDWICH', i01],
        ['ドリンク', 'DRINK', i02],
        ['レモンヨーグルン', 'LEMON YOGHURT', i03],
        ['桃のミルクレープ', 'MILK CREPE', i04],
    ];
    
    const SpecialtyDiv = AppendDivWithClasses(parentNode, ["main", "specialty"]);
        CreateSectionHeader(SpecialtyDiv, "おすすめ", "SPECIALTY");
        const mainGrid = AppendDivWithClasses(SpecialtyDiv, ["mainContentGrid"]);
            for (let i = 0; i < specialtyArray.length; i++) {
                let item = specialtyArray[i];
                CreateMainGridSquare(mainGrid, item[0], item[1], item[2]);
            }
}

function CreateMainGridSquare(parent, title, subtitle, img) {
    let mainGridSquare = AppendDivWithClasses(parent, ['mainContentGridSquare']);
        let imageParent = AppendDivWithClasses(mainGridSquare, ["imageParent"]);
            let imageParentBorder = AppendDivWithClasses(imageParent, ['imageParentBorder']);
            let imageParentImg = AppendImg(imageParent, img);
        AppendTag(mainGridSquare, 'p', title);
        AppendTag(mainGridSquare, 'span', subtitle);
}

function CreateSectionHeader(parentNode, mainText, subText) {
    const div = AppendDivWithClasses(parentNode, ["header"]);
        const header = AppendDivWithClasses(div, ["headerHeading"]);
            //h2
            AppendTag(header, 'h2', mainText);
            AppendDivWithClasses(header, ["headerLine"]);

        AppendTag(div, 'span', subText, ['subtitle']);
}

function AppendDivWithClasses(parentNode, classes) {
    const div = document.createElement('div');
    for (let i = 0; i < classes.length; i++) {
        div.classList.add(classes[i]);
    }
    parentNode.appendChild(div);

    return div;
}

function AppendImg(parentNode, src) {
    const img = document.createElement('img');
    img.src = src;
    parentNode.appendChild(img);
}

function AppendTag(parentNode, tag, contents, classList = []) {
    const tagHTML = document.createElement(tag);
    tagHTML.textContent = contents;
    for (let i = 0; i < classList.length; i++) {
        tagHTML.classList.add(classList[i]);
    }
    parentNode.appendChild(tagHTML);
}

