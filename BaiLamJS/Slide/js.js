var slideIndex = 1;
function load() {
	showDivs(slideIndex);
}
function pre_nextImage(n) {
	showDivs(slideIndex += n);
}
function currentIndex(n) {
	showDivs(slideIndex = n);
}
function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("index");
	for (var j = 0; j < x.length; j++) {
		x[j].style.display = "none";
	}
	if (n > x.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = x.length;
	}
	for (i = 0; i < x.length; i++) 	{
		dots[i].className = dots[i].className.replace(" w3-red", "");
	}
	x[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " w3-red";
}