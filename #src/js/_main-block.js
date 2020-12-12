
let cirlcle_btn = document.querySelector('.circle-btn');
let scroll_point_circle_button = document.getElementById('bouncy').getBoundingClientRect();
cirlcle_btn.addEventListener("click", function (){
    console.log(scroll_point_circle_button);
    window.scroll({
        top:scroll_point_circle_button.y,
        behavior:"smooth"
    });
},true);


