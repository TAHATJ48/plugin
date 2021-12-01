var btn = document.createElement("button"); 
btn.innerHTML = "activer le mode sombre";
document.body.appendChild(btn);

function Darkmode () {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
btn.onclick = () => {
    alert("bouton cliqué");
    Darkmode();
  };

