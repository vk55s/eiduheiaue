document.addEventListener('DOMContentLoaded', () => {
    const passwordForm = document.getElementById('password-form');
    const passwordInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');
    const container = document.querySelector('.container');

    const CORRECT_PASSWORD = '4586';

    // 限制只能输入数字
    passwordInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d]/g, '').slice(0, 4);
    });

    passwordForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const enteredPassword = passwordInput.value.trim();

        if (enteredPassword === CORRECT_PASSWORD) {
            window.location.href = 'miyao.html';
        } else {
            errorMessage.style.display = 'block';
            container.style.animation = 'shake 0.5s';
            
            setTimeout(() => {
                errorMessage.style.display = 'none';
                container.style.animation = 'none';
                passwordInput.value = '';
                passwordInput.focus();
            }, 1500);
        }
    });

    // 添加抖动动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);
});