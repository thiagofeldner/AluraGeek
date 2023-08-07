import { conectaApi } from "../js/conectaApi.js";

const formulario = document.querySelector("[data-form]");

async function criarProduto(evento) {
  evento.preventDefault();

  const categoria = document.querySelector("[data-categoria]").value;
  const imagem = document.querySelector("[data-imagem]").value;
  const nome = document.querySelector("[data-nome]").value;
  const preco = document.querySelector("[data-preco]").value.replace("," , ".");
  const descricao = document.querySelector("[data-descricao]").value;

  await conectaApi.addProduto(categoria, imagem, nome, preco, descricao);

  window.location.href = "../index.html";
}

formulario.addEventListener("sumbit", evento => criarProduto(evento));
