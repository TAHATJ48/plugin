var label = document.createElement("label"); 
label.className = "switch";
var input = document.createElement("input");
input.type = "checkbox";
var span = document.createElement("span");
span.className = "slider round";
document.querySelector('.header').appendChild(label);
document.querySelector('.switch').appendChild(input);
document.querySelector('.switch').appendChild(span);


function Darkmode () {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

if (localStorage.isDark == "true") {
    Darkmode();
}

input.onclick = () => {
    if (localStorage.isDark == "false") {
        localStorage.setItem("isDark", "true")
        Darkmode()
    }
    else{
        localStorage.setItem("isDark", "false")
        Darkmode()
    }
};