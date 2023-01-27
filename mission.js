const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const news = document.querySelector('.news')
const olds = document.querySelector('.olds')
const secs = document.querySelector('.secs')
const third = document.querySelector('.third')


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = "flex";
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

news.onclick = function(e){
    e.preventDefault();
    location.href = '/school.html'
}

olds.onclick = function(e){
    e.preventDefault();
    location.href = '/camp.html'
}


secs.onclick = function(e){
    e.preventDefault();
    location.href = '/tree.html'
}

third.onclick = function(e){
    e.preventDefault();
    location.href = '/about.html'
}