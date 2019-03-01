$(document).ready(function () {

    const groceryList = [
        {
            item: 'Eggs',
            category: 'Produce',
            filtered: 'false',
            cart: 'false'
        },
        {
            item: 'Milk',
            category: 'Dairy',
            filtered: 'false',
            cart: 'false'
        },
        {
            item: 'Bread',
            category: 'Deli',
            filtered: 'false',
            cart: 'false'
        },
        {
            item: 'Brocoli',
            category: 'Produce',
            filtered: 'false',
            cart: 'false'
        },
        {
            item: 'Chicken',
            category: 'Meat',
            filtered: 'false',
            cart: 'false'
        },
        {
            item: 'Cereal',
            category: 'Dry Goods',
            filtered: 'false',
            cart: 'false'
        },
        {
            item: 'Oatmeal',
            category: 'Dry Goods',
            filtered: 'false',
            cart: 'false'
        },
        {
            item: 'Steak',
            category: 'Meat',
            filtered: 'false',
            cart: 'false'
        },
    ];

    const renderCat = function () {
        clearCat();
        for (let i = 0; i < groceryList.length; i++) {
            if (groceryList[i].filtered === 'false') {
                const itemBtn = $('<button>');
                itemBtn.addClass('btn w-100 m-2');
                itemBtn.attr('item', groceryList[i].item);
                itemBtn.attr('index', i);
                itemBtn.text(groceryList[i].item);
                $('#listCat').append(itemBtn);
            }
        }
    }

    const renderCart = function () {
        clearCart();
        for (let i = 0; i < groceryList.length; i++) {
            if (groceryList[i].cart === 'true') {
                const cartBtn = $('<button>');
                cartBtn.addClass(`btn btn-outline-success w-100 m-2`);
                cartBtn.attr('item', groceryList[i].item);
                cartBtn.attr('index', i);
                cartBtn.text(groceryList[i].item);
                $('#listCart').append(cartBtn);
            }
        }
    }

    const clearCat = function () {
        $('#listCat').empty();
    }

    const clearCart = function () {
        $('#listCart').empty();
    }

    renderCat();

    const addItemToCart = function () {
        itemIndex = $(this).attr("index");
        if (groceryList[itemIndex].cart === 'false') {
            groceryList[itemIndex].cart = 'true';
            renderCart();
        } else {
            alert(`Already in Shopping Cart`)
        }
    }

    const removeItemFromCart = function () {
        itemIndex = $(this).attr("index");
        groceryList[itemIndex].cart = 'false';
        renderCart();
    }

    const unFiltered = function () {
        for (let i = 0; i < groceryList.length; i++) {
            groceryList[i].filtered = 'false';
        }
        renderCat();
    }
    const catFilter = function () {
        for (let i = 0; i < groceryList.length; i++) {
            if (groceryList[i].category === $(this).attr("value")) {
                groceryList[i].filtered = 'true';
            }
        }
        renderCat();
    }

    const resetCart = function () {
        for (let i = 0; i < groceryList.length; i++) {
            groceryList[i].cart = 'false';
        }
        renderCart();
    }


    $('#all').on('click', unFiltered);
    $('#produce').on('click', catFilter);
    $('#meat').on('click', catFilter);
    $('#dry').on('click', catFilter);
    $('#deli').on('click', catFilter);
    $('#listCat').on('click', '.btn', addItemToCart);
    $('#listCart').on('click', '.btn', removeItemFromCart);
    $('#clearCart').on('click', resetCart);
});