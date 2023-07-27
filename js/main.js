let produtos = [];
const url = "https://64c030c60d8e251fd111fd32.mockapi.io/produtos";

getVerProdutos();

async function getVerProdutos() {
  const verProdutos = await fetch(url);
  produtos = await verProdutos.json();
  
  exibirProdutos(produtos);
  verProtudosPorCategoria(produtos);
}