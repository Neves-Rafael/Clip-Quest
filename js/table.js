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
        row.querySelector(".count").textContent = `Vídeo: ${i + 1}`;
        row.querySelector(
          ".author p"
        ).textContent = `Autor: ${data.videos[i].user.name}`;
        this.tbody.append(row);
      }
    } catch (error) {
      console.log(error);
    }
  }

  createRow() {
    const tr = document.createElement("tr");
    tr.classList.add("tr-style");
    tr.innerHTML = `
        <td class="table">
          <a href="" target="_blank">
            <p class="count">Imagem 1</p>
          </a>
        </td>
        
        <td class="author">
          <p><span>Autor:</span> Rafael Neves</p>
        </td>
        `;
    return tr;
  }

  removeTr() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = ``;
  }
}
