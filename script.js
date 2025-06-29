// تحقق من الفورم
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    const emailInput = document.querySelector('input[type="email"]');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(emailInput.value)) {
        alert('Please enter a valid email address!');
        e.preventDefault();
    }
});

// رسالة ترحيبية
window.onload = function() {
    alert('Welcome to Discover Riyadh! 🌆');
};