const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const match = document.querySelector('.match');
const boys = document.querySelector('.boys')
const girl = document.querySelector('.girl')
const either = document.querySelector('.either')


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = "flex";
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

match.onclick = function(e){
    e.preventDefault();
    location.href = '/sponsor.html'
}


// girl.onclick = function(){
//     girl.style.background = 'blue'
//     girl.style.color = 'white'
// }

// boys.onclick = function(){
//     boys.style.background = 'blue'
//     boys.style.color = 'white'
// }

// either.onclick = function(){
//     either.style.background = 'blue'
//     either.style.color = 'white'
// }



let form = document.forms['my-form'];
console.log(form)
let menu = form.country;
let options = form.country.options;

form.onsubmit = function(e){
    e.preventDefault();

    let optionValue = this.country.value;

    // location.href = '/sponsor.html'
}