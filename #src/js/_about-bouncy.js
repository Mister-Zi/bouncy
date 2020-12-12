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