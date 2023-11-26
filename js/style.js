const menu = document.getElementById("menu");
const menuX = document.getElementById("menux");
const table = document.querySelector(".container-table");
const menuOpen = document.getElementById("menu-open");

export function initialContent() {
  //   const pathname = window.location.pathname;
  //   if (pathname !== "/") {
  //     menuOpen.classList.add("hidden");
  //   }
}

menu.addEventListener("click", () => {
  initialContent();
  menu.classList.toggle("hidden");
  menuX.classList.toggle("hidden");
  table.classList.toggle("hidden");
});

document.body.addEventListener("click", function (event) {
  if (
    event.target.id === "menu" ||
    event.target.className === "feedback" ||
    event.target.className === "feedback-container" ||
    event.target.id === "mail" ||
    event.target.id === "table" ||
    event.target.className === "info" ||
    event.target.id === "menu-open"
  ) {
    console.log("menuOpen");
    menu.classList.add("hidden");
    menuX.classList.remove("hidden");
    table.classList.remove("hidden");
    setTimeout(() => {
      menuOpen.classList.add("animate");
    }, 1);
  } else {
    menuOpen.classList.remove("animate");
    table.classList.add("hidden");

    menu.classList.remove("hidden");
    menuX.classList.add("hidden");
  }
});

menuX.addEventListener("click", () => {
  initialContent();
  menu.classList.toggle("hidden");
  menuX.classList.toggle("hidden");
  //   table.classList.toggle("hidden");
});
