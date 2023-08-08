import { conectaApi } from "./conectaApi.js";

const form_edit = document.querySelector('[data-form-edit]');

async function edicaoProduto(evento) {
  evento.preventDefault();

  const categoria = document.querySelector('[data-categoria]');
  const imagem = document.querySelector('[data-imagem]');
  const name = document.querySelector('[data-name]');
  const preco = document.querySelector('[data-preco');
  const descricao = document.querySelector('[data-descricao]');

  await  conectaApi.editarProduto(name, imagem, preco, categoria, descricao);

  window.location.href = "../pages/produtos.html";
}

form_edit.addEventListener('submit', evento => edicaoProduto(evento))

