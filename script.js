const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = "flex";
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}



let form = document.forms['my-form'];
let menu = form.country;
let options = form.country.options;

form.onsubmit = function(e){
    e.preventDefault();

    let optionValue = this.country.value;

    // location.href = '/sponsor.html'
}