import * as utils from "./utils.js";
import { Router } from "./router.js";
import { callBackHoister } from "./elements.js";

export class Request {
  search(query) {
    console.log("buscando");
    console.log(query);
    fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=3`, {
      method: "GET",
      headers: {
        Authorization: `${utils.API_KEY_PEXELS}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.getVideo(data);
        if (data.total_results === 0) {
          console.log("nenhum resultado encontrado");
          let router = new Router();
          router.add(404, "./pages/404.html");
          router.togglePage();
        }
      })
      .catch((error) => console.error("Erro:", error));
  }

  getVideo(data) {
    console.log("chegou aqui");
    const resultData = data.photos[0].src.original;
    callBackHoister(resultData);
    console.log(resultData);
  }


  // requestSrc(srcVideo) {
  //   srcVideo =
  //     "https://images.pexels.com/photos/5696525/pexels-photo-5696525.jpeg";
  //   let videoElement = document.getElementById("video");

  //   if (videoElement !== null) {
  //     videoElement.src = srcVideo;
  //     console.log("srcVideo", srcVideo);
  //   }
  // }
}
