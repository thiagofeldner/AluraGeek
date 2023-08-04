const url = "https://64c030c60d8e251fd111fd32.mockapi.io/produto"

async function getProdutos() {
  await fetch(url)
  .then(res => res.json())
  .then(data => renderApiResult.textContent = JSON.stringify(data))
  .catch(e => console.error(e))

}

async function getProduto() {
  await fetch(`${url}/11`)
  .then(res => res.json())
  .then(data => {
    nome.textContent = data.nome;
    categoria.textContent = data.categoria;
    imagem.src = data.imagem;
  })
  .catch(e => console.error(e))
}

async function addProduto(novoProduto){
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(novoProduto),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(res => res.json())
  .then(data => alert.textContent = data)
  .catch(e => console.error(e))
}

async function updateProduto(updatedProduto, id){
  fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedProduto),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    } 
  })
  .then(res => res.json())
  .then(data => alert.textContent = data)
  .catch(e => console.error(e))
}

async function deleteProduto(id) {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }, 
  })
  .then(res => res.json)
  .then(data => alert.textContent = data)
  .catch(e => console.error(e))
}

// const novoProduto = {
//   nome: "teste",
//   imagem: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhciUyMHdhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//   preco: "15000",
//   categoria: "Nova Categoria",
//   descricao: "Mandaloriano"
// }

// const updatedProduto = {
//   nome: "Testando update 2",
//   imagem: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhciUyMHdhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//   preco: "150.52",
//   categoria: "Star Wars",
//   descricao: "Mando"  
// }

// addProduto(novoProduto)

// updateProduto(updatedProduto, 20)

// deleteProduto(19)

getProdutos()
getProduto()