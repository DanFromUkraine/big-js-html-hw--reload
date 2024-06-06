const refs = {
    products_list: document.querySelector(".products_list"),
}

function add_product({img, name, price}) {
    return `
    <li class="product">
      <img src="img/products/${img}.png"  alt="картинка товару"   class="product_img">
      <p><span class="product_name">${name}</span> <span class="product_price"><b>${price} грн</b></span></p>
      <a class="el_to_remove"> <img src="img/black_cart.png" alt="картинка кошику" class="product_cart_img"></a>
    </li>
    `;
};

const goods = [
    { img: "tomato", name: "tomato", price: 15 },
    { img: "orange", name: "orange", price: 30 },
    { img: "pear", name: "pear", price: 20 },
    { img: "kiwi", name: "kiwi", price: 35 },
];

let result = ``;
for (const product of goods) {
    result += add_product(product);
}

refs.products_list.insertAdjacentHTML('beforeend', result);

const products_in_cart = [];
 
function cart_onclick(e) {
    if (e.target.classList.contains("product_cart_img")) {
        products_in_cart.push(e.target.closest("li"))
    }
}

refs.products_list.addEventListener('click', cart_onclick);

export default products_in_cart;
