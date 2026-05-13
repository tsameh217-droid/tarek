// كلمة السر (غيرها للي عايزه)
const PASSWORD = "12112024" || "123456"; // حط كلمة السر اللي عايزها هنا

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    
    if (input === PASSWORD) {
        document.getElementById('passwordPage').classList.add('hidden');
        document.getElementById('apologyPage').classList.remove('hidden');
        
        // صوت تأثير نجاح
        playSuccessSound();
    } else {
        // هز الشاشة لو كلمة السر غلط
        shakeScreen();
        document.getElementById('passwordInput').value = '';
        alert('ما تخمن صح ياعم صيحي ❤️');
    }
}

function shakeScreen() {
    document.body.style.animation = 'shake 0.5s';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);
}

function playSuccessSound() {
    // صوت نجاح (اختياري)
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAo');
    audio.play().catch(() => {});
}

// اضغط Enter في كلمة السر
document.getElementById('passwordInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});