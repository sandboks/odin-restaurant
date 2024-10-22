//import './helperFunctions.js';
import { CreateMainGridSquare, CreateSectionHeader, AppendDivWithClasses, AppendImg, AppendTag } from './helperFunctions.js'


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
