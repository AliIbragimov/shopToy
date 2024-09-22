const mid = document.getElementById('')
const message = document.querySelector('.message-buy')
let arraySum = []

function addBasket (e) {
    let name = e.parentNode.id
    let price = e.previousElementSibling.textContent
    let img = e.parentNode.dataset.art
    console.log(img)

    let cardItem = ''
    let out = document.getElementById('basketToy')
    cardItem +=
    `

      <div class="toy-card">
                <div style="display: flex; align-items: center;">
                <button onclick="deleteBasket(this)" class="button-midal-toy"></button>
                <img src="${img}" alt="" style="height: 50px; width: 100px; left: 0; padding: 0; object-fit: cover;">
                </div>
                <div><label for="">${name}</label></div>
                <div><label idPrice="price_toy" class='price_label' for="">${price}</label></div>
        </div>

    `

    
    out.insertAdjacentHTML('afterbegin', cardItem);
    messageAdd()
    matchCalc()
}

function deleteBasket (e) {
    matchCalc()
    let card = e.closest(".toy-card")
    console.log()
    card.remove()
    
    matchCalc()
}

function messageAdd () {
    message.style.visibility = "visible";
    message.style.display = "flex";

    let timerId = setTimeout(function tick() { 
        message.style.visibility = "hidden";
        message.style.display = "none";
        timerId = setTimeout(tick(), 5000); // (*)
      }, 5000); 
}

function messageClose() {
    message.style.visibility = "hidden";
    message.style.display = "none";
} 

function sumBasket (e) {
    arraySum.reduce((partialSum, a) => partialSum + a, 0);
}

function matchCalc () {
    var sum = 0;
    var services = document.getElementsByClassName("price_label");
    for (var i = 0; i < services.length; i++) {
        sum += parseInt( services.item(i).innerHTML );
    }
    document.getElementById('allToySum').innerHTML = sum
}