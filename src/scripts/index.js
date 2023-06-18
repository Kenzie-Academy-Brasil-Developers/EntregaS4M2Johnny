import{
  categories,products
} from './productsData.js'
/* Desenvolva sua lógica aqui ... */
// existem 3 parametros dentro do loop for each. 
export function buttonsList (categories){
    const buttonsNames = document.querySelector('.filter_buttons-render')
    buttonsNames.innerHTML = ''
    categories.forEach((element,index)=>{
      const listButtons = document.createElement('li')
      const categoriesButton = document.createElement("button")
      categoriesButton.innerText = element

      categoriesButton.classList.add('buttonsList')
      
      listButtons.classList.add('buttonsMusic')
      categoriesButton.id = categories.indexOf(element)
      buttonsNames.append(listButtons)
      listButtons.append(categoriesButton)
      })
      return buttonsNames
};


buttonsList(categories)

export function renderCards (products){
  const cardList = document.querySelector('.filter_render-cards')
  cardList.innerHTML = ''
  products.forEach(element => {
    const card = createCard(element)
    cardList.appendChild(card)
  });
return cardList
}

function createCard(product) {

  const card = document.createElement("li")
  const albumImage = document.createElement("img")
  const albumBand = document.createElement("p")
  const albumYear  = document.createElement("p")
  const divAlbum = document.createElement('div')
  const albumTitle = document.createElement("h2")
  const fakeButtonBuy = document.createElement("span")
  const fakeButton = document.createElement('button')
  const albumPrice = document.createElement("p")

  albumImage.src = product.img
  albumBand.innerText = product.band
  albumYear.innerText = product.year
  albumTitle.innerText = product.title
  albumPrice.innerText = `R$ ${product.price.toFixed(2)}`

  albumPrice.classList.add('priceText')
  fakeButton.classList.add('fakeButton')
  divAlbum.classList.add('divAlbum')
  card.classList.add('card')
  albumImage.classList.add('albumImage')
  albumBand.classList.add('albumBand')
  albumYear.classList.add('albumYear')
  albumTitle.classList.add('albumTitle')

  fakeButton.innerHTML = 'Comprar'

  divAlbum.append(albumBand,albumYear)
  card.append(albumImage,divAlbum,albumTitle,fakeButtonBuy)
  fakeButtonBuy.append(fakeButton,albumPrice)
   return card
}

renderCards(products);

// Função filter by range

function renderFilterbyCategory (array) {
  const nodeList = document.querySelectorAll('.buttonsList')
  const buttons = Array.from(nodeList)
  // console.log(buttons)
  
  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      if (event.target.innerText === 'Todos') {
        renderCards(products)
        filterByRange(products) //-
      } else { 
        const filter = products.filter(product=> product.category == button.id )
        renderCards(filter)
        filterByRange(filter)
      }
    })
  })
}
renderFilterbyCategory(products)
const buttonsFilter = (array, buttonsToFilter) => array.filter(categories => categories === buttonsToFilter)


const filterByRange = (array) => {
  const inputRange = document.getElementById('slider')
  const inputValue = document.querySelector('.inputSpan')
  const emptyTitle = document.querySelector('.filter_render-title')
  const ulEmpty = document.querySelector('.filter_render-cards')
  const emptySession = document.querySelector('.filter_render')
  const newTitleEmpty = document.createElement('div')
  const titleEmpty =document.createElement('h2')
  
  inputRange.addEventListener('input',()=>{
    inputValue.innerText = Number(inputRange.value).toFixed(2)
    
    const filtered = array.filter(product => product.price <= inputRange.value)
    
    if(filtered.length === 0){
      const newTitleEmpty = document.createElement('div')
      const titleEmpty =document.createElement('h2')
      ulEmpty.innerHTML = ''
      titleEmpty.innerText = 'Não há albuns'
      newTitleEmpty.appendChild(titleEmpty)
      ulEmpty.appendChild(newTitleEmpty)
    } else {
      renderCards(filtered)
    }
  })
}
filterByRange(products)



