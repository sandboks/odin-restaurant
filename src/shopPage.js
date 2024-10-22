import { CreateMainGridSquare, CreateSectionHeader, AppendDivWithClasses, AppendImg, AppendTag } from './helperFunctions.js'

import i01 from"./img/shop/s01.jpg";
import i02 from"./img/shop/s02.jpg";
import i03 from"./img/shop/s03.jpg";
import i04 from"./img/shop/s04.jpg";
import i05 from"./img/shop/s05.jpg";
import i06 from"./img/shop/s06.jpg";

export default () => {
    const content = document.querySelector(".content");

    CreateShopMenu(content);
};

function CreateShopMenu(parentNode) {
    const shopList = [
        ['コーヒー豆', 'COFFEE BEANS', i01],
        ['ドリップカフェ', 'DRIP CAFÉ', i02],
        ['リキッド', 'LIQUID', i03],
        ['インスタント スティック', 'INSTANT COFFEE', i04],
        ['インスタントコーヒー', 'GROUND COFFEE', i05],
        ['ギフト', 'GIFT', i06],
    ];
    
    const FoodMenu = AppendDivWithClasses(parentNode, ["main", "menuContent"]);
        CreateSectionHeader(FoodMenu, "コーヒー豆・ギフト", "COFFEE BEANS & GIFTS");
        const mainGrid = AppendDivWithClasses(FoodMenu, ["mainContentGrid"]);
            for (let i = 0; i < shopList.length; i++) {
                let item = shopList[i];
                CreateMainGridSquare(mainGrid, item[0], item[1], item[2]);
            }
}