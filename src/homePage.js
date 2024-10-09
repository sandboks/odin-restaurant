import mainStageBanner from "./img/b01.jpg";
import sloganBanner from "./img/bnr_sloganCrop.jpg";

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
    const SpecialtyDiv = AppendDivWithClasses(parentNode, ["main", "specialty"]);
        CreateSectionHeader(SpecialtyDiv, "おすすめ", "SPECIALTY");
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

