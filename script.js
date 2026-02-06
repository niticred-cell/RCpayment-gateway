// Switch Tabs
function showTab(tab, btn) {
  document.getElementById('direct').style.display = tab === 'direct' ? 'block' : 'none';
  document.getElementById('qr').style.display = tab === 'qr' ? 'block' : 'none';

  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// Select Payment Method
function selectMethod(el) {
  document.querySelectorAll('.method-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

// Copy Text
function copyText(id) {
  navigator.clipboard.writeText(document.getElementById(id).innerText);
  alert("Copied!");
}

// Countdown Timer
let time = 9 * 60 + 28;
setInterval(() => {
  if (time <= 0) return;
  time--;
  const m = String(Math.floor(time / 60)).padStart(2, '0');
  const s = String(time % 60).padStart(2, '0');
  document.getElementById('timer').innerText = `00:${m}:${s}`;
}, 1000);

// Submit UTR
function submitUTR() {
  const utr = document.getElementById('utr').value.trim();
  if (!utr) {
    alert("Please enter UTR");
    return;
  }
  alert("UTR Submitted: " + utr);
}
