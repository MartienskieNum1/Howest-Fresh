"use strict";

let cartElem = document.querySelector('.viewcart');
let cartContainer = document.querySelector('#cart');
let cartCLoseELem = document.querySelector('#cart .close');
let cartCounterElem = document.querySelector('.viewcart span');
let cartItems = document.querySelector('#cartoverview .items');
let cartCheckout = document.querySelector('#cartoverview a');
let cartOverview = document.querySelector('#cartoverview');
let personalInformation = document.querySelector('#personalinformation');
let submitPersonalInformation = document.querySelector('#personalinformation input[type="submit"]');
let confirmation = document.querySelector('#confirmation');
let confirmationPersonsName = document.querySelector('#confirmation .personname');
let confirmationPrice = document.querySelector('#confirmation .price');
let confirmationRadios = document.querySelectorAll('#personalinformation input[type="radio"]');
let confirmationPaymentMethod = document.querySelector('#confirmation .paymentmethod');

let init = () => {
    console.log('page loaded!');

    cartElem.addEventListener('click', showCart);

    cartCLoseELem.addEventListener('click', hideCart);

    let orderElem = document.querySelectorAll('.info .order');
    orderElem.forEach(order => {
        order.addEventListener('click', addToCart);
    });

    cartCheckout.addEventListener('click', showCheckout);

    submitPersonalInformation.addEventListener('click', confirmOrder);

};
document.addEventListener('DOMContentLoaded', init);

let showCart = (e) => {
    e.preventDefault();

    cartContainer.classList.remove('hidden');

    if (cartCounter === 0) {
        cartItems.innerHTML = 'No meals have been added to your card yet'
    }
};

let hideCart = (e) => {
    e.preventDefault();
    cartContainer.classList.add('hidden');
};

let cartCounter = localStorage.getItem('cartCounter');
if (cartCounter === null) {
    cartCounter = 0
}
cartCounterElem.innerHTML = localStorage.getItem('cartCounter');

let alreadyInsertedTable = false;

if (localStorage.key(2)) {
    cartItems.innerHTML = localStorage.getItem('mealsInCart');
    alreadyInsertedTable = true
}

let totalPrice = localStorage.getItem('totalPrice');
if (totalPrice === null) {
    totalPrice = 0
}

let addToCart = (e) => {
    e.preventDefault();

    cartCounter++;
    localStorage.setItem('cartCounter', cartCounter);
    cartCounterElem.innerHTML = localStorage.getItem('cartCounter');

    if (alreadyInsertedTable === false) {
        cartItems.innerHTML = `
                    <table>
                <thead>
                    <tr>
                        <th>Meal</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
                <tfoot>
                
                </tfoot>
            </table>
        `;
        alreadyInsertedTable = true;
    }

    let cartItemsTableBody = document.querySelector('#cart .items tbody');
    let cartItemsTableFoot = document.querySelector('#cart .items tfoot');
    let mealId = e.currentTarget.parentElement.parentElement.getAttribute('data-id');
    let mealTitle = meals[parseInt(mealId) - 1]['title'];
    let mealPrice = meals[parseInt(mealId) - 1]['price'];

    totalPrice = parseInt(totalPrice);
    totalPrice += parseInt(mealPrice);
    localStorage.setItem('totalPrice', totalPrice);

    cartItemsTableBody.innerHTML += `
    <tr>
        <td>${mealTitle}</td>
        <td>${mealPrice}</td>
    </tr>
    `;

    cartItemsTableFoot.innerHTML = `
    <tr>
        <td></td>
        <td>Total: €${totalPrice}</td>
    </tr>
    `;

    localStorage.setItem('mealsInCart', cartItems.innerHTML);
};

let showCheckout = (e) => {
    e.preventDefault();
    cartOverview.classList.add('hidden');
    personalInformation.classList.remove('hidden');
};

let confirmOrder = (e) => {
    e.preventDefault();
    let name = document.querySelector('#ordername').value;

    personalInformation.classList.add('hidden');
    confirmation.classList.remove('hidden');

    confirmationRadios.forEach(radio => {
        if (radio.checked) {
            confirmationPaymentMethod.innerHTML = radio.value.replace('_', ' ');
        }
    });

    confirmationPersonsName.innerHTML = name;
    confirmationPrice.innerHTML = `€${totalPrice}`;
};
