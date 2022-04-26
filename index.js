import { chupashadows } from 'chupashadows';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
  } from 'mathjs';

  let price = "http://192.168.1.145:3002/api/price"
  let displayBtcUsdPrice = document.getElementById('btcusdprice');
  let displayBtcGbpPrice = document.getElementById('btcgbpprice');
  let displayBtcEurPrice = document.getElementById('btceurprice');

  fetch(price)
  .then((response)=> {
      return response.json();
  })
  .then((data)=> {
      let price = data;
      let btcUsdPrice = price.usd;
      let btcGbpPrice = price.gbp;
      let btcEurPrice = price.eur;

      displayBtcUsdPrice.innerHTML = btcUsdPrice;
      displayBtcGbpPrice.innerHTML = btcGbpPrice;
      displayBtcEurPrice.innerHTML = btcEurPrice;
  })
  .catch();



chupashadows({
    shadow_type: 'hard',
    padding: false
})
