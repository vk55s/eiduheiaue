from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder=os.getcwd())  # 设置静态文件目录为根目录

# 路由处理访问15000端口时返回 index.html
@app.route('/')
def home():
    return send_from_directory(os.getcwd(), 'index.html')  # 返回根目录下的 index.html

# 路由处理访问 login.html
@app.route('/login.html')
def login():
    return send_from_directory(os.getcwd(), 'login.html')  # 返回根目录下的 login.html

# 路由处理访问 miyao.html
@app.route('/miyao.html')
def miyao():
    return send_from_directory(os.getcwd(), 'miyao.html')  # 返回根目录下的 miyao.html

# 提供静态文件（CSS、JS 等）
@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory(os.getcwd(), filename)  # 从根目录提供静态文件

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=15000)  # 设置监听所有IP，端口为15000