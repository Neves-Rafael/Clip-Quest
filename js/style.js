const menu = document.getElementById("menu");
const menuX = document.getElementById("menux");
const table = document.getElementById("table");
const menuOpen = document.getElementById("menu-open");


export function initialContent() {

    const pathname = window.location.pathname;
    console.log(pathname)
  if (pathname === "/") {
    menuOpen.classList.toggle("hidden");
  } else {
    menuOpen.classList.add("hidden");
  }
}

menu.addEventListener("click", () => {
    initialContent();
  menu.classList.toggle("hidden");
  menuX.classList.toggle("hidden");
  table.classList.toggle("hidden");
});

menuX.addEventListener("click", () => {
    initialContent();
  menu.classList.toggle("hidden");
  menuX.classList.toggle("hidden");
  table.classList.toggle("hidden");
});
