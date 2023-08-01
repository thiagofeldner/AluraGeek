async function listaProdutos () {
  const conexao = await fetch("https://64c030c60d8e251fd111fd32.mockapi.io/produto");
  const conexaoConvertida = await conexao.json();
  
  return conexaoConvertida;
}

async function addProduto(nome, imagem, preco, categoria, descricao) {
  const conexao = await fetch("https://64c030c60d8e251fd111fd32.mockapi.io/produto",{
    method: 'POST',
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      imagem: imagem,
      preco: preco,
      categoria: categoria,
      descricao: descricao,
    })
  })

  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function deletarProduto(id) {
  const conexao = await fetch(`https://64c030c60d8e251fd111fd32.mockapi.io/produto/${id}`,{
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
  deletarProduto
}