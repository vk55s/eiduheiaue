/* 根变量 */
:root {
    --bg-color: linear-gradient(135deg, #f4f5f7, #e0e3e8);
    --text-color: #333;
    --container-bg: rgba(255, 255, 255, 0.8);
    --button-bg: #4a90e2;
    --button-hover-bg: #357abd;
    --border-color: rgba(220, 223, 230, 0.8);
    --code-bg: rgba(243, 244, 246, 0.9);
    --shadow-light: rgba(0, 0, 0, 0.1);
    --shadow-hover: rgba(0, 0, 0, 0.2);
}

/* 全局背景动态渐变 */
body {
    font-family: "Segoe UI", Arial, sans-serif;
    background: var(--bg-color);
    color: var(--text-color);
    margin: 0;
    padding: 0;
    line-height: 1.8;
    overflow-x: hidden;
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* 卡片动态光影效果 */
.code-block {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s;
    margin-bottom: 25px;
    padding: 20px;
    border: 1px solid var(--border-color);
    border-radius: 16px;
    background: var(--code-bg);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    position: relative;
}

.code-block:hover {
    transform: scale(1.03) translateY(-5px);
    box-shadow: 0 10px 30px var(--shadow-hover);
}

/* 动态光点 */
.code-block::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, transparent 60%);
    opacity: 0;
    transition: opacity 0.6s, transform 0.6s;
}

.code-block:hover::before {
    opacity: 1;
    transform: scale(1.2);
}

/* 波纹按钮效果 */
button {
    display: inline-block;
    margin-top: 10px;
    padding: 12px 20px;
    background-color: var(--button-bg);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0.5px;
    transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
    position: relative;
    overflow: hidden;
}

button:hover {
    background-color: var(--button-hover-bg);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px var(--shadow-hover);
}

button:after {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: 50%;
    left: 50%;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.5s ease-out;
}

button:active:after {
    transform: translate(-50%, -50%) scale(1);
    transition: transform 0.3s ease-out;
}

/* 滚动加载动画 */
[data-aos] {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

[data-aos].aos-animate {
    opacity: 1;
    transform: translateY(0);
}