// URL Params
const params = new URLSearchParams(window.location.search);
const upi = params.get("upi") || "test@upi";
const amount = params.get("amount") || "0";

document.getElementById("upiID").innerText = upi;
document.getElementById("sendAmount").innerText = "₹" + amount;
document.getElementById("amount").innerText = "₹" + amount;

// QR Code
document.getElementById("qrImage").src =
  "https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=" +
  encodeURIComponent(`upi://pay?pa=${upi}&am=${amount}&cu=INR`);

// Tabs
function switchTab(tab, el){
  document.getElementById("direct").style.display = tab === "direct" ? "block" : "none";
  document.getElementById("qr").style.display = tab === "qr" ? "block" : "none";
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  el.classList.add("active");
}

// Payment Method Select
function selectMethod(el){
  document.querySelectorAll(".method-btn").forEach(b => b.classList.remove("active"));
  el.classList.add("active");
}

// Copy
function copyText(id){
  navigator.clipboard.writeText(document.getElementById(id).innerText);
  alert("Copied");
}

// Submit UTR
function submitUTR(){
  const utr = document.getElementById("utr").value.trim();
  if(!utr) return alert("Please enter UTR");
  alert("UTR Submitted: " + utr);
}

// Timer
let t = 600;
const timer = setInterval(() => {
  if(t < 0) return clearInterval(timer);
  const m = String(Math.floor(t/60)).padStart(2,'0');
  const s = String(t%60).padStart(2,'0');
  document.getElementById("timer").innerText = `00:${m}:${s}`;
  t--;
}, 1000);
