// 密码设置
const correctPassword = "4586"; // 替换为您希望设置的密码
const redirectURL = "miyao.html"; // 替换为密钥页面链接

// 表单提交事件
document.getElementById("password-form").addEventListener("submit", function (e) {
    e.preventDefault();
    handlePasswordValidation();
});

// 验证密码
function handlePasswordValidation() {
    const userInput = document.getElementById("password-input").value;
    const errorMessage = document.getElementById("error-message");

    if (userInput === correctPassword) {
        // 密码正确，跳转到密钥页面
        window.location.href = redirectURL;
    } else {
        // 密码错误，显示提示信息
        errorMessage.style.display = "block";
        setTimeout(() => (errorMessage.style.display = "none"), 3000); // 提示3秒后隐藏
    }
}

// 订阅地址复制功能
const subscriptionButton = document.getElementById("copySubscription");
if (subscriptionButton) {
    subscriptionButton.addEventListener("click", handleSubscriptionCopy);
}

function handleSubscriptionCopy() {
    const subscriptionText = document.getElementById("subscription").textContent;
    navigator.clipboard
        .writeText(subscriptionText)
        .then(() => {
            subscriptionButton.textContent = "复制成功！";
            setTimeout(() => (subscriptionButton.textContent = "复制订阅"), 2000);
        })
        .catch((err) => console.error("复制失败:", err));
}

// 加载密钥列表
const codeList = document.getElementById("codeList");
if (codeList) {
    loadKeyList("codes.txt");
}

function loadKeyList(filePath) {
    codeList.innerHTML = '<p>正在加载密钥...</p>';

    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error("无法加载 codes.txt 文件");
            return response.text();
        })
        .then(data => renderKeyList(data))
        .catch(error => {
            codeList.innerHTML = '<p>加载失败，请检查 codes.txt 文件是否存在。</p>';
            console.error(error);
        });
}

function renderKeyList(data) {
    const lines = data.trim().split("\n");
    codeList.innerHTML = ""; // 清空加载提示

    lines.forEach(line => {
        if (line.startsWith("ss://")) {
            const [code, remark] = line.split("#");
            const remarkText = remark ? decodeURIComponent(remark.trim()) : "无备注";

            const codeBlock = document.createElement("div");
            codeBlock.classList.add("code-block");

            const codeHeader = document.createElement("div");
            codeHeader.classList.add("code-header");
            codeHeader.textContent = `备注: ${remarkText}`;

            const pre = document.createElement("pre");
            pre.textContent = code;

            const button = document.createElement("button");
            button.textContent = "复制密钥";
            button.addEventListener("click", () => handleKeyCopy(code, button));

            codeBlock.appendChild(codeHeader);
            codeBlock.appendChild(pre);
            codeBlock.appendChild(button);
            codeList.appendChild(codeBlock);
        }
    });

    if (codeList.innerHTML === "") {
        codeList.innerHTML = "<p>未找到有效的密钥。</p>";
    }
}

function handleKeyCopy(key, button) {
    navigator.clipboard
        .writeText(key)
        .then(() => {
            button.textContent = "复制成功！";
            setTimeout(() => (button.textContent = "复制密钥"), 2000);
        })
        .catch(err => console.error("复制失败:", err));
}