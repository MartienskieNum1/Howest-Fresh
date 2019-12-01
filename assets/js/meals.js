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






























