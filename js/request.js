import * as utils from "./utils.js";
import { Router } from "./router.js";
import { verifyPageNumber } from "./elements.js";
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
      .catch((error) => {});
  }

  updateSearch() {
    window.history.pushState({}, "", "/home");
    const router = new Router();
    router.add("/home", "./pages/home.html");
    router.togglePage();
  }

  getVideo(data) {
    verifyPageNumber(data);
    tableView.tableContent(data);
  }
}
