async function buscarCategoria(categoria) {
  try {
    const url = await fetch("https://64c030c60d8e251fd111fd32.mockapi.io/produtos")
    var urlConvertida = await url.json();
    if(urlConvertida.erro) {
      throw Error('Página não existente')
    }
    console.log(urlConvertida)
    return urlConvertida

  } catch (erro) {
    console.log(erro)
  }
}

buscarCategoria()


