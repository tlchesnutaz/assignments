var header = document.getElementById("header");
header.textContent = "JavaScript Made This!";
header.style.textAlign = "center"; font = "Garamond"; 
header.style.fontSize = "45px";

// why couldn't I add the third style to the first 'call' (is that the right word?)?

var subTitle = document.createElement("div");
subTitle.textContent = "wrote the JavaScript"; 
subTitle.style.fontSize = '25px';

var span = document.createElement("span");
span.setAttribute('class', 'span');
span.textContent = "Tracy ";

var label = document.querySelector("label");
label.setAttribute('id', "label");

// why did querySelector work, but not getElementByTagName?

document.body.insertBefore(subTitle, label);
subTitle.style.textAlign = "center";
subTitle.prepend(span);

var text= document.getElementsByClassName("message left");
text[0].textContent = "I have something hilarious to talk about";
text[1].textContent = "You have time today?";

var text2 = document.getElementsByClassName("message right");
text2[0].textContent = "I can't wait to talk";
text2[1].textContent = "I'm just finishing up, brt :)";

var clear = document.getElementById("clear-button");
clear.addEventListener("click", clearMessages)

function clearMessages() {
    text[0].textContent = "";
    text[1].textContent = ""; 
    text2[0].textContent = "";
    text2[1].textContent = ""; 
}

// why can't I select these as an array - text[0,1]?

var theme = document.getElementById("theme-drop-down");
theme.addEventListener("change", changeTheme)

function changeTheme () {
    if (theme.value == "theme-two") {
    text2[0].setAttribute("style", "background:black; color:white;");
    text2[1].setAttribute("style", "background:black; color:white;");
    text[0].setAttribute("style", "background:red; color:white;");
    text[1].setAttribute("style", "background:red; color:white;");

    } else if (theme.value == "theme-one") {
        text2[0].setAttribute("style", "background:lightblue; color:black;");
        text2[1].setAttribute("style", "background:lightblue; color:black;");
        text[0].setAttribute("style", "background:burlywood; color:black;");
        text[1].setAttribute("style", "background:burlywood; color:black;");
    }
}

var input = document.getElementById("input");
var button = document.querySelector("button");
button.setAttribute("id", "button");
button.addEventListener("click", inputNew);

//let i = 0 ???
function inputNew () {
    text[0].textContent = input.value;
//text[1].textContent = ""; 
//text2[0].textContent = "";
//text2[1].textContent = ""; 

}
