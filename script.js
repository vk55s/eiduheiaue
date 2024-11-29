// 密码设置
const correctPasswordHash = "5d41402abc4b2a76b9719d911017c592"; // "4586" 的 MD5 加密值
const redirectURL = "miyao.html"; // 替换为您的密钥页面链接

// 表单提交事件
document.getElementById("password-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const userInput = document.getElementById("password-input").value;
    const errorMessage = document.getElementById("error-message");

    // 将用户输入的密码加密进行比较
    const userInputHash = md5(userInput); // 使用 MD5 加密用户输入
    if (userInputHash === correctPasswordHash) {
        // 密码正确，跳转到密钥页面
        window.location.href = redirectURL;
    } else {
        // 密码错误，显示提示信息
        errorMessage.textContent = "密码错误，请重试！";
        errorMessage.style.display = "block";
    }
});

// 密码可见性切换
document.getElementById("toggle-password").addEventListener("click", function () {
    const passwordInput = document.getElementById("password-input");
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.textContent = type === "password" ? "👁" : "🙈";
});

// 引入 MD5 加密库（示例可从 CDN 引入）
function md5(string) {
    // 简单 MD5 加密实现（可替换为更强大的库如 CryptoJS）
    return CryptoJS.MD5(string).toString();
}