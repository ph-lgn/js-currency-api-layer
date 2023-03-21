
var selectBase = document.querySelector('.deviseBase');
var selectCible = document.querySelector('.deviseCible');

var input = document.querySelector('input')
var resultat = document.querySelector('.resultat')
var base = document.querySelector('.base')
var results = document.querySelector('.resultat')

var convertir = document.querySelector('button')


function appelInfos(to, from, amount) {
    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}&apikey=6IuvBZXMS6R2Ciyr1MstnZiMhW41A8bM`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    results.innerHTML = `<span>${data.result}</span> `  + `<span>${data.query.to}</span>`
  })
  .catch(error => {
    console.error("Erreur lors de la récupération des données :", error); 
  });
}


convertir.addEventListener('click', (e) => {
  var valueInput = input.value;
  var valueSelectBase = selectBase.value;
  var valueSelectCible = selectCible.value;
  appelInfos(valueSelectCible, valueSelectBase, valueInput)
  results.classList.add('active')
});

