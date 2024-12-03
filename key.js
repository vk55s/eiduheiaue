// 引入 AOS 动画库初始化
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({ duration: 800, once: true });
});

// 检测非法访问
document.addEventListener("DOMContentLoaded", () => {
    const referrer = document.referrer; // 获取来源
    const contentDiv = document.getElementById('content'); // 正常内容区域
    const errorDiv = document.getElementById('error'); // 非法访问提示区域

    if (referrer === '' || !referrer.includes('vk55s.github.io')) {
        // 如果直接访问或者来源不是本站，显示错误提示
        errorDiv.style.display = 'block';
    } else {
        // 来源合法，显示正常内容
        contentDiv.style.display = 'block';
        initializePage(); // 初始化页面功能
    }
});

// 页面初始化功能（复制订阅 & 加载密钥）
function initializePage() {
    // 订阅地址复制功能
    const subscriptionButton = document.getElementById('copySubscription');
    const subscriptionText = document.getElementById('subscription').textContent;

    subscriptionButton.addEventListener('click', () => {
        navigator.clipboard.writeText(subscriptionText).then(() => {
            subscriptionButton.textContent = '复制成功！';
            subscriptionButton.classList.add('copy-success');
            setTimeout(() => {
                subscriptionButton.textContent = '复制订阅';
                subscriptionButton.classList.remove('copy-success');
            }, 2000);
        });
    });

    // 加载密钥列表
    const codeList = document.getElementById('codeList');
    codeList.innerHTML = `<div class="loader"><span></span><span></span><span></span></div>`;

    fetch('codes.txt')
        .then(response => {
            if (!response.ok) throw new Error('无法加载 codes.txt 文件');
            return response.text();
        })
        .then(data => {
            const lines = data.trim().split('\n');
            codeList.innerHTML = ''; // 清空加载提示

            lines.forEach((line) => {
                if (line.startsWith('ss://')) {
                    const [code, remark] = line.split('#');
                    const remarkText = remark ? decodeURIComponent(remark.trim()) : '无备注';

                    const codeBlock = document.createElement('div');
                    codeBlock.classList.add('code-block');
                    codeBlock.setAttribute("data-aos", "fade-up");

                    const codeHeader = document.createElement('div');
                    codeHeader.classList.add('code-header');
                    codeHeader.textContent = `备注: ${remarkText}`;

                    const pre = document.createElement('pre');
                    pre.textContent = code;
                    pre.title = code;

                    const button = document.createElement('button');
                    button.textContent = '复制密钥';
                    button.addEventListener('click', () => {
                        navigator.clipboard.writeText(code).then(() => {
                            button.textContent = '复制成功！';
                            button.classList.add('copy-success');
                            setTimeout(() => {
                                button.textContent = '复制密钥';
                                button.classList.remove('copy-success');
                            }, 2000);
                        });
                    });

                    codeBlock.appendChild(codeHeader);
                    codeBlock.appendChild(pre);
                    codeBlock.appendChild(button);
                    codeList.appendChild(codeBlock);
                }
            });

            if (codeList.innerHTML === '') {
                codeList.innerHTML = '<p>未找到有效的密钥。</p>';
            }
        })
        .catch(error => {
            codeList.innerHTML = '<p class="error-message">加载失败，请检查 codes.txt 文件是否存在。</p>';
            console.error(error);
        });
}