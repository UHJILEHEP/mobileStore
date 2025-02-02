const itemsDiv = document.getElementById('items')
const menu = document.getElementById('menu')
const list = document.getElementById('list')

const url = 'https://webmiddle-2e4b.restdb.io/rest/products'
const apiKey = '6779d251f0549d1bfa8d2fa6'
const myHeaders = {
    "Content-Type": "application/json",
    'x-apikey': apiKey,
    'cache-control': 'no-cache'
}

itemsDiv.innerHTML = '<p class="loadingInfo">Loading...</p>'

fetch(url,{
    method:'GET',
    headers: myHeaders
})
.then(async function(response) {
    const result = await response.json()
    itemsDiv.innerHTML = ''
    console.log(result)
    result.forEach(element => {
        itemsDiv.innerHTML += `
                                <div class="item" id="item">
                                    <img class="itemImg" src="${element.photo_url}" alt="Item image">
                                    <h2>${element.title}</h2>
                                    <p class="itemDescription">${element.description}</p>
                                    <div class="itemFooter">
                                        <p class="itemPrice">${element.price}</p>
                                        <div class="buyButton" id="buyButton" onclick="buy()">Buy</div>
                                    </div>
                                </div>
                             `
    });
    
})



function buy(){
    alert('Coming soon with updates...')
}

function menuf(){
    alert('Coming soon with updates...')
    // menuFlag = !menuFlag
    // console.log(list.style.visibility)
    // if(menuFlag) list.style.visibility = 'visible'
    // else list.style.visibility = 'hidden'
}