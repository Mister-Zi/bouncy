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





