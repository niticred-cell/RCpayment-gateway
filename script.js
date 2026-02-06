/* ========= READ URL PARAMS ========= */
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

const upi = getParam("upi");
const amount = getParam("amount");

/* ========= SET VALUES ========= */
document.getElementById("upi").innerText = upi || "N/A";
document.getElementById("amt").innerText = "₹" + (amount || "0");
document.getElementById("amount").innerText = "₹" + (amount || "0");

/* ========= QR ========= */
if (upi && amount) {
  const qrData = `upi://pay?pa=${upi}&pn=Payment&am=${amount}&cu=INR`;
  document.getElementById("qrImg").src =
    "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" +
    encodeURIComponent(qrData);
}

/* ========= TABS ========= */
function showTab(tab, btn) {
  document.getElementById("direct").style.display = tab === "direct" ? "block" : "none";
  document.getElementById("qr").style.display = tab === "qr" ? "block" : "none";

  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

/* ========= METHOD ========= */
function selectMethod(el) {
  document.querySelectorAll(".method-btn").forEach(b => b.classList.remove("active"));
  el.classList.add("active");
}

/* ========= COPY ========= */
function copyText(id) {
  navigator.clipboard.writeText(document.getElementById(id).innerText);
  alert("Copied!");
}

/* ========= TIMER ========= */
let time = 10 * 60;
setInterval(() => {
  if (time <= 0) return;
  time--;
  const m = String(Math.floor(time / 60)).padStart(2, "0");
  const s = String(time % 60).padStart(2, "0");
  document.getElementById("timer").innerText = `00:${m}:${s}`;
}, 1000);

/* ========= SUBMIT ========= */
function submitUTR() {
  const utr = document.getElementById("utr").value.trim();
  if (!utr) {
    alert("Please enter UTR");
    return;
  }
  alert("UTR Submitted: " + utr);
}
