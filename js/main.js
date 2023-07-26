let produtos = [];
const url = "http://localhost:3000/produtos";
getVerProdutos();

async function getVerProdutos() {
  const verProdutos = await fetch(url);
  produtos = await verProdutos.json();
  
  exibirProdutos(produtos);
}