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
  }
});

document.getElementById("app").addEventListener("click", function (event) {
  if (event.target && event.target.id === "geometric") {
    const router = new Router();
    window.history.pushState({}, "", "/main");
    router.add("/main", "./pages/main.html");
    router.togglePage();
  }
});

document.getElementById("app").addEventListener("click", function (event) {
  const geometric = document.getElementById("geometric");
  if (event.target && event.target.className === "left") {
    geometric.classList.add("left");

    if (geometric.classList.contains("right")) {
      geometric.classList.add("rightCenter");
      geometric.classList.remove("right");
    }
    setTimeout(() => {
      geometric.classList.remove("rightCenter");
      geometric.classList.remove("leftCenter");
    }, 1000);
  }

  if (event.target && event.target.className === "right") {
    geometric.classList.add("right");

    if (geometric.classList.contains("left")) {
      geometric.classList.add("leftCenter");
      geometric.classList.remove("left");
    }

    setTimeout(() => {
      geometric.classList.remove("leftCenter");
      geometric.classList.remove("rightCenter");
    }, 1000);
  }
});

let videoLocal;
export function callBackHoister(dataVideo) {
  videoLocal = dataVideo;
}
export function teste(videoAqui) {
  if (videoAqui !== null) {
    videoAqui.src = videoLocal;
  }
}

document.getElementById("logo").addEventListener("click", () => {
  window.history.pushState({}, "", "/");
  location.reload();
});

// Recarregamento lógica
if (performance.navigation.type === 1) {
  console.log("A página foi recarregada!!");
  window.history.pushState({}, "", "/");
}

