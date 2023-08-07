import { conectaApi } from "../js/conectaApi.js";

const formulario = document.querySelector("[data-form]");

async function criarProduto(evento) {
  evento.preventDefault();

  const name = document.querySelector("[data-nome]").value;
  const imagem = document.querySelector("[data-imagem]").value;
  const preco = document.querySelector("[data-preco]").value.replace("," , ".");
  
  const categoria = document.querySelector("[data-categoria]").value;

  const descricao = document.querySelector("[data-descricao]").value;

  await conectaApi.addProduto(name, imagem, preco, categoria, descricao);

  window.location.href = "../pages/produtos.html";
}

formulario.addEventListener("submit", evento => criarProduto(evento));
