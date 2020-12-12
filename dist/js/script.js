//hover menu elements

let menu_items = document.getElementsByClassName('menu-body__links');
for (let i = 0; i < menu_items.length; i++){
    menu_items[i].addEventListener('mouseover', function over(){
        menu_items[i].classList.add("menu-body__links_active");
    },true);
    menu_items[i].addEventListener('mouseout', function out(){
        menu_items[i].classList.remove("menu-body__links_active");
    },true);
}

//hover menu elements------------------

// scroll to anchors

let header_menu_elements = document.querySelectorAll('.menu-body__menu-elem');
let popUpNav = document.querySelectorAll('.popUp-body__menu-elem');

function scrollToAnchors (params){
    for (let i=0;i<params.length;i++){
        params[i].addEventListener("click", function (){
            let scroll_point_SERVICE = document.getElementById('service-block').getBoundingClientRect().y,
                scroll_point_PORTFOLIO = document.getElementById('portfolio').getBoundingClientRect().y,
                scroll_point_TEAM = document.getElementById('team').getBoundingClientRect().y,
                scroll_point_CONTACT = document.getElementById('contacts').getBoundingClientRect().y;
            let scroll_points = [scroll_point_SERVICE,scroll_point_PORTFOLIO,scroll_point_TEAM,scroll_point_CONTACT];
            popUp.classList.remove('popUpNav-active');

            hamburger_elems[0].classList.remove("active");
            hamburger_elems[1].classList.remove("active");
            hamburger_elems[2].classList.remove("active");
            window.scroll({
                top:scroll_points[i],
                behavior:"smooth"
            });
        },true);
    }
}

scrollToAnchors(header_menu_elements);
scrollToAnchors(popUpNav);
// scroll to anchors------------------


//open/close nav-bar





// Hamburger Menu Spin
let hamburger = document.querySelector(".burger-elements-wrapper");
let hamburger_elems = document.querySelectorAll(".burger-elements-wrapper span");

console.log(hamburger);

// function openNav() {
//     for (let i = 0; i < hamburger.length;i++){
//         hamburger_elems[i].classList.add("active");
//     }
//     // document.getElementById("popUpNav").style.display = "block";
// }
// function closeNav() {
//     for (let i = 0; i < hamburger.length;i++){
//         hamburger_elems[i].classList.remove("active");
//     }
//     // document.getElementById("popUpNav").style.display = "none";
// }

let popUp = document.querySelector('.popUpNav');

hamburger.addEventListener('click', function (){
    for (let i = 0; i < hamburger_elems.length;i++){
        if (hamburger_elems[i].classList.contains("active")){
            hamburger_elems[i].classList.remove("active");
            popUp.classList.remove('popUpNav-active')
        }else{
            hamburger_elems[i].classList.add("active");
            popUp.classList.add('popUpNav-active')


        }
    }
});



//open/close nav-bar------------------







let cirlcle_btn = document.querySelector('.circle-btn');
let scroll_point_circle_button = document.getElementById('bouncy').getBoundingClientRect();
cirlcle_btn.addEventListener("click", function (){
    console.log(scroll_point_circle_button);
    window.scroll({
        top:scroll_point_circle_button.y,
        behavior:"smooth"
    });
},true);





let links = document.getElementsByClassName('works__name');
for (let i = 0; i < links.length; i++){
    links[i].addEventListener('mouseover', function over(){
        links[i].classList.add("works__name-active");
    },true);
    links[i].addEventListener('mouseout', function out(){
        links[i].classList.remove("works__name-active");
    },true);
}
for (let i = 0; i < links.length; i++){
    links[i].addEventListener('click', function over(){
        if (links[i].classList.contains("works__name-active")){
            console.log('asda')
            links[i].classList.remove("works__name-active");
        } else {
            console.log('ddd')
            links[i].classList.add("works__name-active");
        }
    },true);
}
let buttons = document.querySelectorAll(".team__slider-buttons-wrapper ul li");
let sliders = document.querySelectorAll(".slide");

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function over(){
        if (sliders[i].classList.contains("slide_off")){
            sliders[i].classList.remove("slide_off");
            for (let j=0;j<sliders.length;j++){
                if(j!==i){
                    sliders[j].classList.add("slide_off")
                }
            }
        }
    },true);
}
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






let about_buttons = document.querySelectorAll(".about-bouncy__content__icon");
let about_content = document.querySelectorAll(".about-bouncy__content-content");
let about_titles = document.querySelectorAll('.about-bouncy__content-title');

for (let i = 0; i < buttons.length; i++){
    about_buttons[i].addEventListener('click', function over(){
        if (about_content[i].classList.contains("slide_off")){
            about_content[i].classList.remove("slide_off");
            about_titles[i].classList.remove("slide_off");
            for (let j=0;j<about_content.length;j++){
                if(j!==i){
                    about_content[j].classList.add("slide_off");
                    about_titles[j].classList.add("slide_off");
                }
            }
        }
    },true);
}
