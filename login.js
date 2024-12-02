document.addEventListener('DOMContentLoaded', () => {
    const passwordForm = document.getElementById('password-form');
    const passwordInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');
    const container = document.querySelector('.container');

    const correctPassword = '4586'; // 提升安全性，建议将此密码存储在环境变量或通过服务器端验证

    passwordForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const enteredPassword = passwordInput.value.trim();

        if (enteredPassword === correctPassword) {
            window.location.href = 'miyao.html';
        } else {
            errorMessage.style.display = 'block';
            container.classList.add('shake');

            setTimeout(() => {
                errorMessage.style.display = 'none';
                container.classList.remove('shake');
            }, 1500);
        }
    });
});
