from flask import Flask, Response, request
import os

app = Flask(__name__)

# 路由处理 /subscribe
@app.route('/subscribe')
def serve_txt():
    # 获取 URL 中的 token 参数
    token = request.args.get('token')
    
    # 校验 token 是否正确
    if token != 'chuizijiasuDIAHBSJ':
        return "Invalid token", 403  # 返回 403 错误，表示权限不足
    
    try:
        # 获取文件路径（假设文件在 root 目录下）
        file_path = os.path.join(os.getcwd(), 'dingyue.txt')
        
        # 读取文件内容
        with open(file_path, 'r') as file:
            content = file.read()

        # 返回纯文本内容，设置 Content-Type 为 text/plain
        return Response(content, mimetype='text/plain')
    except Exception as e:
        return f"Error reading file: {str(e)}", 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=856)  # 设置监听所有IP，端口为10186