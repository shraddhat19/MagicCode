

const Mainmenu=document.querySelector('.Mainmenu');
const closemenu=document.querySelector('.colsemenu');
const openmenu=document.querySelector('.openmenu');

openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close);

function show(){
    Mainmenu.style.display= 'flex';
    Mainmenu.style.top='0';
}
function close(){
    Mainmenu.style.top='-100%';
}