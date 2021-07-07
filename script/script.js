let menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", function() {
    let menuList = document.getElementById("menu-list");
    let triangle = document.getElementById("triangle");
    if (menuList.style.display == "none" && triangle.style.display == "none") {
        menuList.style.display = "inline";
        triangle.style.display = "inline";
    } else {
        menuList.style.display = "none";
        triangle.style.display = "none";
    }
});