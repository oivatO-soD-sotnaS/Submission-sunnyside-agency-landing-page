const menuButton = document.getElementById("menu-button")
const menuDropdown = document.getElementById("dropdown-menu")

menuButton.addEventListener("click", () => {
    if(menuDropdown.style.display == "none"){
        menuDropdown.style.display = "flex"
    }else{
        menuDropdown.style.display = "none"
    }
})
