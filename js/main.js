import { Router } from "./router.js";
import "./style.js";
import "./table.js";
import { putImage } from "./elements.js";

const router = new Router();

router.add("/", "./pages/search.html");
router.add("/main", "./pages/main.html");
router.add("/home", "./pages/home.html");
router.add(404, "./pages/404.html");

const activeRout = document.querySelectorAll("#logo, #menu, #menux");
activeRout.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

router.togglePage();

window.onpopstate = () => {
  router.togglePage();
  putImage();
};
window.route = () => router.togglePage();


const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", (event) => {
  const posX = event.clientX;
  const posY = event.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});
