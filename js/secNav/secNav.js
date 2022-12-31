import anchors from "./anchors.js";
console.log(anchors);

const secNav = document.querySelector('.secNav-menu');

const children = secNav.childNodes;

for(var child in children){
    if (children[child].firstChild != null) {

        console.log(children[child].firstChild);
    }
}
