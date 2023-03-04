const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const match = document.querySelector('.match');
const news = document.querySelector('.news')
const olds = document.querySelector('.olds')
const first = document.querySelector('.first')
const secs = document.querySelector('.secs')
const third = document.querySelector('.third')
const form = document.getElementById('form');
const ngn = document.getElementById('ngn');
const usd = document.getElementById('usd');
const euro = document.getElementById('euro');
const gbp = document.getElementById('gbp');


form.addEventListener('submit', e => {
    e.preventDefault();
});




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

news.onclick = function(e){
    e.preventDefault();
    location.href = '/school.html'
}

olds.onclick = function(e){
    e.preventDefault();
    location.href = '/camp.html'
}

first.onclick = function(e){
    e.preventDefault();
    location.href = '/mission.html'
}

secs.onclick = function(e){
    e.preventDefault();
    location.href = '/tree.html'
}

third.onclick = function(e){
    e.preventDefault();
    location.href = '/about.html'
}

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);



// let form = document.forms['my-form'];
// console.log(form)
// let menu = form.country;
// let options = form.country.options;

// form.onsubmit = function(e){
//     e.preventDefault();

//     let optionValue = this.country.value;

// }