var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elList = document.querySelector("list");

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    var elInputVal = elInput.value;
    var elLi = document.createElement("li");
    var content = document.querySelector(".list");
    content.appendChild(elLi);
    elLi.textContent = elInputVal;
    elLi.setAttribute("class", "list__item")
})
