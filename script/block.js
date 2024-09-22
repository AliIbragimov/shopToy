
fetch('../data/product.json')
  .then(response => response.json())
  .then(data => {
        let cardItem = ''
        let out = document.getElementById('main-core')
        data.forEach ((menu) => {
        cardItem +=
        `

        <div id='${menu.name}' class="toy-block">
            <div class="toy-sale">
                <div class="toy-img"><img src="${menu.img}" alt="toy"></div>
                <div data-art="${menu.img}" id='${menu.name}' class="toy-text">    
                    <label id='toy_name' class="toy-label">${menu.name}</label>
                    <div style="display:flex;">
                    <label id="toy_price">${menu.price}</label>
                    <p>р</p>
                    </div>
                    <button onclick="addBasket(this)" id="toy_b" class="toy-button">В корзину</button>
                </div>
            </div>
        </div>

        `
        })
        out.insertAdjacentHTML('afterbegin', cardItem);
  })
  //.catch(error => console.error('Error:', error));

  
