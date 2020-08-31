var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.querySelector("body");
var h3 = document.querySelector("h3");
var randomBtn = document.getElementById("Random");

function colorInput() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	h3.textContent = body.style.background + ";";
};

color1.addEventListener("input", colorInput);

color2.addEventListener("input", colorInput);

function randomNum() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i=0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * letters.length)];
	}
	return color
};
 function randomColor() {
 	color1.value = randomNum();
 	color2.value = randomNum();
 	colorInput()
 }

colorInput();

randomBtn.addEventListener("click", randomColor)