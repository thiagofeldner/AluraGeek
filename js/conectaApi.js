async function listaProdutos () {
  const conexao = await fetch("https://64c030c60d8e251fd111fd32.mockapi.io/produto");
  const conexaoConvertida = await conexao.json();
  
  return conexaoConvertida;
}

async function addProduto(categoria, imagem, nome, preco, descricao) {
  const conexao = await fetch("https://64c030c60d8e251fd111fd32.mockapi.io/produto",{
    method: 'POST',
    body: JSON.stringify({
      categoria: categoria,
      imagem: imagem,
      nome: nome,
      preco: preco,
      descricao: descricao,
    }),
    headers: {
      "Content-type": "application/json",
    }
  })

  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function removerProduto(id) {
  const conexao = await fetch(`https://64c030c60d8e251fd111fd32.mockapi.io/produto/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
  
  const conexaoConvertida = await conexao.json();
  
  return conexaoConvertida;
}

export const conectaApi = {
  listaProdutos,
  addProduto,
  removerProduto
}