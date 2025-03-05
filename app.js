var img1 = document.getElementById("img1")
var img2 = document.getElementById("img2")
var img3 = document.getElementById("img3")
var currentSlide = 1;
showSlide()


function showSlide() {
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";

    if (currentSlide == 1) img1.style.display = "block";
    if (currentSlide == 2) img2.style.display = "block";
    if (currentSlide == 3) img3.style.display = "block";
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 1) {
        currentSlide = 3;   
}
showSlide()
}
function nextSlide() {
    currentSlide++;
    if (currentSlide > 3) {
        currentSlide = 1;
}
showSlide()
}
setInterval(() => {
    nextSlide()
}, 5000);