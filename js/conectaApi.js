async function listaProdutos () {
  const conexao = await fetch('https://64c030c60d8e251fd111fd32.mockapi.io/produtos');
  const conexaoConvertida = await conexao.json();
  
  return conexaoConvertida;
}


async function addProduto(nome, imagem, preco, categoria, descricao) {
  const conexao = await fetch('https://64c030c60d8e251fd111fd32.mockapi.io/produtos', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      nome: nome,
      imagem: imagem,
      preco: preco,
      categoria: categoria,
      descricao: descricao,
    })
  });

  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}


export const conectaApi = {
  listaProdutos,
  addProduto
}