
const btnVerProduto = document.getElementById('starwars')
btnVerProduto.addEventListener('click', verCategoriaStarWars)

function verCategoriaStarWars() {
  let produtoSelecionados = produtos.filter(produto => produto.categoria == 'Star Wars')
    produtoSelecionados.forEach((produto) => {
    btnVerProduto.innerHTML += `      
    <section class="produto__container" id="starwars" data-produtos>
    <div class="produto__titulo">
      <h3>${produto.categoria}</h3>
      <a href="./pages/produtos.html"
        >Ver tudo
        <img src="./assets/imagens/seta.svg" alt="" />
      </a>
    </div>
    <ul class="produto__conteudo" >
      <li>
        <img src="${produto.imagem}" alt="" />
        <span>${produto.name}</span>
        <strong>R$ ${produto.preco}</strong>
        <a href="#">Ver Produto</a> 
      </li>
    </ul>
  </section>
    `
  })

  window.location.href = './pages/produto.html'
}


const btnVerConsoles = document.getElementById('consoles')
btnVerConsoles.addEventListener('click', verCategoriaConsoles)

function verCategoriaConsoles() {
  let categoriaSelecionada = produtos.filter(produto => produto.categoria == 'Consoles')
  console.table(categoriaSelecionada)
}

const btnVerDiversos = document.getElementById('verDiversos')
btnVerDiversos.addEventListener('click', verCategoriaDiversos)

function verCategoriaDiversos() {
  let produtoSelecionados = produtos.filter(produto => produto.categoria == 'Diversos')
  console.table(produtoSelecionados)
}
