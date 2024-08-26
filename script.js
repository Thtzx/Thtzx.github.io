const bioText = document.getElementById("bioText"); 
const projectsButton = document.getElementById("projectsButton");
let i = 0; 
let time = 30; 
let tLength; 

window.addEventListener("DOMContentLoaded", () => { 
	const text = bioText.innerHTML; 
	bioText.innerHTML = ""; 
  	const textArray = text.split("");
	tLength = textArray.length;
	const intervalID = setInterval(() => { 
    bioText.innerHTML += textArray[i];
	i++ 
    if(i >= tLength) { 
      projectsButton.style.opacity = 1; clearInterval(intervalID); } }, time)})