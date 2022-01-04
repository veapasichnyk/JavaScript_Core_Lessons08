hideText.onclick = function () {
	let visibility = text.style.visibility;
	
	if (visibility == "hidden") {
		text.style.visibility = "";
		this.textContent = "Hide text";
	} else {
		text.style.visibility = "hidden"
		this.textContent = "Display text";
	}
}

hideButton.onclick = function () {
	this.style.display = "none";	
}