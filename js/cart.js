import {logined, name, login_module_logic} from "./login_module.js";
import products_in_cart from "./products_list.js";

console.log(products_in_cart);

console.log(logined, name);

const cart_container = `
<div class="cart_wrapper">
        <div class="cart_module">
            <div class="top">
            <h2>Це кошик, тут є ваші покупки, що ви додали в корзину: </h2> <div class="img-wrapper" >
            <img src="https://clipground.com/images/black-x-png-5.png" alt="невеликий крестик" class="cart-card-img-cross" style="width: 50px"></div></div>
            <ul class="cart_items">
                <li class="cart_card">
                    В самому низу сайту є список товарів. Тикайте на зображення кошику і повертайтесь сюди)))
                </li>
            </ul>
        </div>
    </div>
`;

const cartBtn = document.querySelector(".cartBtn");
cartBtn.addEventListener('click', function(event) {

if (logined) {
    event.preventDefault();
    document.body.insertAdjacentHTML('beforebegin', cart_container);
    
    const refs = {
        "wrapper": document.querySelector("wrapper"),
        "cart_items": document.querySelector(".cart_items"),
        cart_wrapper: document.querySelector(".cart_wrapper"),
        cart_close_btn: document.querySelector(".cart-card-img-cross"),
    }
    
    let total = 0;

    function add_price_to_total (el) {
        total += parseInt(el.querySelector("b").textContent);
    }

    refs.wrapper.classList.add('blur');

        products_in_cart.forEach(el => {
            const a_to_remove = el.querySelector(".el_to_remove");
            if (a_to_remove !== null) {
                a_to_remove.remove();

                add_price_to_total(el);
                el.insertAdjacentHTML("afterend", `<img src="https://png.pngtree.com/png-vector/20230527/ourmid/pngtree-red-cross-paint-clipart-transparent-background-vector-png-image_7110618.png" style="width:30px;">`)
            }
            refs.cart_items.insertAdjacentElement("afterend", el);
            
        });
        refs.cart_items.insertAdjacentHTML("afterend", `<li>Загальна ціна всіх товарів - ${total}</li>`)
    
        console.log(total);

    
    refs.cart_close_btn.addEventListener('click', function() {
        refs.cart_wrapper.remove();
        refs.wrapper.classList.remove("blur");
    });
    
} else {
    login_module_logic(event);
}

});

