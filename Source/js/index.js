function openNav(){
    var element = document.getElementById("myOverlay");
    element.classList.add("header__openbtn");
}

function closeNav(){
    var element = document.getElementById("myOverlay");
    element.classList.remove("header__openbtn");
}

document.getElementById("switchButton").onclick = function () {
    var element = document.body;
    element.classList.toggle("dark");
};