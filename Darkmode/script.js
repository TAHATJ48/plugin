var btn = document.createElement("button"); 
btn.innerHTML = "activer le mode sombre";
document.body.appendChild(btn);

function Darkmode () {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

if (localStorage.isDark == "true") {
    btn.innerHTML = "désactiver le mode sombre";
    Darkmode();
}

btn.onclick = () => {
    if (localStorage.isDark == "false") {
        btn.innerHTML = "activer le mode sombre";
        localStorage.setItem("isDark", "true")
        Darkmode()
        alert(localStorage.getItem("isDark"))
    }
    else{
        btn.innerHTML = "désactiver le mode sombre";
        localStorage.setItem("isDark", "false")
        Darkmode()
        alert(localStorage.getItem("isDark"))
    }
};
