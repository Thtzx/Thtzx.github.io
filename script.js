const bioText = document.getElementById("bioText"); 
const projectsButton = document.getElementById("projectsButton");
const stringContainer = document.getElementById("stringContainer");
const stringElement = document.querySelector('.string');
let i = 0; 
let time = 30; 
let tLength;
let string;

stringElement.innerText = selectRandomChar();
function selectRandomChar() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789tomtomtomtomtomtomtomtomtomtomtomtomtomtomtomtomtomtomtom";
    const charsArray = chars.split("");
    charsArray.forEach(e => {
        charsArray.forEach(e => {
            let i = Math.round(Math.random() * charsArray.length);
            string += charsArray[i];
        });
    });
    return string;
}
setInterval(() => {
    string = "";
    stringElement.innerText = selectRandomChar();
}, 1000);

window.addEventListener("DOMContentLoaded", () => { 
    const text = bioText.innerHTML; 
    bioText.innerHTML = ""; 
    const textArray = text.split("");
    tLength = textArray.length;
    const intervalID = setInterval(() => { 
        bioText.innerHTML += textArray[i];
        i++; 
        if(i >= tLength) { 
            projectsButton.style.opacity = 1; clearInterval(intervalID); 
        } 
    }, time);
});

document.addEventListener("mousemove", (e) => {
    const circle = document.querySelector('.circle');
    circle.style.transform = `translate(${e.clientX - 2000}px, ${e.clientY + window.scrollY - 2000}px)`;
});
