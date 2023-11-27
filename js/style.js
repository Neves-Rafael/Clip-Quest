const menu = document.getElementById("menu");
const menuX = document.getElementById("menux");
const feedback = document.querySelector(".feedback-container");
const table = document.getElementById("table");
const menuOpen = document.getElementById("menu-open");


export function initialContent() {
  // const pathname = window.location.pathname;
  // if (pathname !== "/") {
  //   menuOpen.classList.add("hidden");
  // }
}

menu.addEventListener("click", () => {
  initialContent();
  menu.classList.toggle("hidden");
  menuX.classList.toggle("hidden");
  table.classList.toggle("hidden");
  menuOpen.classList.toggle("animate");
  feedback.classList.remove("invisible");
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
    menu.classList.add("hidden");
    menuX.classList.remove("hidden");
    table.classList.remove("hidden");

    setTimeout(() => {
      menuOpen.classList.add("animate");
    }, 1);
  } else {
    // fechar se clicar fora do menu lateral
    menuOpen.classList.remove("animate");
    table.classList.add("hidden");
    menu.classList.remove("hidden");
    menuX.classList.add("hidden");
    feedback.classList.add("invisible");
  }
});

menuX.addEventListener("click", () => {
  initialContent();
  menu.classList.toggle("hidden");
  menuX.classList.toggle("hidden");
  table.classList.toggle("hidden");
  feedback.classList.add("invisible");

  setTimeout(() => {
    menuOpen.classList.remove("animate");
  }, 500);
});

