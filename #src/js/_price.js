let offers = [{
    "name":"TRY",
    "price": "<div class=\"money\">Free</div>\n" +
        "                        <div class=\"period\">per month</div>",

    "descr": "<ul>\n" +
        "    <li>Full Branding</li>\n" +
        "    <li>Project Management</li>\n" +
        "</ul>"
},{
    "name":"STANDART",
    "price": "<div class=\"money\">$60</div>\n" +
        "                        <div class=\"period\">per month</div>",

    "descr": "<ul>\n" +
        "    <li>Full Branding</li>\n" +
        "    <li>Project Management</li>\n" +
        "    <li>Free Domain</li>\n" +
        "    <li>Free Hosting</li>\n" +
        "</ul>"
},{
    "name":"PREMIUM",
    "price": "<div class=\"money\">$160</div>\n" +
        "                        <div class=\"period\">per month</div>",
    "period":"per month",
    "descr": "<ul>\n" +
        "    <li>Full Branding</li>\n" +
        "    <li>Project Management</li>\n" +
        "    <li>Unlimited Revisions</li>\n" +
        "    <li>24/7 h Service</li>\n" +
        "    <li>Free Domain</li>\n" +
        "    <li>Free Hosting</li>\n" +
        "</ul>"
}];

let price_items = document.querySelectorAll(".price__item");
let money_side = document.querySelectorAll(".item__price");
let item_titles = document.querySelectorAll(".item__title");
let price_bg = document.querySelector(".price");

for (let i = 0; i < price_items.length; i++){
    price_items[i].addEventListener('mouseover', function over(){
        price_items[i].classList.add("price__item-hover");
        money_side[i].innerHTML = offers[i].descr;
        item_titles[i].innerHTML = "<a class='item__link' href='#'>Let's start</a>"

    },true);
    price_bg.addEventListener('mouseover', function out(){
        price_items[i].classList.remove("price__item-hover");
        money_side[i].innerHTML = offers[i].price;
        item_titles[i].innerHTML = offers[i].name;
    },true);
}

// <ul>
//     <li>Full Branding</li>
//     <li>Project Management</li>
//     <li>Unlimited Revisions</li>
//     <li>24/7 h Service</li>
//     <li>Free Domain</li>
//     <li>Free Hosting</li>
// </ul>





