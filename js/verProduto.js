const btnVerProduto = document.getElementById('verProduto')
btnVerProduto.addEventListener('click', verProdutoSelecionado)

function verProdutoSelecionado() {
  let produtoSelecionados = produtos.filter(produto => produto.categoria == 'Star Wars')
  console.table(produtoSelecionados)
}



