const inserirProdutos = document.getElementById("produtos");

function exibirProdutos(listaDeProdutos) {
  listaDeProdutos.forEach((produto) => {
    inserirProdutos.innerHTML += `
    <li>
      <img src="${produto.imagem}" alt="${produto.alt}" />
      <span>${produto.name}</span>
      <strong>R$ ${produto.preco}</strong>
      <span># ${produto.id}</span>
      <button class="btn__deletar">
        <img src="../assets/imagens/delete.svg" alt="">
      </button>
      <a href="#">
        <button class="btn__editar">
          <img src="../assets/imagens/editar.svg" alt="">
        </button>
      </a>
    </li>
    `;
  });
}
