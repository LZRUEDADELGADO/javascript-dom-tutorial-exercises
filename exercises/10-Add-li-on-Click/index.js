
let button = document.getElementById("superDuperButton");

// mi codigo
button.addEventListener("click", function() {
    
    let newListItem = document.createElement("li");
    newListItem.innerHTML = "Nuevo ítem de lista";
    let list = document.getElementById("myList");
    list.appendChild(newListItem);
});

