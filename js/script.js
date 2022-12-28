function hamburger() {
  let hamburgerIcon = document.querySelector("#hamburger-icon");
  if (hamburgerIcon.getAttribute("src") == "static/hamburger-icon.svg") {
    hamburgerIcon.setAttribute("src", "static/close-icon.svg");
  } else {
    hamburgerIcon.setAttribute("src", "static/hamburger-icon.svg");
  }
}
