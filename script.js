console.log("Inventory Sneakers")

const getProducts = async () => {
  const response = await fetch('js/products.json')
  const data = await response.json() 
  console.log(data)
  return data
  
}

const generateCard = async () => {
  
  const products = await getProducts()
  console.log(products)

  products.map(products => {
    //console.log(products)
    let card = document.createElement('div')
    card.classList.add('card_produto')

    card.innerHTML = `<figure>
         <img src="images/${products.image}" width="60%" height= "150px" alt="${products.product_name}"/>

       </figure>

       <div class="card_produto_detalhes">
        <h4>${products.product_name}</h4>
         <h5>${products.product_model}</h5>
       </div>

       <h6>R$ ${products.price}</h6> 
    `
    const listaProdutos = document.querySelector('.lista_produtos')
    listaProdutos.appendChild(card)

    
  })
}

generateCard()
