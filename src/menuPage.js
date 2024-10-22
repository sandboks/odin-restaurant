import { CreateMainGridSquare, CreateSectionHeader, AppendDivWithClasses, AppendImg, AppendTag } from './helperFunctions.js'

import i01 from"./img/menu/m01.jpg";
import i02 from"./img/menu/m02.jpg";
import i03 from"./img/menu/m03.jpg";
import i04 from"./img/menu/m04.jpg";
import i05 from"./img/menu/m05.jpg";
import i06 from"./img/menu/m06.jpg";
import i07 from"./img/menu/m07.jpg";
import i08 from"./img/menu/m08.jpg";
import i09 from"./img/menu/m09.jpg";

import i00 from"./img/menu/m00.jpg";
import i10 from"./img/menu/m10.jpg";
import i11 from"./img/menu/m11.jpg";
import i12 from"./img/menu/m12.jpg";
import i13 from"./img/menu/m13.jpg";
import i14 from"./img/menu/m14.jpg";

export default () => {
    const content = document.querySelector(".content");

    CreateFoodMenu(content);
    CreateMenuSection(content);
};

function CreateFoodMenu(parentNode) {
    const foodList = [
        ['ホットドリンク', 'HOT DRINK', i01],
        ['アイスドリンク', 'ICED DRINK', i02],
        ['ミラノサンド', 'MILANO SANDWICH', i03],
        ['ジャーマンドック', 'HOT DOG', i04],
        ['全粒粉サンド', 'WHOLE GRAIN SANDWICH', i05],
        ['モーニング・セット', 'MORNING SET', i06],
        ['ホットサンド', 'HOT SANDWICH', i07],
        ['トースト', 'TOAST', i08],
        ['デザート', 'DESERT', i09],
    ];
    
    const FoodMenu = AppendDivWithClasses(parentNode, ["main", "menuContent"]);
        CreateSectionHeader(FoodMenu, "食べ物", "FOOD");
        const mainGrid = AppendDivWithClasses(FoodMenu, ["mainContentGrid"]);
            for (let i = 0; i < foodList.length; i++) {
                let item = foodList[i];
                CreateMainGridSquare(mainGrid, item[0], item[1], item[2]);
            }
}

function CreateMenuSection(parentNode) {
    const menuList = [
        ['季節のおすすめ', 'SEASONAL MENU', i00],
        ['店舗限定メニュー', 'EXCLUSIVE MENU', i10],
        ['ドトール ドッグ カフェ', 'DOUTOR DOG FRIENDLY CAFE', i11],
        ['ドトール キッチン', 'ドトール キッチン', i12],
        ['ドトール コーヒースタンド', 'DOUTOR COFFEE STAND', i13],
        ['ドトール パークカフェ', 'DOUTOR PARK CAFE', i14],
    ];
    
    const MenuGrid = AppendDivWithClasses(parentNode, ["main", "menuContent"]);
        CreateSectionHeader(MenuGrid, "メニュー", "MENU");
        const mainGrid = AppendDivWithClasses(MenuGrid, ["mainContentGrid"]);
            for (let i = 0; i < menuList.length; i++) {
                let item = menuList[i];
                CreateMainGridSquare(mainGrid, item[0], item[1], item[2]);
            }
}