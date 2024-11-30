const passwordForm = document.getElementById('password-form');
const passwordInput = document.getElementById('password-input');
const errorMessage = document.getElementById('error-message');
const container = document.querySelector('.container');
const togglePasswordButton = document.getElementById('toggle-password');
const submitButton = passwordForm.querySelector('button');

const correctPassword = '4586';

// 显示/隐藏密码功能
togglePasswordButton.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePasswordButton.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
});

passwordForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const enteredPassword = passwordInput.value.trim();

    // 禁用提交按钮，防止重复提交
    submitButton.disabled = true;

    if (enteredPassword === correctPassword) {
        window.location.href = 'miyao.html'; // 密码正确跳转
    } else {
        errorMessage.style.display = 'block';
        container.classList.add('shake');

        setTimeout(() => {
            errorMessage.style.display = 'none';
            container.classList.remove('shake');
        }, 1500);
    }

    // 恢复按钮状态
    setTimeout(() => {
        submitButton.disabled = false;
    }, 2000); // 2秒后恢复按钮可用状态
});