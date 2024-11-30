const passwordForm = document.getElementById('password-form');
const passwordInput = document.getElementById('password-input');
const errorMessage = document.getElementById('error-message');
const container = document.querySelector('.container');

const correctPassword = 'dcb78c6ce5f1f6d215d6270157f1b160';

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