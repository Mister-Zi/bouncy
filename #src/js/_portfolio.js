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