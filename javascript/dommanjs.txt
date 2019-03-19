console.log("hello");

function makeDiv(message) {
	const div= document.createElement("div");
	// console.log(createDiv);

	div.textContent= message;
	div.className="c1Panel"
	//console.log(div);
	return div;
}


console.log("testing makeDiv:");
console.log( makeDiv("Make me a div"));

const body=document.getElementsByTagName("body");
body.addEventListener("click", onBodyClicked);

function onBodyClicked() {
	console.log("in function onBodyClicked");
}