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