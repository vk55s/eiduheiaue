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
codeList.innerHTML = `
    <div class="loader">
        <span></span>
        <span></span>
        <span></span>
    </div>
`;

fetch('codes.txt')
    .then(response => {
        if (!response.ok) throw new Error('无法加载 codes.txt 文件');
        return response.text();
    })
    .then(data => {
        const lines = data.trim().split('\n');
        codeList.innerHTML = ''; // 清空加载提示

        lines.forEach((line, index) => {
            if (line.startsWith('ss://')) {
                const [code, remark] = line.split('#');
                const remarkText = remark ? decodeURIComponent(remark.trim()) : '无备注';

                const codeBlock = document.createElement('div');
                codeBlock.classList.add('code-block');

                const codeHeader = document.createElement('div');
                codeHeader.classList.add('code-header');
                codeHeader.textContent = `备注: ${remarkText}`;

                const pre = document.createElement('pre');
                pre.textContent = code;

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

                // 延迟显示卡片（动画效果）
                setTimeout(() => codeBlock.classList.add('visible'), 150 * index);
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