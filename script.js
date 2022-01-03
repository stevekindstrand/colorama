// Funktion som ändrar bakgrundsfärg, samt skriver ut färgens hex-kod
function changeColor() {
    let color = document.getElementById("inputColor").value;
    document.body.style.backgroundColor = color;
    document.getElementById("inputText").value = color;

    // Skapar local storage
    localStorage.setItem("color", color)
}

// Funktion som hämtar local storage
function getLocalStorage() {
    let storedInput = localStorage.getItem("color");
    
    if("color") {
        document.getElementById("inputText").value = storedInput;
        document.body.style.backgroundColor = storedInput;
        document.getElementById("inputColor").value = storedInput;
        }
    }

// Hämtar changeColor-funktionen med knapptryck
document.getElementById("btnColor").addEventListener("click", () => {
    changeColor();
});

// Hämtar local storage när sidan laddas om
window.onload = getLocalStorage();