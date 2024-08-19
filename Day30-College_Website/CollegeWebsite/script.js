// Image Slider

var slideimg = document.getElementById("slideimg");

var img = new Array(
    "image/slider-img1.png",
    "image/slider-img2.png",
    "image/slider-img3.png"
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

slider();