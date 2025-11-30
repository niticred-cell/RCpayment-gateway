// ------- TIMER -------
let sec = 600;
function updateTimer() {
    let m = String(Math.floor(sec / 60)).padStart(2, '0');
    let s = String(sec % 60).padStart(2, '0');
    document.getElementById("timer").innerHTML = `${m}:${s}`;
    if (sec > 0) sec--;
}
setInterval(updateTimer, 1000);

// ------- TABS -------
document.getElementById("tabDirect").onclick = function () {
    this.classList.add("active");
    document.getElementById("tabQR").classList.remove("active");

    document.getElementById("directSection").style.display = "block";
    document.getElementById("qrSection").style.display = "none";
};

document.getElementById("tabQR").onclick = function () {
    this.classList.add("active");
    document.getElementById("tabDirect").classList.remove("active");

    document.getElementById("directSection").style.display = "none";
    document.getElementById("qrSection").style.display = "block";
};

// ------- METHOD SELECTION -------
document.getElementById("paytm").onclick = () => {
    document.getElementById("paytm").classList.add("active");
    document.getElementById("phonepe").classList.remove("active");
};
document.getElementById("phonepe").onclick = () => {
    document.getElementById("phonepe").classList.add("active");
    document.getElementById("paytm").classList.remove("active");
};

// ------- COPY FUNCTIONS -------
function copyUPI() {
    navigator.clipboard.writeText(document.getElementById("upiID").value);
    alert("UPI ID Copied!");
}
function copyAmount() {
    navigator.clipboard.writeText(document.getElementById("amountBox").value);
    alert("Amount Copied!");
}

// ------- SUBMIT UTR -------
function submitUTR() {
    let utr = document.getElementById("utrInput").value;
    if (utr.length < 5) {
        alert("Enter a valid UTR number!");
        return;
    }
    alert("UTR Submitted: " + utr);
}

// ------- QR CODE -------
// Initialize QR code on page load
document.addEventListener('DOMContentLoaded', function() {
    new QRCode(document.getElementById("qrcode"), {
        text: "upi://pay?pa=7488570438-2@ikwik&pn=Payment&am=3000",
        width: 200,
        height: 200
    });
});
