import { Router } from "./router.js";

const router = new Router();

router.add("/", "./pages/search.html");
router.add("/main", "./pages/main.html");
router.add("/home", "./pages/home.html");
router.add(404, "./pages/404.html");

const activeRout = document.querySelectorAll("nav a");
activeRout.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);

    router.togglePage();
  });
});

router.togglePage();

window.onpopstate = () => router.togglePage();
window.route = () => router.togglePage();

//caso tenha imagem utilizar a seguinte abordagem

// const activeRoutImg = document.getElementById("");
// activeRoutImg.addEventListener("click", (event) => {
//   event.preventDefault();
//   window.history.pushState({}, "", event.target.getAtribute("href"));
// })

// ------------------------------------------------------

//cursor teste

// const cursorDot = document.querySelector("[data-cursor-dot]");
// const cursorOutline = document.querySelector("[data-cursor-outline]");

// window.addEventListener("mousemove", (event) => {
//     const posX = event.clientX;
//     const posY = event.clientY;

//     cursorDot.style.left = `${posX}px`;
//     cursorDot.style.top = `${posY}px`;

//     // cursorOutline.style.left = `${posX}px`;
//     // cursorOutline.style.top = `${posY}px`;

//     cursorOutline.animate({
//         left: `${posX}px`,
//         top: `${posY}px`
// }, {duration: 500, fill: "forwards"})
// })
