document.addEventListener('DOMContentLoaded', () => {
    const codeList = document.getElementById('codeList');
    const copySubscriptionBtn = document.getElementById('copySubscription');
    const subscriptionText = document.getElementById('subscription').textContent;

    // 复制订阅地址功能
    copySubscriptionBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(subscriptionText).then(() => {
            copySubscriptionBtn.textContent = '已复制！';
            copySubscriptionBtn.style.background = 'linear-gradient(90deg, #28a745, #2ecc71)';
            
            setTimeout(() => {
                copySubscriptionBtn.textContent = '复制订阅';
                copySubscriptionBtn.style.background = 'linear-gradient(90deg, #3a66db, #4a7eea)';
            }, 2000);
        });
    });

    // 加载密钥列表
    async function loadCodes() {
        try {
            const response = await fetch('codes.txt');
            const data = await response.text();
            const lines = data.trim().split('\n');
            
            const codesHTML = lines
                .filter(line => line.startsWith('ss://'))
                .map((line, index) => {
                    const [code, remark] = line.split('#');
                    const remarkText = remark ? decodeURIComponent(remark.trim()) : `密钥 ${index + 1}`;
                    
                    return `
                        <div class="code-block">
                            <div class="code-header">${remarkText}</div>
                            <pre>${code}</pre>
                            <button onclick="copyCode('${code}', this)">复制密钥</button>
                        </div>
                    `;
                })
                .join('');
            
            codeList.innerHTML = codesHTML || '<p>未找到密钥</p>';
        } catch (error) {
            codeList.innerHTML = '<p>加载密钥失败</p>';
        }
    }

    // 复制指定密钥
    window.copyCode = (code, btn) => {
        navigator.clipboard.writeText(code).then(() => {
            btn.textContent = '已复制！';
            btn.style.background = 'linear-gradient(90deg, #28a745, #2ecc71)';
            
            setTimeout(() => {
                btn.textContent = '复制密钥';
                btn.style.background = 'linear-gradient(90deg, #3a66db, #4a7eea)';
            }, 2000);
        });
    };

    loadCodes();
});