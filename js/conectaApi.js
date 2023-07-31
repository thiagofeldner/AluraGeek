async function listaProdutos () {
  const conexao = await fetch('https://64c030c60d8e251fd111fd32.mockapi.io/produtos');
  const conexaoConvertida = await conexao.json();
  
  return conexaoConvertida;
}



export const conectaApi = {
  listaProdutos
}