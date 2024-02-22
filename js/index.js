

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

document.getElementById("right-bar-id").onclick = function () {
    var rightSidebar = document.getElementById("right-sidebar");
    rightSidebar.classList.toggle("hide-right-bar-notifications");
};

document.getElementById("right-bar-id").addEventListener("click",myToggleBetweenTwoClasses);

function toggleBetweenTwoClasses(el, c1, c2) {
    var currentClass = el.getAttribute("class");
    var newClass;
    if (currentClass.indexOf(c1) !== -1) {
      newClass = currentClass.replace(c1, c2);
      // Do stuff 1
    }
    if (currentClass.indexOf(c2) !== -1) {
      newClass = currentClass.replace(c2, c1);
      // Do stuff 2
    }
    el.setAttribute("class", newClass);
}
  
function myToggleBetweenTwoClasses(el, c1, c2) {
    toggleBetweenTwoClasses(document.getElementById("icon-id"), "fa-angle-double-left", "fa-angle-double-right");
}