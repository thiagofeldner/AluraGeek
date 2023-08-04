async function listaProdutos () {
  const conexao = await fetch("https://64c030c60d8e251fd111fd32.mockapi.io/produto");
  const conexaoConvertida = await conexao.json();
  
  return conexaoConvertida;
}

async function buscarProdutoId(id) {
  try {
    const conexao = await fetch(`https://64c030c60d8e251fd111fd32.mockapi.io/produto/${id}`);
    const conexaoConvertida = conexao.json();
    return conexaoConvertida
  } catch(e) {
    throw new Error ("Erro ao buscar produto por ID");
  }
}

async function produtoCategoria(categoria) {
  const lista = await listaProdutos();
  return lista.filter((produto) => produto.categoria() === categoria());
}

async function addProduto(categoria, imagem, nome, preco, descricao) {
  const conexao = await fetch("https://64c030c60d8e251fd111fd32.mockapi.io/produto",{
    method: 'POST',
    body: JSON.stringify({
      categoria: categoria,
      imagem: imagem,
      nome: nome,
      preco: `${preco}`,
      descricao: descricao,
    }),
    headers: {
      "Content-type": "application/json",
    }
  })

  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

async function editarProduto(id, atualizarProduto) {
  try {
    const conexao = await fetch(`https://64c030c60d8e251fd111fd32.mockapi.io/produto/${id}`, {
      method: "PUT",
      body: JSON.stringify(atualizarProduto),
      headers: {
        "Content-type": "application/json"
      }
    });
      const conexaoConvertida = await conexao.json();
      return conexaoConvertida
  }catch(e) {
    return console.error(e)
  }
}

async function removerProduto(id) {
  try {
    const conexao = await fetch(`https://64c030c60d8e251fd111fd32.mockapi.io/produto/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
      });

      const conexaoConvertida = await conexao.json();
      return conexaoConvertida

  } catch(e) {
    return console.error(e)
  }  
}

export const conectaApi = {
  listaProdutos,
  addProduto,
  editarProduto,
  removerProduto,
  buscarProdutoId,
  produtoCategoria
}