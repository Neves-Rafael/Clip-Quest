import { Request } from "./request.js";
import { Router } from "./router.js";
const request = new Request();

export function capture() {
  let valueInput = "";

  const inputElement = document.getElementById("input");
  if (inputElement) {
    inputElement.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        request.search(valueInput);
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

      valueInput = "";
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

document.getElementById("logo").addEventListener("click", () => {
  window.history.pushState({}, "", "/");
  location.reload();
});

// Recarregamento lógica
if (performance.navigation.type === 1) {
  window.history.pushState({}, "", "/");
}

let count = 1;

document.getElementById("app").addEventListener("click", function (event) {
  if (event.target && event.target.className === "left") {
    count--;
    verifyNumber();
    putImage();
    const pageNumber = document.querySelector(".page-number");
    pageNumber.textContent = `${count}/5`;
  }

  if (event.target && event.target.className === "right") {
    count++;
    verifyNumber();
    putImage();
    const pageNumber = document.querySelector(".page-number");
    pageNumber.textContent = `${count}/5`;
  }
});

document.getElementById("app").addEventListener("click", function (event) {
  if (event.target && event.target.className === "left-video") {
    count--;
    verifyNumber();
    putVideo();
  }

  if (event.target && event.target.className === "right-video") {
    count++;
    verifyNumber();
    putVideo();
  }
});

let dataImage;
let dataVideo;

function verifyNumber() {
  if (count >= 5) {
    count = 5;
  } else if (count <= 1) {
    count = 1;
  }
}

export function verifyPageNumber(data) {
  dataImage = data;
  dataVideo = data;
  putImage();
  putVideo();
}

let preview;
let videoPlay;

export function putImage() {
  setTimeout(() => {
    preview = document.querySelector(".preview");
    preview.src = `${dataImage.videos[count - 1].image}`;
  }, 500);
}

export function putVideo() {
  const logoMain = document.getElementById("logo");
  const menuMain = document.getElementById("menu");

  setTimeout(() => {
    if (window.location.pathname === "/main") {
      videoPlay = document.getElementById("video");
      videoPlay.src = `${dataVideo.videos[count - 1].video_files[0].link}`;
      logoMain.classList.add("nav-main");
      menuMain.classList.add("nav-main");
    }else {
      logoMain.classList.remove("nav-main");
      menuMain.classList.remove("nav-main");
    }
  }, 500);
}

document.getElementById("app").addEventListener("click", function (event) {
  if (event.target && event.target.id === "play") {
    putVideo();
    window.history.pushState({}, "", "/main");
    const router = new Router();
    router.add("/main", "./pages/main.html");
    router.togglePage();
  }
});

let valueButton = "";
document.getElementById("app").addEventListener("click", function (event) {
  if (event.target && event.target.className === "404-search") {
    valueButton = event.target.textContent;
    request.search(valueButton);
  }
});
