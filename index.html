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
        timerElement.style.background = '#e74c3c';
        alert('Payment time has expired! Please refresh the page to start again.');
    }
}

const timerInterval = setInterval(updateTimer, 1000);

// Payment method selection
const methods = document.querySelectorAll('.method');
methods.forEach(method => {
    method.addEventListener('click', () => {
        methods.forEach(m => m.classList.remove('active'));
        method.classList.add('active');
        
        // Update payment method in the UI
        const methodName = method.querySelector('.method-name').textContent;
        console.log(`Selected payment method: ${methodName}`);
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
    copyBtn.style.background = '#2ecc71';
    
    setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.style.background = '#3498db';
    }, 2000);
});

// Form submission and validation
const submitBtn = document.querySelector('.submit-btn');
const refNoInput = document.getElementById('ref-no');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (!refNoInput.value.trim()) {
        refNoInput.style.borderColor = '#e74c3c';
        showNotification('Ref No is required!', 'error');
    } else if (refNoInput.value.trim().length !== 12) {
        refNoInput.style.borderColor = '#e74c3c';
        showNotification('Ref No must be exactly 12 characters!', 'error');
    } else {
        refNoInput.style.borderColor = '#2ecc71';
        showNotification('Payment submitted successfully!', 'success');
        
        // In a real app, this would submit the form data to a server
        console.log('Payment submitted with Ref No:', refNoInput.value);
        
        // Reset form
        setTimeout(() => {
            refNoInput.value = '';
            refNoInput.style.borderColor = '#e9ecef';
        }, 2000);
    }
});

// Save QR Code functionality
const saveQrBtn = document.querySelector('.save-qr');
saveQrBtn.addEventListener('click', () => {
    showNotification('QR Code saved to your device!', 'success');
    
    // In a real app, this would generate and download a QR code image
    console.log('QR Code save functionality triggered');
});

// How to find UTR link
const helpLink = document.querySelector('.help-link');
helpLink.addEventListener('click', (e) => {
    e.preventDefault();
    showNotification('Opening UTR guide...', 'info');
    
    // In a real app, this would open a modal or redirect to a help page
    setTimeout(() => {
        alert('To find your UTR number:\n1. Open your bank app\n2. Go to transaction history\n3. Find the payment transaction\n4. Look for "UTR" or "Reference Number"');
    }, 500);
});

// Notification system
function showNotification(message, type) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
    `;
    
    // Set background color based on type
    const colors = {
        success: '#2ecc71',
        error: '#e74c3c',
        info: '#3498db'
    };
    
    notification.style.background = colors[type] || colors.info;
    
    // Add keyframe animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 3000);
}

// Input validation for Ref No
refNoInput.addEventListener('input', (e) => {
    const value = e.target.value;
    
    // Only allow numbers and letters
    e.target.value = value.replace(/[^a-zA-Z0-9]/g, '');
    
    // Limit to 12 characters
    if (value.length > 12) {
        e.target.value = value.slice(0, 12);
    }
    
    // Reset border color when user starts typing
    if (value.length > 0) {
        e.target.style.borderColor = '#e9ecef';
    }
});