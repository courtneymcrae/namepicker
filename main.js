"use strict";
console.log("test")
var wdi_20_names = []

refill()

function eachName() {
	//console.log(wdi_20_names[randomName()]);
	if (wdi_20_names.length === 0) {
		refill();
	} else {
		document.querySelectorAll(".content")[0].innerHTML = wdi_20_names.splice(randomNumber(), 1);
	}
}

function randomNumber () {
	return Math.floor(Math.random() * wdi_20_names.length);
}

function refill () {
	wdi_20_names = ["Alex", "Brandon", "Courtney", "Jessica", "Josh", "Kristin", "Miwa", "Shon", "TJ"];

}

document.querySelectorAll("#click")[0].addEventListener("click", eachName);
