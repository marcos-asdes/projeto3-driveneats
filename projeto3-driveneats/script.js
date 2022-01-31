let borders = "0px 0px 10px -4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 3px #32B72F";

let list_items_names = [];
let list_items_prices = [];
let selected_items = [];

let total_price = 0;

function dishSelected (item) {

    let remove_borders = document.getElementsByClassName("meal");
    for (let i=0; i<=3; i++){
        remove_borders[i].style.boxShadow = "none";
    }

    item.style.boxShadow = borders;
    
    let selected_name_item = item.getElementsByClassName("title");
    list_items_names[0] = selected_name_item[0].innerHTML;

    let selected_price_item = item.getElementsByClassName("value");
    list_items_prices[0] = Number(selected_price_item[0].innerHTML.replace(",", "."));

    selected_items[0] = true;

    if (list_items_names[0] != undefined && list_items_names[1] != undefined && list_items_names[2] != undefined) {
        closeOrder();
    }
}

function drinkSelected (item) {

    let remove_borders = document.getElementsByClassName("drink");
    for (let i=0; i<=2; i++){
        remove_borders[i].style.boxShadow = "none";
    }

    item.style.boxShadow = borders;
    
    let selected_name_item = item.getElementsByClassName("title");
    list_items_names[1] = selected_name_item[0].innerHTML;

    let selected_price_item = item.getElementsByClassName("value");
    list_items_prices[1] = Number(selected_price_item[0].innerHTML.replace(",", "."));

    selected_items[1] = true;

    if (list_items_names[0] != undefined && list_items_names[1] != undefined && list_items_names[2] != undefined) {
        closeOrder();
    }
}

function dessertSelected (item) {

    let remove_borders = document.getElementsByClassName("dessert");
    for (let i=0; i<=3; i++){
        remove_borders[i].style.boxShadow = "none";
    }

    item.style.boxShadow = borders;
    
    let selected_name_item = item.getElementsByClassName("title");
    list_items_names[2] = selected_name_item[0].innerHTML;

    let selected_price_item = item.getElementsByClassName("value");
    list_items_prices[2] = Number(selected_price_item[0].innerHTML.replace(",", "."));

    selected_items[2] = true;

    if (list_items_names[0] != undefined && list_items_names[1] != undefined && list_items_names[2] != undefined) {
        closeOrder();
    }
}

function closeOrder() {

    let button = document.querySelector("#btn");
    button.style.backgroundColor = "#32B72F";
    document.getElementById("btn").innerHTML = "Fechar pedido";
    button.style.color = "#FFFFFF";
    button.style.font = "20px Roboto";
    button.style.fontWeight = "bold";


    total_price = (list_items_prices[0] + list_items_prices[1] + list_items_prices[2]).toFixed(2);
}

function infoOrder() {

    if (orderCheck()) {

        /* document.querySelector(".background-white").style.display = "flex"; */
        document.getElementById("btn").classList.add("hidden");
        let hidden = document.querySelector(".order-confirm");
        hidden.classList.remove("hidden");
        /* document.querySelector(".top").style.background = "rgba(255, 0, 0, 0.9)"; */

        let food_name = [];
        let food_price = [];

        food_name[0] = document.querySelector(".order-name-0");
        food_name[0].innerHTML = list_items_names[0];
        food_price[0] = document.querySelector(".order-price-0");
        food_price[0].innerHTML = list_items_prices[0];

        food_name[1] = document.querySelector(".order-name-1");
        food_name[1].innerHTML = list_items_names[1];
        food_price[1] = document.querySelector(".order-price-1");
        food_price[1].innerHTML = list_items_prices[1];

        food_name[2] = document.querySelector(".order-name-2");
        food_name[2].innerHTML = list_items_names[2];
        food_price[2] = document.querySelector(".order-price-2");
        food_price[2].innerHTML = list_items_prices[2];

        let total_order_price = document.querySelector(".total-order-price");
        total_order_price.innerHTML = total_price;
    }
}

function confirmOrder() {
    
    let user_name = prompt("Por favor, informe-nos seu nome: ");
    let user_address = prompt("Para finalizarmos, informe seu endereço: ");
    let user_info = [user_name, user_address];
    sendOrder(user_info);
}

function sendOrder(user_info) {

    const message = 'Olá, gostaria de fazer o pedido:'
        + '\n - Prato: ' + list_items_names[0]
        + '\n - Bebida: ' + list_items_names[1]
        + '\n - Sobremesa: ' + list_items_names[2]
        + '\n - Total: R$: ' + total_price

        + '\n\n Nome: ' + user_info[0]
        + '\n Endereço: ' + user_info[1]

    const url = "https://wa.me/5521976702285?text=" + encodeURIComponent(message);

    window.open(url, '_blank');
}

function orderCheck() {

    if (list_items_names[0] == undefined && list_items_names[1] == undefined && list_items_names[2] == undefined) {
        return alert("Primeiramente você deve escolher seu pedido!");
    }
    if (selected_items[0] == undefined) {
        return alert("Você deve escolher seu prato!");
    }
    if (selected_items[1] == undefined) {
        return alert("Você deve escolher sua bebida!");
    }
    if (selected_items[2] == undefined) {
        return alert("Você deve escolher sua sobremesa!");
    }
    else return true;
}

function cancelOrder() {
    /* document.querySelector(".background-white").style.display = "none"; */
    document.querySelector(".order-confirm").classList.add("hidden");
    document.getElementById("btn").classList.remove("hidden");
}