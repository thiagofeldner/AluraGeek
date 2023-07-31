import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector('[data-lista]');

async function deleteProduto(event) {
  const element = event.target;
  let selectedId;

  if (element.id === "data-delete") {
    selectedId =
      element.parentNode.parentNode.parentNode.parentNode.getAttribute(
        "data-id"
      );

    await conectaApi.deletarProduto(selectedId);
    
    location.reload();

  }
}

lista.addEventListener('click', async(event) => deleteProduto(event));