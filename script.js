let display = document.getElementById("display");
let welcomeMessage = document.getElementById("welcome-message");
let currentInput = "";

// Tampilkan pesan sambutan saat kalkulator dimuat
welcomeMessage.textContent = "Selamat datang di Kalkulator!";

function appendToDisplay(value) {
    // Sembunyikan pesan sambutan saat pengguna mulai memasukkan angka atau operator
    welcomeMessage.style.display = "none";

    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
    // Tampilkan kembali pesan sambutan saat layar dikosongkan
    welcomeMessage.style.display = "block";
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (error) {
        display.value = "Error";
    }
}



function clearDisplay() {
    currentInput = "";
    display.value = "";
    // Tampilkan kembali pesan sambutan saat layar dikosongkan
    welcomeMessage.style.display = "block";
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (error) {
        display.value = "Error";
    }
}

