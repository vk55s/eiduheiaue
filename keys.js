// 订阅地址复制功能
document.getElementById('copySubscription').addEventListener('click', () => {
    const subscriptionText = document.getElementById('subscription').textContent;
    navigator.clipboard.writeText(subscriptionText).then(() => {
        const btn = document.getElementById('copySubscription');
        btn.textContent = '复制成功！';
        setTimeout(() => (btn.textContent