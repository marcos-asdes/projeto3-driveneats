let borders = '0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 3px #32B72F';

let list_items_names = [];
let list_items_prices = [];
let selected_items = [];

let total_price = 0;

function dishSelected (item) {

    let remove_borders = document.getElementsByClassName('meal');
    for (let i=0; i<=3; i++){
        remove_borders[i].style.boxShadow = 'none';
    }

    item.style.boxShadow = borders;
    
    let selected_name_item = item.getElementsByClassName('title');
    list_items_names[0] = selected_name_item[0].innerHTML;

    let selected_price_item = item.getElementsByClassName('value');
    list_items_prices[0] = Number(selected_price_item[0].innerHTML.replace(',', '.'));

    selected_items[0] = true;

    if (list_items_names[0] != undefined && list_items_names[1] != undefined && list_items_names[2] != undefined) {
        closeOrder();
    }
}

function drinkSelected (item) {

    let remove_borders = document.getElementsByClassName('drink');
    for (let i=0; i<=2; i++){
        remove_borders[i].style.boxShadow = 'none';
    }

    item.style.boxShadow = borders;
    
    let selected_name_item = item.getElementsByClassName('title');
    list_items_names[1] = selected_name_item[0].innerHTML;

    let selected_price_item = item.getElementsByClassName('value');
    list_items_prices[1] = Number(selected_price_item[0].innerHTML.replace(',', '.'));

    selected_items[1] = true;

    if (list_items_names[0] != undefined && list_items_names[1] != undefined && list_items_names[2] != undefined) {
        closeOrder();
    }
}

function dessertSelected (item) {

    let remove_borders = document.getElementsByClassName('dessert');
    for (let i=0; i<=3; i++){
        remove_borders[i].style.boxShadow = 'none';
    }

    item.style.boxShadow = borders;
    
    let selected_name_item = item.getElementsByClassName('title');
    list_items_names[2] = selected_name_item[0].innerHTML;

    let selected_price_item = item.getElementsByClassName('value');
    list_items_prices[2] = Number(selected_price_item[0].innerHTML.replace(',', '.'));

    selected_items[2] = true;

    if (list_items_names[0] != undefined && list_items_names[1] != undefined && list_items_names[2] != undefined) {
        closeOrder();
    }
}

function closeOrder() {

    let button = document.querySelector('#btn')
    button.style.backgroundColor = '#32B72F';
    button.innerHTML = 'Fechar pedido';

    total_price = (list_items_prices[0] + list_items_prices[1] + list_items_prices[2])/* .toFixed(2) */;
}