function submitFunction(){
    document.getElementById("submit").disabled = true;
    var weatherstate = document.getElementById('weather').value;
        if(weatherstate == "true"){
            var outputText = "Stay Dry!"
        }else{
            var outputText = "Enjoy the Day!"
        }
    appendText(outputText);
    setTimeout(function(){
        clearHistory();
        document.getElementById("submit").disabled = false;
    }, 5000); 
}

function appendText(textInput) {
	var tag = document.createElement("p");
	var text = document.createTextNode(textInput);
	tag.appendChild(text)

	var element = document.getElementById("outputPlace");
	element.appendChild(tag)
}

function clearHistory() {
	var div = document.getElementById("outputPlace");
	while (div.firstChild) {
		div.removeChild(div.firstChild);
	}
}