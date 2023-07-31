import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
  evento.preventDefaut();

  const nome = document.querySelector("[data-nome]").value;
  const imagem = document.querySelector("[data-imagem]").value;
  const preco = document.querySelector("[data-preco]").value;
  const categoria = document.querySelector("[data-categoria]").value;
  const descricao = document.querySelector("[data-descricao]").value;

  await conectaApi.addProduto(nome,imagem, preco, categoria, descricao);

  window.location.href = "../index.html";
}


formulario.addEventListener("sumbit", evento => criarProduto(evento));