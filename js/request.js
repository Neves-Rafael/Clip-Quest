// fetch(url, {
//     method: "GET",
//     headers: {
//       Authorization: `${API_KEY_PEXELS}`,
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error("Erro:", error));

import * as utils from "./utils.js";
import { Router } from "./router.js";


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
        if(data.total_results === 0){
            console.log("nenhum resultado encontrado");
            const router = new Router();
            router.add(404, "./pages/404.html");
            router.togglePage();
          }
      })
      .catch((error) => console.error("Erro:", error));
  }
}
