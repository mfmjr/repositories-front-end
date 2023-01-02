const countriesContainer = document.querySelector(".countries");

const renderregion = function (data) {
  const html = `
  <article class="region ${data}">
  <img class="region__img" src="./img/${data.sigla}.png"/>
  <div class="region__UF">
  <h4 class="region__name">${data.nome}</h4>
  <h3 class="region__region">(${data.sigla})</h3>
  <h5 class="region__name">${data.regiao.nome}  </h2>
  <p class="country__row"><span>🗺 </span> ${data.regiao.nome} </p>
  <p class="region__row">Sigla da Região: ${data.regiao.sigla} </p>
  </div>
  </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const viaUF = (UF) => {
  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/`)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((UF) => {
      console.log(UF);
      console.log("Estado: ", UF.nome);
      console.log("Sigla do Estado: ", UF.sigla);
      console.log("Região: ", UF.regiao.nome);
      console.log("Sigla da Região: ", UF.regiao.sigla);
      renderregion(UF);
    });
};

viaUF("RN");
