import { CreateMainGridSquare, CreateSectionHeader, AppendDivWithClasses, AppendImg, AppendTag } from './helperFunctions.js'



export default () => {
    const content = document.querySelector(".content");
    console.log("AWOO");
    CreateBlurb(content);
};

function CreateBlurb(parentNode) {
    AppendDivWithClasses(parentNode, ["brandSloganPadding"]);
    let container = AppendDivWithClasses(parentNode, ["brandSloganSection"]);
    
    const paragraphs = [
        'ひと息つきたい人がいる。仕事をしたい人がいる。 豆と鮮度にこだわった、おいしいコーヒーと過ごす場所。 いつもの香り、いつもの椅子、いってらっしゃいと言われる朝。 「ドトールがあって、よかったね。」 つくっているのは、そんな時間。 ひとりでも多くのひとに、本物の1杯を届けてる。',
        '特別じゃないけど、特別なんだ。 特別じゃないから、特別なんだ。',
        'ひとりになりたい人がいる。おしゃべりしたい人がいる。 豊富なメニューもそろってる、やさしいコーヒーを飲める場所。 走りつづけるには、休息がいる。進みつづけるには、安心がいる。',
        '「ドトールがあって、よかったね。」 つくっているのは、そんな時間。 お店を磨いて、笑顔を磨いて、誰かの今日を、支えてる。',
        '特別じゃないけど、特別なんだ。 特別じゃないから、特別なんだ。'
    ];

    for (let i = 0; i < paragraphs.length; i++) {
        let div = AppendDivWithClasses(container, ["sloganParagraph"]);
        let paragraph = paragraphs[i];
        //let sentences = paragraph.replace(/([.。])\s*(?=[A-Z])/g, "$1|").split("|");
        let sentences = paragraph.split(" ");
        //console.log(sentences);
        for (let j = 0; j < sentences.length; j++) {
            AppendTag(div, 'p', sentences[j]);
        }
    }

    AppendDivWithClasses(parentNode, ["brandSloganPadding"]);
}