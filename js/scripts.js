const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");


// Eventos

// Gerar Qr Code
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value.trim();

    if (!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando código...";

    const encodedValue = encodeURIComponent(qrCodeInputValue);
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodedValue}`;

    qrCodeImg.onload = () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "Código criado!";
    }; 
}

qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
    generateQrCode();
    }
});

// Limpar
qrCodeInput.addEventListener("keyup", () => {

    if (!qrCodeInput.value.trim()) {
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
})

