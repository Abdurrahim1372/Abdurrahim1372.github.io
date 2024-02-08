

var myImage = document.querySelector("img");
myImage.onclick = function () {
	var mySrc = myImage.getAttribute("src");
	if (mySrc === "images/pustynya_sahara_2.jpg") {
		myImage.setAttribute("src", "images/img.jpg");
	} else {
		myImage.setAttribute("src", "images/pustynya_sahara_2.jpg");
	}
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
	var myName = prompt("Please, Enter your name.");
	localStorage.setItem("name", myName);
	myHeading.textContent = "Пустыня - опасное место для путника, " + myName;
}

if(!localStorage.getItem("name")) {
	setUserName();
} else {
	var storedName = localStorage.getItem("name");
	myHeading.textContent = "Пустыня - опасное место для путника, " + storedName;
}

myButton.onclick = function() {
	setUserName();
}