export function CreateMainGridSquare(parent, title, subtitle, img) {
    let mainGridSquare = AppendDivWithClasses(parent, ['mainContentGridSquare']);
        let imageParent = AppendDivWithClasses(mainGridSquare, ["imageParent"]);
            let imageParentBorder = AppendDivWithClasses(imageParent, ['imageParentBorder']);
            let imageParentImg = AppendImg(imageParent, img);
        AppendTag(mainGridSquare, 'p', title);
        AppendTag(mainGridSquare, 'span', subtitle);
}

export function CreateSectionHeader(parentNode, mainText, subText) {
    const div = AppendDivWithClasses(parentNode, ["header"]);
        const header = AppendDivWithClasses(div, ["headerHeading"]);
            //h2
            AppendTag(header, 'h2', mainText);
            AppendDivWithClasses(header, ["headerLine"]);

        AppendTag(div, 'span', subText, ['subtitle']);
}

export function AppendDivWithClasses(parentNode, classes) {
    const div = document.createElement('div');
    for (let i = 0; i < classes.length; i++) {
        div.classList.add(classes[i]);
    }
    parentNode.appendChild(div);

    return div;
}

export function AppendImg(parentNode, src) {
    const img = document.createElement('img');
    img.src = src;
    parentNode.appendChild(img);
}

export function AppendTag(parentNode, tag, contents, classList = []) {
    const tagHTML = document.createElement(tag);
    tagHTML.textContent = contents;
    for (let i = 0; i < classList.length; i++) {
        tagHTML.classList.add(classList[i]);
    }
    parentNode.appendChild(tagHTML);
}