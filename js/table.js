import { initialContent } from "./style.js";

export class Table {
  constructor(root) {
    this.root = document.querySelector(root);
  }
}
export class TableView extends Table {
    constructor(root) {
      super(root);
      this.tbody = document.querySelector("table tbody");
    }

  tableContent(data) {
    this.removeTr();
    try {
      for (let i = 0; i <= 5; i++) {
        const row = this.createRow();
        row.querySelector(".table a").href = data.videos[i].user.url;
        row.querySelector(".author p").textContent = `Autor: ${data.videos[i].user.name}`;
        this.tbody.append(row);
      }
    } catch (error) {
      console.log(error);
    }

  }

  createRow() {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td class="table">
          <a href="" target="_blank">
            <p>Imagem 1</p>
          </a>
        </td>
        <td class="author">
          <p><span>Autor:</span> Rafael Neves</p>
        </td>
        <td>
          <button class="remove">&times;</button>
        </td>
        `;
    return tr;
  }

  removeTr() {
    const tr = document.querySelector("tr");
    tr.innerHTML = ``;
    initialContent();
  }
}
