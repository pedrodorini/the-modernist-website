function dropdown() {
    document.getElementById("dropdown-menu").classList.toggle("active");
}

// Close the dropdown if the user clicks outside of it
window.onclick = (event => {
  if (!event.target.matches('.btn-dropdown')) {

    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let dropdown of dropdowns) {
      let openDropdown = dropdown;
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
})
