import * as utils from "./utils.js";
import { Router } from "./router.js";
import { callBackHoister, verifyPageNumber } from "./elements.js";
import { TableView } from "./table.js";
const tableView = new TableView();

export class Request {
  search(query) {
    fetch(`https://api.pexels.com/videos/search?query=${query}&per_page=5`, {
      method: "GET",
      headers: {
        Authorization: `${utils.API_KEY_PEXELS}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.total_results < 5) {
          let router = new Router();
          window.history.pushState({}, "", "/404");
          router.add(404, "./pages/404.html");
          router.togglePage();
        } else {
          this.updateSearch();
          this.getVideo(data);
        }
      })
      .catch((error) => console.error("Erro:", error));
  }

  updateSearch() {
    window.history.pushState({}, "", "/home");
    const router = new Router();
    router.add("/home", "./pages/home.html");
    router.togglePage();
  }

  getVideo(data) {
    const resultData = data.videos[0].video_files[0].link;
    callBackHoister(resultData);
    verifyPageNumber(data)
    tableView.tableContent(data);
  }

}
