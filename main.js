
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu"); 

const menuHamIcon = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");

const shoppingCartImage = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector("#shoppingCartContainer");

const cardsContainer = document.querySelector(".cards-container");

const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMenuMobile);
shoppingCartImage.addEventListener('click', toggleShoppingCart);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
function toggleDesktopMenu(){
    //Para agregar o quitar la clase inactive
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
      aside.classList.toggle('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
  
}

function toggleMenuMobile(){
  const isAsideClosed = aside.classList.contains('inactive');
  if(!isAsideClosed){
    aside.classList.toggle('inactive');
  }
  closeProductDetailAside();
  menuMobile.classList.toggle('inactive');
  
}

function toggleShoppingCart(){
  const isMobileMenuClosed = menuMobile.classList.contains('inactive');

  if(!isMobileMenuClosed){
    menuMobile.classList.toggle('inactive');  
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  if(!isProductDetailClosed){
      productDetailContainer.classList.add('inactive');
  }


  aside.classList.toggle('inactive');
}

/* Otra forma de hacerlo es:

navEmail.addEventListener('click', () => {
  menuDesktop.classList.toggle('inactive');
});

*/
function openProductDetailAside(){
  aside.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
 productDetailContainer.classList.add("inactive");
}

const productList = [];

productList.push({
  name:'Bike',
  price:120,
  //image: 'https://picsum.photos/300/200',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name:'Pantalla',
  price:220,
  //image: 'https://picsum.photos/300/200',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name:'Computadora',
  price:620,
  //image: 'https://picsum.photos/300/200',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});





function renderProducts(arr){
  for(product of arr){
   const productCard = document.createElement('div');
   productCard.classList.add('product-card');

   const productImg = document.createElement('img');
   productImg.setAttribute('src',product.image);
   productImg.addEventListener('click',openProductDetailAside);

   const productInfo = document.createElement('div');
   productInfo.classList.add('product-info');

   const productInfoDiv = document.createElement('div');
   const productPrice = document.createElement('p');
   productPrice.innerText = '$' + product.price;

   const productName = document.createElement('p');
   productName.innerText = '$' + product.name;

   productInfoDiv.appendChild(productPrice);
   productInfoDiv.appendChild(productName);


   const productInfoFigure = document.createElement('figure');
   const productImgCart = document.createElement('img');
   productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
   productInfoFigure.appendChild(productImgCart);

   productInfo.appendChild(productInfoDiv);
   productInfo.appendChild(productInfoFigure);

   productCard.appendChild(productImg);
   productCard.appendChild(productInfo);

   cardsContainer.appendChild(productCard);

  }
}

renderProducts(productList);

// <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// <div class="product-info">
//   <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//   </div>
//   <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//   </figure>
// </div>
// </div> 