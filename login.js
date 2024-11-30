const passwordForm = document.getElementById('password-form');
const passwordInput = document.getElementById('password-input');
const errorMessage = document.getElementById('error-message');
const container = document.querySelector('.container');

// 正确密码（可自行修改）
const correctPassword = '4586';

passwordForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === correctPassword) {
        // 正确密码，跳转到密钥页面
        window.location.href = 'miyao.html';
    } else {
        // 密码错误，显示错误提示并震动容器
        errorMessage.classList.add('show');
        container.classList.add('shake');

        setTimeout(() => {
            errorMessage.classList.remove('show');
            container.classList.remove('shake');
        }, 1500);
    }
});