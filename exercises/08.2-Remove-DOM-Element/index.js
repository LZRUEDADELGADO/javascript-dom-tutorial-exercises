// Your code here

let parentList = document.querySelector('#parentLi');

let children = parentList.children;

console.log(children);

parentList.removeChild(children[1]);
