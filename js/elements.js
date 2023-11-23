import { Request } from "./request.js";
import { Router } from "./router.js";
const request = new Request();

export function capture() {
  let valueInput = "";

  const inputElement = document.getElementById("input");
  if (inputElement) {
    inputElement.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        request.search();
      }
      if (event.target.value !== "") {
        valueInput = event.target.value;
      }
    });
  }

  document.getElementById("app").addEventListener("click", function (event) {
    if (valueInput === "") {
      return;
    }

    if (event.target && event.target.id === "search") {
      request.search(valueInput);
      window.history.pushState({}, "", "/home");
      const router = new Router();
      router.add("/home", "./pages/home.html");
      router.togglePage();
    }
  });
}

document.getElementById("app").addEventListener("click", function (event) {
  if (event.target && event.target.id === "voltar") {
    window.history.pushState({}, "", "/");
    const router = new Router();
    router.add("/", "./pages/search.html");
    router.togglePage();
    // console.log("voltar");
  }
});
