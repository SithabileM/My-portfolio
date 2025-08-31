const menuButton = document.getElementById("menuButton");
const menuContent = document.getElementById("menuContent");
const main = document.querySelector("main")
let open = false;

menuButton.addEventListener("click", () => {
  open = !open;
  menuContent.style.display = open ? "block" : "none";
  document.getElementById("main").style.filter = open ? "blur(2px)" : "blur(0px)";
});
