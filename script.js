let urlVideos = [];

function converterUrl(urlWatch) {
  urlWatch = urlWatch.split("watch?v=");
  let urlEmbed = urlWatch.join("embed/");
  return urlEmbed;
}



function adicionar() {
  let div = document.querySelector("#div-videos");
  div.style.display = "flex";
  
  let url = document.querySelector("#url");

  let urlPronta = converterUrl(url.value);

  urlVideos.push(`<iframe src="${urlPronta}"></iframe>`);
  div.innerHTML = urlVideos;
}
