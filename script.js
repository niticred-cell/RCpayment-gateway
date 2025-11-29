// ELEMENTS
function $(id){ return document.getElementById(id); }

let upi = "demo@upi";
let amount = "3715.31";

let timerSec = 5*60 + 18;

// TIMER
setInterval(() => {
  if (timerSec <= 0) return;
  timerSec--;
  let min = String(Math.floor(timerSec / 60)).padStart(2,'0');
  let sec = String(timerSec % 60).padStart(2,'0');
  $("timer").textContent = `${min}:${sec}`;
}, 1000);


// APPLY BUTTON
$("applyBtn").onclick = () => {
  upi = $("upiInput").value.trim();
  amount = parseFloat($("amountInput").value).toFixed(2);

  $("amountDisplay").textContent = "₹" + amount;
  $("showUpi").value = upi;
  $("showAmount").value = "₹" + amount;

  generateQR();
};


// QR GENERATOR
function generateQR(){
  $("qrcode").innerHTML = "";
  let upiUrl = `upi://pay?pa=${upi}&am=${amount}&cu=INR`;

  new QRCode($("qrcode"), {
    text: upiUrl,
    width: 200,
    height: 200
  });
}

generateQR();
$("showUpi").value = upi;
$("showAmount").value = "₹" + amount;


// COPY BUTTONS
$("copyUpi").onclick = () => {
  navigator.clipboard.writeText(upi);
  alert("Copied");
};

$("copyAmount").onclick = () => {
  navigator.clipboard.writeText(amount);
  alert("Copied");
};


// SAVE QR
$("saveQR").onclick = () => {
  let canvas = $("qrcode").querySelector("canvas");
  let link = document.createElement("a");
  link.download = "QR.png";
  link.href = canvas.toDataURL();
  link.click();
};


// SUBMIT BUTTON
$("submitBtn").onclick = () => {
  let utr = $("utrInput").value.trim();

  if (utr.length < 3) {
    alert("Enter valid UTR");
    return;
  }

  window.location.href = "success.html?utr=" + utr;
};
