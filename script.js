// Timer functionality
let timeLeft = 5 * 60 + 18; // 5 minutes and 18 seconds
const timerElement = document.querySelector('.timer');

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(timerInterval);
        timerElement.style.background = '#ff4444';
        alert('Payment time has expired!');
    }
}

const timerInterval = setInterval(updateTimer, 1000);

// Payment method selection
const methods = document.querySelectorAll('.method');
methods.forEach(method => {
    method.addEventListener('click', () => {
        methods.forEach(m => m.style.background = '#f8f9fa');
        method.style.background = '#e3f2fd';
    });
});

// Copy UPI ID functionality
const copyBtn = document.querySelector('.copy-btn');
copyBtn.addEventListener('click', () => {
    const upiId = 'u****o@axl';
    
    // Create a temporary textarea to copy text
    const textArea = document.createElement('textarea');
    textArea.value = upiId;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    // Visual feedback
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    copyBtn.style.background = '#4CAF50';
    
    setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.style.background = '#2196F3';
    }, 2000);
});

// Form validation
const submitBtn = document.querySelector('.submit-btn');
const refNoInput = document.getElementById('ref-no');
const errorMessage = document.querySelector('.error-message');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (!refNoInput.value.trim()) {
        refNoInput.style.borderColor = '#ff4444';
        errorMessage.classList.add('show');
    } else if (refNoInput.value.trim().length !== 12) {
        refNoInput.style.borderColor = '#ff4444';
        errorMessage.textContent = 'Ref No must be exactly 12 characters';
        errorMessage.classList.add('show');
    } else {
        refNoInput.style.borderColor = '#4CAF50';
        errorMessage.classList.remove('show');
        alert('Payment submitted successfully!');
        
        // Reset form
        setTimeout(() => {
            refNoInput.value = '';
            refNoInput.style.borderColor = '#ddd';
        }, 2000);
    }
});

// Save QR Code functionality
const saveQrBtn = document.querySelector('.save-qr');
saveQrBtn.addEventListener('click', () => {
    alert('QR Code saved successfully!');
});

// How to find UTR link
const helpLink = document.querySelector('.help-link');
helpLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('To find your UTR number:\n1. Open your bank app\n2. Go to transaction history\n3. Find the payment transaction\n4. Look for "UTR" or "Reference Number"');
});

// Input validation for Ref No
refNoInput.addEventListener('input', (e) => {
    const value = e.target.value;
    
    // Only allow numbers and letters
    e.target.value = value.replace(/[^a-zA-Z0-9]/g, '');
    
    // Limit to 12 characters
    if (value.length > 12) {
        e.target.value = value.slice(0, 12);
    }
    
    // Reset border color and error when user starts typing
    if (value.length > 0) {
        e.target.style.borderColor = '#ddd';
        errorMessage.classList.remove('show');
    }
});