let btn_dropdown = document.getElementById("dropdown-btn");
let dropdown = () => {
    document.getElementById("dropdown").classList.toggle("dropdown-active");
    document.getElementById("dropdown-menu").classList.toggle("active");
}
btn_dropdown.addEventListener("click", dropdown)
window.onclick = (event => {
    if (!event.target.matches('dropdown-btn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let dropdown of dropdowns) {
            let openDropdown = dropdown;
            if (openDropdown.classList.contains('active')) {
                openDropdown.classList.remove('active');
            }
        }
    }
    if (!event.target.matches('dropdown-btn')) {
        let dropdowns = document.getElementsByClassName("dropdown");
        for (let dropdown of dropdowns) {
            let openDropdown = dropdown;
            if (openDropdown.classList.contains('dropdown-active')) {
                openDropdown.classList.remove('dropdown-active');
            }
        }
    }
})
