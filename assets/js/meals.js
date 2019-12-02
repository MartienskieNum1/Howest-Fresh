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
let cartItems = document.querySelector('#cart .items');

let init = () => {
    console.log('page loaded!');

    meals.forEach(meal => {
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

    let mealElem = document.querySelectorAll('article img');
    mealElem.forEach(meal => {
        meal.addEventListener('click', showPopup);
    });

    popupCloseELem.addEventListener('click', hidePopup);

    cartElem.addEventListener('click', showCart);

    cartCLoseELem.addEventListener('click', hideCart);

    let orderElem = document.querySelectorAll('.order');
    orderElem.forEach(order => {
        order.addEventListener('click', addToCart);
    });

};
document.addEventListener('DOMContentLoaded', init);

let cartCounter = 0;

let showPopup = (e) => {
    let id = e.currentTarget.parentElement.parentElement.getAttribute('data-id');

    popupElem.classList.remove('hidden');

    popupContent.innerHTML = `
    <article>
        <h3>${meals[parseInt(id) - 1]['title']}</h3>
        <figure>
            <img src="images/${meals[parseInt(id) - 1]['img']}" alt="${meals[parseInt(id) - 1]['title']}" title="${meals[parseInt(id) - 1]['title']}" />
            <figcaption>
                Meal by: <span>${meals[parseInt(id) - 1]['cook']}</span>
            </figcaption>
        </figure>
        <div class="info" data-id="${meals[parseInt(id) - 1]['id']}">
            <dl>
                <dt>calories:</dt>
                <dd>${meals[parseInt(id) - 1]['calories']}</dd>
                <dt>servings:</dt>
                <dd>${meals[parseInt(id) - 1]['servings']}</dd>
                <dt>days to book in advance:</dt>
                <dd>${meals[parseInt(id) - 1]['book']}</dd>
                <dt>type:</dt>
                <dd>${meals[parseInt(id) - 1]['type']}</dd>
            </dl>
            <div class="info">
                <p>€ ${meals[parseInt(id) - 1]['price']}/pp</p>
                <a href="#" class="order">Order</a>
            </div>
        </div>
    </article>
    `;

    let orderElem = document.querySelectorAll('.order');
    orderElem.forEach(order => {
        order.addEventListener('click', addToCart);
    });
};

let hidePopup = (e) => {
    popupElem.classList.add('hidden');
    e.preventDefault();
};

let showCart = (e) => {
    cartContainer.classList.remove('hidden');

    if (cartCounter === 0) {
        cartItems.innerHTML = 'No meals have been added to your card yet'
    }

    e.preventDefault();
};

let hideCart = (e) => {
    cartContainer.classList.add('hidden');
    e.preventDefault();
};

let alreadyInsertedTable = false;
let totalPrice = 0;

let addToCart = (e) => {
    cartCounter++;
    cartCounterElem.innerHTML = cartCounter;

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

    totalPrice += parseInt(mealPrice);

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

    e.preventDefault();
};

















