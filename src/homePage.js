

export default () => {
    const content = document.querySelector("#content");
    
    const homeContainer = document.createElement("div");
    homeContainer.setAttribute("id", "home");

    const h1node = document.createElement("h1");
    h1node.textContent = "Odin Recipes";

    const pNode = document.createElement("p");
    pNode.textContent = "Recipes available:";

    content.appendChild(h1node);
    content.appendChild(pNode);
};