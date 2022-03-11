

function converterUrl(urlWatch) {
  urlWatch = urlWatch.split("watch?v=");
  let urlEmbed = urlWatch.join("embed/");
  return urlEmbed;
}



let urlVideos = []; /*Variável tem que ficar fora da função para não resetar os valores recebidos*/
let urlComparacao = []

function adicionar() {
  let div = document.querySelector("#div-videos");
  div.style.display = "flex";
  
  let url = document.querySelector("#url").value;
  let urlPronta = converterUrl(url);
  document.querySelector("#url").value = "";/*Resetando o campo que recebe a URL*/
  
  urlVideos.push(`<iframe src="${urlPronta}"></iframe>`);
  urlComparacao.push(urlPronta);
  div.innerHTML = urlVideos;
}

function excluir() {
  let url = document.querySelector("#url").value;
  let urlPronta = converterUrl(url);

  if (urlComparacao.includes(urlPronta)) {
    urlVideos.splice(urlVideos.indexOf(`<iframe src="${urlPronta}"></iframe>`), 1); /*Retirando do array que cria a div dos vídeos*/
    urlComparacao.splice(urlComparacao.indexOf(urlPronta), 1); /*Retirando a url do array usado para comparação*/
    
    let div = document.querySelector("#div-videos");
    div.innerHTML = urlVideos;

    document.querySelector("#url").value = "";
  } else {
    let urlFalha = document.querySelector("#urlFalha");
    urlFalha.style.display = "block";
    urlFalha.innerHTML = "Vídeo não localizado";

    document.querySelector("#url").value = "";
  }
}
