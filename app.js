const allBtn = document.getElementsByClassName('add-btn')
let count = 0;
for (const btn of allBtn){
    btn.addEventListener('click', function(e){
        count = count + 1;
        // document.getElementById('cart-count').innerText = count;
        setInnerText('cart-count',count)
    })
}
function setInnerText(id , value) {
    document.getElementById(id).innerText = value;
}

// Get all cards
const cards = document.querySelectorAll('.card');

const priceDisplay = document.getElementById('selectedPrices');

for (const card of cards) {
  card.addEventListener('click', function() {

    const price = card.querySelector('p').textContent;

    const listItem = document.createElement('li');
    listItem.textContent = price;

    priceDisplay.appendChild(listItem);

  });
}

// Get all cards
const manyCards = document.querySelectorAll('.card');

const totalPriceDisplay = document.getElementById('totalPrice');

let totalPrice = 0;

for (const card of manyCards) {
  card.addEventListener('click', function(){
 
    const priceString = card.querySelector('p').textContent;
    const price = parseFloat(priceString.replace('Price: $', ''));

    totalPrice += price;
    totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
  });
}