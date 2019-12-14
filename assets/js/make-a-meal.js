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

let localStorageMeals = JSON.parse(localStorage.getItem('meals'));
let amountMeals = localStorageMeals.length;
let submitElem = document.querySelector('input[type="submit"]');
let titleElem = document.querySelector('input[name="title"]');
let bookELem = document.querySelector('input[name="book"]');
let caloriesELem = document.querySelector('input[name="calories"]');
let servingsELem = document.querySelector('input[name="servings"]');
let priceELem = document.querySelector('input[name="price"]');
let typeElement = document.querySelectorAll('input[name="type"]');
let cookELem = document.querySelector('input[name="cook"]');
let availableELem = document.querySelector('input[name="available"]');


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

    submitElem.addEventListener('click', addMeal);
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

let addMeal = (e) => {
    e.preventDefault();
    let checkedRadio;

    typeElement.forEach(radio => {
        if (radio.checked) {
            checkedRadio = radio
        }
    });

    localStorageMeals.push(
        {id: amountMeals + 1,
        title: titleElem.value,
        img: 'dummy.jpg',
        book: bookELem.value,
        calories: caloriesELem.value,
        servings: servingsELem.value,
        type: checkedRadio.value,
        price: priceELem.value,
        cook: cookELem.value,
        quantity: amountMeals.value});

    localStorage.setItem('meals', JSON.stringify(localStorageMeals));
};
