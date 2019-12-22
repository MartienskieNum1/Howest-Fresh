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

let sortByElem = document.querySelector('#sortby');
let searchElem = document.querySelector('input[name="search"]');
let directionELem = document.querySelector('#direction');

let popupElem = document.querySelector('#popup');
let popupCloseELem = document.querySelector('#popup .close');
let popupContent = document.querySelector('#popup .contentwrapper');

let mealContainer = document.querySelector('.flexcontainer');

let cartElem = document.querySelector('.viewcart');
let cartContainer = document.querySelector('#cart');
let cartCLoseELem = document.querySelector('#cart .close');
let cartCounterElem = document.querySelector('.viewcart span');
let cartPrevious = document.querySelector('#previous');
let cartNoItems = document.querySelector('#noitems');
let cartCheckout = document.querySelector('#cartoverview a');
let cartOverview = document.querySelector('#cartoverview');
let personalInformation = document.querySelector('#personalinformation');
let submitPersonalInformation = document.querySelector('#personalinformation input[type="submit"]');
let confirmation = document.querySelector('#confirmation');
let confirmationPersonsName = document.querySelector('#confirmation .personname');
let confirmationPrice = document.querySelector('#confirmation .price');
let confirmationRadios = document.querySelectorAll('#personalinformation input[type="radio"]');
let confirmationPaymentMethod = document.querySelector('#confirmation .paymentmethod');

let cartItems = document.querySelector('#cart .items');
let cartItemsTableBody = document.querySelector('#cart .items tbody');
let cartItemsTableFoot = document.querySelector('#cart .items tfoot');

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

if (!localStorage.getItem('meals')) {
    localStorage.setItem('meals', JSON.stringify(meals))
}
let localStorageMeals = JSON.parse(localStorage.getItem('meals'));

let finishedOrder = localStorage.getItem('finishedOrder');
if (finishedOrder === null) {
    finishedOrder = false
}

let totalPrice = localStorage.getItem('totalPrice');
if (totalPrice === null) {
    totalPrice = 0
}

let cartItemsArray = JSON.parse(localStorage.getItem('cartItemsArray'));
if (cartItemsArray === null) {
    cartItemsArray = [];
}

let cartCounter = cartItemsArray.length;
if (cartCounter > 0) {
    cartCounterElem.innerHTML = cartCounter;
}

let indexFinder = (mealId) => {
    let place;
    for (let i = 0; i < localStorageMeals.length; i++) {
        if (localStorageMeals[i]['id'] === parseInt(mealId)) {
            place = i;
        }
    }

    return place
};

let buildCart = () => {
    cartItemsTableBody.innerHTML = '';
    cartItemsTableFoot.innerHTML = `
        <tr>
            <td></td>
            <td></td>
            <td>Total: €${totalPrice}</td>
        </tr>
        `;

    let numberOfMeal = [];
    for (let i in localStorageMeals) {
        numberOfMeal.push(0);
    }

    for (let i in JSON.parse(localStorage.getItem('cartItemsArray'))) {
        let place = indexFinder(JSON.parse(localStorage.getItem('cartItemsArray'))[i]);
        numberOfMeal[place]++;
    }

    console.log(numberOfMeal);

    for (let i in numberOfMeal) {
        if (numberOfMeal[i] > 0) {
            let mealTitle = localStorageMeals[i]['title'];
            let mealPrice = localStorageMeals[i]['price'];
            let mealId = localStorageMeals[i]['id'];

            cartItemsTableBody.innerHTML += `
        <tr>
            <td>${numberOfMeal[i]}</td>
            <td>${mealTitle}</td>
            <td>${mealPrice}</td>
            <td><a class="removemeal" data-id="${mealId}">X</a></td>
        </tr>
        `;
        }
    }
};

let cartEmptyOrNot = () => {
    if (cartCounter === 0) {
        cartNoItems.classList.remove('hidden');
        if (cartOverview.className !== 'hidden') {
            cartOverview.classList.add('hidden');
        }
    } else {
        cartOverview.classList.remove('hidden');
        if (cartNoItems.className !== 'hidden') {
            cartNoItems.classList.add('hidden');
        }
    }
};

if (localStorage.getItem('cartItemsArray')) {
    buildCart();
}

let init = () => {
    console.log('page loaded!');

    randomMealPicker();

    loadMeals();

    for (let prop in meals[0]) {
        sortByElem.innerHTML += `<option value="${prop}">${prop}</option>`;
    }

    searchElem.addEventListener('keyup', search);
    sortByElem.addEventListener('click', sort);
    directionELem.addEventListener('click', sort);

    mealCounterElem.innerHTML = localStorageMeals.length;

    mealContainer.addEventListener('click', (e) => {
        let target = e.target;

        if (target.tagName === 'IMG') {
            showPopup(e)
        } else if (target.tagName === 'A') {
            addToCart(e)
        }
    });

    popupCloseELem.addEventListener('click', hidePopup);

    cartElem.addEventListener('click', showCart);

    cartCLoseELem.addEventListener('click', hideCart);

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

let loadMeals = () => {
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
    })
};

