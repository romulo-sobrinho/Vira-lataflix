

function converterUrl(urlWatch) {
  urlWatch = urlWatch.split("watch?v=");
  let urlEmbed = urlWatch.join("embed/");
  return urlEmbed;
}



let urlVideos = []; /*Variável tem que ficar fora da função para não resetar os valores recebidos*/

function adicionar() {
  let div = document.querySelector("#div-videos");
  div.style.display = "flex";
  
  let url = document.querySelector("#url").value;
  let urlPronta = converterUrl(url);
  document.querySelector("#url").value = "";/*Resetando o campo que recebe a URL*/
  
  urlVideos.push(`<iframe src="${urlPronta}"></iframe>`);
  div.innerHTML = urlVideos;
}
