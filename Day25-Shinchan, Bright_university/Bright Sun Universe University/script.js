// Image Slider

var slideimg = document.getElementById("slideimg");

var img = new Array(
    "Slider images/image1.png",
    "Slider images/image2.png",
    "Slider images/image3.png"
);

var len = img.length;
var i = 0;

function slider() {
    if (i > len - 1) {
        i = 0;
    }
    slideimg.src = img[i];
    i++;
    setTimeout('slider()', 3000);
}

//  Nav bar

const Mainmenu=document.querySelector('.Menu');
const closemenu=document.querySelector('.closemenu');
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