let search = () => {
    let inputValue = searchElem.value.toLowerCase();

    document.querySelectorAll('article h3').forEach(title => {
        if (title.innerHTML.toLowerCase().indexOf(inputValue) != -1) {
            if (title.closest('article').className === 'hidden') {
                title.closest('article').classList.remove('hidden')
            }
        } else {
            title.closest('article').classList.add('hidden')
        }
    });
};

let sort = () => {
    let sortValue = sortByElem.value;
    let directionValue = directionELem.value;
    let array = [];

    localStorageMeals.forEach(meal => {
        array.push({value: meal[`${sortValue}`], id: meal['id']});
    });

    if (directionValue === 'asc') {
        array.sort((a, b) => (a.value > b.value) ? 1 : -1);
    } else if (directionValue === 'desc') {
        array.sort((a, b) => (a.value < b.value) ? 1 : -1);
    }

    mealContainer.innerHTML = '';
    array.forEach(meal => {
        let place = indexFinder(meal['id']);
        mealContainer.innerHTML += `
        <article data-id="${meal['id']}">
            <h3>${localStorageMeals[place]['title']}</h3>
            <figure>
                <img src="images/${localStorageMeals[place]['img']}" alt="${localStorageMeals[place]['title']}" title="${localStorageMeals[place]['title']}">
                <figcaption>
                    Meal by: <span>${localStorageMeals[place]['cook']}</span>
                </figcaption>
            </figure>
            <div class="info">
                <p>€ <span>${localStorageMeals[place]['price']}</span>/pp</p>
                <a href="#" class="order">Order</a>
            </div>
        </article>
        `;
    });
};

let showPopup = (e) => {
    let mealId = e.target.closest('article').getAttribute('data-id');
    let place = indexFinder(mealId);


    popupElem.classList.remove('hidden');

    popupContent.innerHTML = `
    <article data-id="${localStorageMeals[place]['id']}">
        <h3>${localStorageMeals[place]['title']}</h3>
        <figure>
            <img src="images/${localStorageMeals[place]['img']}" alt="${localStorageMeals[place]['title']}" title="${localStorageMeals[place]['title']}" />
            <figcaption>
                Meal by: <span>${localStorageMeals[place]['cook']}</span>
            </figcaption>
        </figure>
        <div class="info">
            <dl>
                <dt>calories:</dt>
                <dd>${localStorageMeals[place]['calories']}</dd>
                <dt>servings:</dt>
                <dd>${localStorageMeals[place]['servings']}</dd>
                <dt>days to book in advance:</dt>
                <dd>${localStorageMeals[place]['book']}</dd>
                <dt>type:</dt>
                <dd>${localStorageMeals[place]['type']}</dd>
                <dt>Amount available:</dt>
                <dd>${localStorageMeals[place]['quantity']}</dd>
            </dl>
            <div class="info">
                <p>€ ${localStorageMeals[place]['price']}/pp</p>
                <a href="#" class="order">Order</a>
                <a href="#" class="change">Change</a>
                <a href="#" class="remove">Remove</a>
            </div>
        </div>
    </article>
    `;

    popupElem.addEventListener('click', (e) => {
        let target = e.target;

        if (target.className === 'order') {
            addToCart(e)
        } else if (target.className === 'change') {
            showChangeForm(e)
        } else if (target.className === 'remove') {
            remove(e)
        }
    });
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
    e.preventDefault();

    popupContent.classList.add('hidden');
    changeForm.classList.remove('hidden');
    let mealId = e.target.closest('article').getAttribute('data-id');
    let place = indexFinder(mealId);

    titleElem.value = localStorageMeals[place]['title'];
    bookELem.value = localStorageMeals[place]['book'];
    caloriesELem.value = localStorageMeals[place]['calories'];
    servingsELem.value = localStorageMeals[place]['servings'];
    priceELem.value = localStorageMeals[place]['price'];
    document.querySelector(`input[value="${localStorageMeals[place]['type']}"]`).checked = true;
    cookELem.value = localStorageMeals[place]['cook'];
    availableELem.value = localStorageMeals[place]['quantity'];

    localStorage.setItem('meals', JSON.stringify(localStorageMeals));

    submitElem.addEventListener('click', (e) => {
        e.preventDefault();

        let checkedRadio;

        typeElement.forEach(radio => {
            if (radio.checked) {
                checkedRadio = radio
            }
        });

        localStorageMeals[place] =
            {id: parseInt(mealId),
            title: titleElem.value,
            img: 'dummy.jpg',
            book: bookELem.value,
            calories: caloriesELem.value,
            servings: servingsELem.value,
            type: checkedRadio.value,
            price: priceELem.value,
            cook: cookELem.value,
            quantity: availableELem.value};

        localStorage.setItem('meals', JSON.stringify(localStorageMeals));

        location.reload();

    });
};

