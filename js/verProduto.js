// function verProtudosPorCategoria(produtos){
//   const produtosCategoria = {
//     'Star Wars': document.getElementById('starWars'),
//     'Consoles': document.getElementById('consoles'),
//     'Diversos': document.getElementById('diversos'),
//   };

//   produtos.forEach(produto => {
//     const categoria = produto.categoria
//     if(produtosCategoria[categoria]) {
//       produtosCategoria[categoria].innerHTML += `
//         <li data-id="${produto.id}">
//           <img src="${produto.imagem}" alt="${produto.alt}" />
//           <span>${produto.name}</span>
//           <strong>R$ ${produto.preco}</strong>
//           <a href="./pages/produto.html?id=${produto.id}&categoria=${produto.categoria}" data-id="${produto.id}">Ver Produto</a>
//         </li>
//       `
//     }
//   })
// }

const btnVerStarWars = document.getElementById('starWars')
btnVerStarWars.addEventListener('click', verCategoriaStarWars)

function verCategoriaStarWars() {
  let categoriaSelecionada = produtos.filter(produto => produto.categoria == 'Star Wars')
  console.log(categoriaSelecionada)
}

const btnVerConsoles = document.getElementById('consoles')
btnVerConsoles.addEventListener('click', verCategoriaConsoles)

function verCategoriaConsoles() {
  let categoriaSelecionada = produtos.filter(produto => produto.categoria == 'Consoles')
  console.log(categoriaSelecionada)
}

const btnVerDiversos = document.getElementById('diversos')
btnVerDiversos.addEventListener('click', verCategoriaDiversos)

function verCategoriaDiversos() {
  let produtoSelecionados = produtos.filter(produto => produto.categoria == 'Diversos')
  console.log(produtoSelecionados)
}
