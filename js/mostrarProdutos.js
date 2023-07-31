import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(imagem, alt, nome, preco, id) {
  const produto = document.createElement("li");
  produto.className = "produtos__item";
  produto.innerHTML = `
    <li class="produtos__item">
      <img src="${imagem}" alt="${alt}" />
      <span>${nome}</span>
      <strong>R$ ${preco}</strong>
      <span># ${id}</span>
      <button class="btn__deletar">
        <img src="../assets/imagens/delete.svg" alt="">
      </button>
      <a href="#">
        <button class="btn__editar">
          <img src="../assets/imagens/editar.svg" alt="">
        </button>
      </a>
    </li> `;

  return produto;
}

async function listaProdutos() {
  const listaApi = await conectaApi.listaProdutos();
  listaApi.forEach((produto) =>
    lista.appendChild(
      constroiCard(
        produto.imagem,
        produto.alt,
        produto.nome,
        produto.preco,
        produto.id
      )
    )
  );
}

listaProdutos();