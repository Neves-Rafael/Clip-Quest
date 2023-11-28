import { capture } from "./elements.js";
export class Router {
  routes = {};

  add(pathName, page) {
    this.routes[pathName] = page;
  }

  togglePage() {
    const { pathname } = window.location;
    const captureRoute = this.routes[pathname] || this.routes[404];

    fetch(captureRoute)
      .then((data) => data.text())
      .then((html) => {
        document.getElementById("app").innerHTML = html;
        capture();
      });
  }
}
