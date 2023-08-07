const url = "https://64c030c60d8e251fd111fd32.mockapi.io/produto";

async function listaProdutos () {
  const conexao = await fetch(url);
  const conexaoConvertida = await conexao.json();
  
  return conexaoConvertida;
}

async function buscarProdutoId(id) {
  try {
    const conexao = await fetch(`${url}/${id}`);
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

async function addProduto(name, imagem, preco, categoria, descricao) {
  const conexao = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      imagem: imagem,
      preco: preco,
      categoria: categoria,
      descricao: descricao,
    }),
  })

  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

async function editarProduto(id, atualizarProduto) {
  try {
    const conexao = await fetch(`${url}/${id}`, {
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
    const conexao = await fetch(`${url}/${id}`, {
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