let remove = (e) => {
    e.preventDefault();

    let mealId = e.target.closest('article').getAttribute('data-id');
    let place = indexFinder(mealId);

    let i = 0;
    while (i < cartItemsArray.length) {
        if (parseInt(cartItemsArray[i]) === parseInt(mealId)) {
            cartItemsArray.splice(i, 1);
            totalPrice -= localStorageMeals[place]['price'];
        } else {
            i++;
        }
    }
    localStorage.setItem('cartItemsArray', JSON.stringify(cartItemsArray));
    localStorage.setItem('totalPrice', totalPrice);

    for (let i = 0; i < localStorageMeals.length; i++) {
        if (parseInt(localStorageMeals[i]['id']) === parseInt(mealId)) {
            localStorageMeals.splice(i, 1);
        }
    }
    localStorage.setItem('meals', JSON.stringify(localStorageMeals));

    location.reload();
};

let showCart = (e) => {
    e.preventDefault();

    cartContainer.classList.remove('hidden');

    if (JSON.parse(localStorage.getItem('finishedOrder'))) {
        cartPrevious.classList.remove('hidden');
        if (cartOverview.className !== 'hidden') {
            cartOverview.classList.add('hidden');
        }
        if (cartNoItems.className !== 'hidden') {
            cartNoItems.classList.add('hidden');
        }

        document.querySelector('.yes').addEventListener('click', () => {
            cartPrevious.classList.add('hidden');
            finishedOrder = false;
            localStorage.setItem('finishedOrder', finishedOrder);
            console.log(JSON.parse(localStorage.getItem('previousCart')));
            JSON.parse(localStorage.getItem('previousCart')).forEach(id => {
                cartItemsArray.push(id)
            });
            console.log(cartItemsArray);
            localStorage.setItem('cartItemsArray', JSON.stringify(cartItemsArray));
            totalPrice += parseInt(localStorage.getItem('previousTotalPrice'));
            localStorage.setItem('totalPrice', totalPrice);
            buildCart();
            cartCounter = cartItemsArray.length;
            cartCounterElem.innerHTML = cartCounter;
            console.log(cartCounter);
            cartEmptyOrNot();
        });

        document.querySelector('.no').addEventListener('click', () => {
            cartPrevious.classList.add('hidden');
            finishedOrder = false;
            localStorage.setItem('finishedOrder', finishedOrder);
            cartEmptyOrNot();
        });
    } else {
        cartEmptyOrNot()
    }

    cartItems.addEventListener('click', (e) => {
        let target = e.target;

        if (target.className === 'removemeal') {
            removeFromCart(e)
        }
    });

};

let removeFromCart = (e) => {
    e.preventDefault();

    let mealId = e.target.getAttribute('data-id');
    let place = indexFinder(mealId);
    let i = 0;
    while (i < cartItemsArray.length) {
        if (parseInt(cartItemsArray[i]) === parseInt(mealId)) {
            cartItemsArray.splice(i, 1);
            break;
        } else {
            i++;
        }
    }
    localStorage.setItem('cartItemsArray', JSON.stringify(cartItemsArray));

    totalPrice -= parseInt(localStorageMeals[place]['price']);
    localStorage.setItem('totalPrice', totalPrice);

    localStorageMeals[place]['quantity']++;
    localStorage.setItem('meals', JSON.stringify(localStorageMeals));
    localStorageMeals = JSON.parse(localStorage.getItem('meals'));

    cartCounter = cartItemsArray.length;
    if (cartCounter === 0) {
        cartCounterElem.innerHTML = '';
    } else {
        cartCounterElem.innerHTML = cartCounter;
    }

    cartEmptyOrNot();

    buildCart();
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

let addToCart = (e) => {
    e.preventDefault();

    let mealId = e.target.closest('article').getAttribute('data-id');
    let place = indexFinder(mealId);
    let mealPrice = localStorageMeals[place]['price'];

    let mealQuantity = localStorageMeals[place]['quantity'];

    if (mealQuantity > 0) {
        localStorageMeals[place]['quantity']--;
        localStorage.setItem('meals', JSON.stringify(localStorageMeals));
        localStorageMeals = JSON.parse(localStorage.getItem('meals'));

        totalPrice = parseInt(totalPrice);
        totalPrice += parseInt(mealPrice);
        localStorage.setItem('totalPrice', totalPrice);

        cartItemsArray.push(mealId);
        localStorage.setItem('cartItemsArray', JSON.stringify(cartItemsArray));

        cartCounter = cartItemsArray.length;
        cartCounterElem.innerHTML = cartCounter;

        buildCart();

        cartEmptyOrNot();
    }
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

    localStorage.setItem('previousCart', localStorage.getItem('cartItemsArray'));
    cartItemsArray = [];
    localStorage.setItem('cartItemsArray', JSON.stringify(cartItemsArray));

    cartItemsTableBody.innerHTML = '';

    localStorage.setItem('previousTotalPrice', localStorage.getItem('totalPrice'));
    totalPrice = 0;
    localStorage.setItem('totalPrice', totalPrice);

    cartCounter = cartItemsArray.length;
    cartCounterElem.innerHTML = '';

    finishedOrder = true;
    localStorage.setItem('finishedOrder', finishedOrder);
};

