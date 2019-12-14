"use strict";

const meals = [
    {
        id: 1,
        title: 'Strawberry Salad with Poppy Seed Dressing',
        img: 'Strawberry-Salad-with-Poppy-Seed-Dressing.jpg',
        book: 1,
        calories: 298,
        servings: 3,
        type: 'lunch',
        price: 15,
        cook: 'Jenny Jefferson',
        quantity: 10
    },
    {
        id: 2,
        title: 'Cashew Turkey Salad Sandwiches',
        img: 'turkey-sandwich.jpg',
        book: 2,
        calories: 198,
        servings: 2,
        type: 'lunch',
        price: 9,
        cook: 'Jenny Jefferson',
        quantity: 10
    },
    {
        id: 3,
        title: 'Satisfying Beef Stew',
        img: 'beef-stew.jpg',
        book: 0,
        calories: 100,
        servings: 5,
        type: 'dinner',
        price: 12,
        cook: 'Jenny Jefferson',
        quantity: 10
    },
    {
        id: 4,
        title: 'Roasted Butternut Linguine',
        img: 'Roasted-Butternut-Linguine.jpg',
        book: 2,
        calories: 398,
        servings: 2,
        type: 'dinner',
        price: 23,
        cook: 'James Wise',
        quantity: 10
    },
    {
        id: 5,
        title: 'Salmon with Brown Sugar Glaze',
        img: 'Salmon-with-Brown-Sugar-Glaze.jpg',
        book: 1,
        calories: 296,
        servings: 2,
        type: 'lunch',
        price: 35,
        cook: 'Grant Piquet',
        quantity: 10
    },
    {
        id: 6,
        title: 'Grilled Basil Chicken and Tomatoes',
        img: 'Grilled-Basil-Chicken-and-Tomatoes.jpg',
        book: 1,
        calories: 103,
        servings: 1,
        type: 'lunch',
        price: 7,
        cook: 'Jenny Jefferson',
        quantity: 10
    },
    {
        id: 7,
        title: 'Parsley-Crusted Cod',
        img: 'Parsley-Crusted-Cod.jpg',
        book: 2,
        calories: 278,
        servings: 2,
        type: 'dinner',
        price: 11,
        cook: 'James Wise',
        quantity: 10
    },
    {
        id: 8,
        title: 'Mexican Fiesta Steak Stir-Fry',
        img: 'Mexican-Fiesta-Steak-Stir-Fry.jpg',
        book: 0,
        calories: 145,
        servings: 1,
        type: 'dinner',
        price: 13,
        cook: 'James Wise',
        quantity: 10
    },
    {
        id: 9,
        title: 'Parmesan Chicken Couscous',
        img: 'Parmesan-Chicken-Couscous.jpg',
        book: 3,
        calories: 398,
        servings: 4,
        type: 'dinner',
        price: 22,
        cook: 'Grant Piquet',
        quantity: 10
    },
    {
        id: 10,
        title: 'Roast Pork with Apples & Onions',
        img: 'Roast-Pork-with-Apples-Onions.jpg',
        book: 1,
        calories: 258,
        servings: 3,
        type: 'lunch',
        price: 20,
        cook: 'James Wise',
        quantity: 10
    },
    {
        id: 11,
        title: 'Mandarin Pork Stir-Fry',
        img: 'pork-stirfry.jpg',
        book: 0,
        calories: 234,
        servings: 2,
        type: 'dinner',
        price: 11,
        cook: 'Jenny Jefferson',
        quantity: 10
    },
    {
        id: 12,
        title: 'Asian Pork Medallions',
        img: 'pork-medallian.jpg',
        book: 1,
        calories: 405,
        servings: 3,
        type: 'dinner',
        price: 45,
        cook: 'Jenny Jefferson',
        quantity: 10
    },
    {
        id: 13,
        title: 'Italian Sausage-Stuffed Zucchini',
        img: 'Italian-Sausage-Stuffed-Zucchini.jpg',
        book: 0,
        calories: 178,
        servings: 2,
        type: 'lunch',
        price: 5,
        cook: 'Grant Piquet',
        quantity: 10
    },
    {
        id: 14,
        title: 'Golden Summer Peach Gazpacho',
        img: 'gazpacho.jpg',
        book: 4,
        calories: 300,
        servings: 1,
        type: 'dinner',
        price: 17,
        cook: 'James Wise',
        quantity: 10
    },
    {
        id: 15,
        title: 'Chicken Florentine Meatballs',
        img: 'Chicken-Florentine-Meatballs.jpg',
        book: 1,
        calories: 145,
        servings: 3,
        type: 'lunch',
        price: 15,
        cook: 'Jenny Jefferson',
        quantity: 10
    },
    {
        id: 16,
        title: 'Rustic Italian Tortellini Soup',
        img: 'Rustic-Italian-Tortellini-Soup.jpg',
        book: 0,
        calories: 150,
        servings: 2,
        type: 'lunch',
        price: 20,
        cook: 'Grant Piquet',
        quantity: 10
    },
    {
        id: 17,
        title: 'Barbecue Pork Tacos with Apple Slaw',
        img: 'tacos.jpg',
        book: 1,
        calories: 238,
        servings: 3,
        type: 'dinner',
        price: 29,
        cook: 'James Wise',
        quantity: 10
    },
    {
        id: 18,
        title: 'Caprese Chicken',
        img: 'Caprese-Chicken.jpg',
        book: 1,
        calories: 198,
        servings: 4,
        type: 'lunch',
        price: 25,
        cook: 'Jenny Jefferson',
        quantity: 10
    },
    {
        id: 19,
        title: 'Chicken Thighs with Shallots & Spinach',
        img: 'Chicken-Thighs-with-Shallots-Spinach.jpg',
        book: 1,
        calories: 398,
        servings: 2,
        type: 'lunch',
        price: 16,
        cook: 'James Wise',
        quantity: 10
    },
    {
        id: 20,
        title: 'Buttery Grilled Shrimp',
        img: 'Buttery-Grilled-Shrimp.jpg',
        book: 1,
        calories: 263,
        servings: 2,
        type: 'dinner',
        price: 12,
        cook: 'Grant Piquet',
        quantity: 10
    },
    {
        id: 21,
        title: 'Spicy Lemon Chicken Kabobs',
        img: 'kebab.jpg',
        book: 3,
        calories: 153,
        servings: 3,
        type: 'lunch',
        price: 8,
        cook: 'Grant Piquet',
        quantity: 10
    },
    {
        id: 22,
        title: 'Spinach Quesadillas',
        img: 'Spinach-Quesadillas.jpg',
        book: 2,
        calories: 395,
        servings: 3,
        type: 'dinner',
        price: 10,
        cook: 'James Wise',
        quantity: 10
    }
];


