var changed = false;
var slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
changed = true;
showDivs(slideIndex += n);
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("mySlides");
if (n > x.length) { slideIndex = 1 }
if (n < 1) { slideIndex = x.length }
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}
x[slideIndex - 1].style.display = "block";
}

setInterval(()=>{
if(!changed){
    plusDivs(1);
    changed=false;
}
}, 2500)