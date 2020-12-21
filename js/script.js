//My api key
var apikey = {
  key: '73677b89-0553-4001-a083-30eeddca1cca'
}

//Get Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
  apikey.key)
  .then((response) => {
    if (!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
    return response.json();
  })
  .then((api) => {
    var texto = "";
    //Get 10 coins and symbols
    for (let i = 0; i < 10; i++) {

      //Show api information
      texto = texto + `                 
      <div class="media">
          <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/${api.data[i].id}.png" class="align-self-center mr-3" alt="${api.data[i].name}" width="64" height="64">
          <div class="media-body">
          <h5 class="mt-2">${api.data[i].name}</h5>
          <p>${api.data[i].symbol} - ${api.data[i].first_historical_data}</p>
          </div>
      </div> 
      `;

      document.getElementById("coins").innerHTML = texto;
    }
  })
  .catch((error) => {
    console.error(error.message);
  });