let popupElem = document.querySelector('#popup');
let popupCloseELem = document.querySelector('#popup .close');
let popupContent = document.querySelector('#popup .contentwrapper');
let mealContainer = document.querySelector('.flexcontainer');
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
let mealCounterElem = document.querySelector('aside span');
let mealOfTheDay = document.querySelector('#mealoftheday');
let changeForm = document.querySelector('#popup .changeform');

let submitElem = document.querySelector('.changeform input[type="submit"]');
let titleElem = document.querySelector('.changeform input[name="title"]');
let bookELem = document.querySelector('.changeform input[name="book"]');
let caloriesELem = document.querySelector('.changeform input[name="calories"]');
let servingsELem = document.querySelector('.changeform input[name="servings"]');
let priceELem = document.querySelector('.changeform input[name="price"]');
let typeElement = document.querySelectorAll('.changeform input[name="type"]');
let cookELem = document.querySelector('.changeform input[name="cook"]');
let availableELem = document.querySelector('.changeform input[name="available"]');


if (!localStorage.key(0)) {
    localStorage.setItem('meals', JSON.stringify(meals))
}
let localStorageMeals = JSON.parse(localStorage.getItem('meals'));

let init = () => {
    console.log('page loaded!');

    randomMealPicker();

    localStorageMeals.forEach(meal => {
        mealContainer.innerHTML += `
        <article data-id="${meal['id']}">
            <h3>${meal['title']}</h3>
            <figure>
                <img src="images/${meal['img']}" alt="${meal['title']}" title="${meal['title']}">
                <figcaption>
                    Meal by: <span>${meal['cook']}</span>
                </figcaption>
            </figure>
            <div class="info">
                <p>€ <span>${meal['price']}</span>/pp</p>
                <a href="#" class="order">Order</a>
            </div>
        </article>
        `;
    });

    mealCounterElem.innerHTML = localStorageMeals.length;

    let mealElem = document.querySelectorAll('article img');
    mealElem.forEach(meal => {
        meal.addEventListener('click', showPopup);
    });

    popupCloseELem.addEventListener('click', hidePopup);

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

let randomMealPicker = () => {
    let randMeal = Math.floor(Math.random() * localStorageMeals.length);
    mealOfTheDay.innerHTML = `
    <h2>
        Meal of the day
    </h2>
    <img src="images/${localStorageMeals[randMeal]["img"]}" alt="${localStorageMeals[randMeal]["title"]}" title="${localStorageMeals[randMeal]["title"]}">
    <div>
        <p><span>Each day we select a different meal for you to enjoy. This should keep you fresh and motivated to let go of those fatty ready meals and enjoy life!</span></p>
        <p><span>Today's special pick is</span><strong>${localStorageMeals[randMeal]["title"]}</strong></p>
    </div>

    `;
};

let showPopup = (e) => {
    let id = e.currentTarget.parentElement.parentElement.getAttribute('data-id');

    popupElem.classList.remove('hidden');

    popupContent.innerHTML = `
    <article data-id="${localStorageMeals[parseInt(id) - 1]['id']}">
        <h3>${localStorageMeals[parseInt(id) - 1]['title']}</h3>
        <figure>
            <img src="images/${localStorageMeals[parseInt(id) - 1]['img']}" alt="${localStorageMeals[parseInt(id) - 1]['title']}" title="${localStorageMeals[parseInt(id) - 1]['title']}" />
            <figcaption>
                Meal by: <span>${localStorageMeals[parseInt(id) - 1]['cook']}</span>
            </figcaption>
        </figure>
        <div class="info">
            <dl>
                <dt>calories:</dt>
                <dd>${localStorageMeals[parseInt(id) - 1]['calories']}</dd>
                <dt>servings:</dt>
                <dd>${localStorageMeals[parseInt(id) - 1]['servings']}</dd>
                <dt>days to book in advance:</dt>
                <dd>${localStorageMeals[parseInt(id) - 1]['book']}</dd>
                <dt>type:</dt>
                <dd>${localStorageMeals[parseInt(id) - 1]['type']}</dd>
                <dt>Amount available:</dt>
                <dd>${localStorageMeals[parseInt(id) - 1]['quantity']}</dd>
            </dl>
            <div class="info">
                <p>€ ${localStorageMeals[parseInt(id) - 1]['price']}/pp</p>
                <a href="#" class="order">Order</a>
                <a href="#" class="change">Change</a>
            </div>
        </div>
    </article>
    `;

    let orderElem = document.querySelectorAll('.order');
    orderElem.forEach(order => {
        order.addEventListener('click', addToCart);
    });

    let changeElem = document.querySelector('.change');
    changeElem.addEventListener('click', showChangeForm);
};

let hidePopup = (e) => {
    e.preventDefault();

    if (changeForm.className !== 'changeform hidden') {
        changeForm.classList.add('hidden')
    }

    popupContent.classList.remove('hidden');

    popupElem.classList.add('hidden');
};

let showChangeForm = (e) => {
    popupContent.classList.add('hidden');
    changeForm.classList.remove('hidden');
    let mealId = e.target.closest('article').getAttribute('data-id');

    titleElem.value = localStorageMeals[parseInt(mealId) - 1]['title'];
    bookELem.value = localStorageMeals[parseInt(mealId) - 1]['book'];
    caloriesELem.value = localStorageMeals[parseInt(mealId) - 1]['calories'];
    servingsELem.value = localStorageMeals[parseInt(mealId) - 1]['servings'];
    priceELem.value = localStorageMeals[parseInt(mealId) - 1]['price'];
    document.querySelector(`input[value="${localStorageMeals[parseInt(mealId) - 1]['type']}"]`).checked = true;
    cookELem.value = localStorageMeals[parseInt(mealId) - 1]['cook'];
    availableELem.value = localStorageMeals[parseInt(mealId) - 1]['quantity'];

    e.preventDefault();
};

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

    cartOverview.classList.remove('hidden');

    if (personalInformation.className !== 'hidden') {
        personalInformation.classList.add('hidden')
    }

    if (confirmation.className !== 'hidden') {
        confirmation.classList.add('hidden')
    }
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
    let mealId = e.currentTarget.closest('article').getAttribute('data-id');
    let mealTitle = localStorageMeals[parseInt(mealId) - 1]['title'];
    let mealPrice = localStorageMeals[parseInt(mealId) - 1]['price'];

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
            if (radio.value === 'card') {
                confirmationPaymentMethod.innerHTML = `by card`;
            } else if (radio.value === 'bitcoin') {
                confirmationPaymentMethod.innerHTML = `with bitcoin`;
            } else if (radio.value === 'gold_bars') {
                confirmationPaymentMethod.innerHTML = `in gold bars`;
            } else if (radio.value === 'in_kind') {
                confirmationPaymentMethod.innerHTML = `in kind`;
            }
        }
    });

    confirmationPersonsName.innerHTML = name;
    confirmationPrice.innerHTML = `€${totalPrice}`;
};









