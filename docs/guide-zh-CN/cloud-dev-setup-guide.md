# 云端开发环境配置指南（VS Code Remote SSH）

## 前置条件

✅ 一台云服务器（2核4GB 以上）  
✅ 服务器操作系统：Ubuntu 20.04 / 22.04（推荐）或 CentOS 7+  
✅ 本地安装 VS Code  
✅ 云服务器可以通过 SSH 访问

---

## 第一步：连接云服务器

### 1.1 获取服务器信息

从云服务商控制台获取：

- **服务器 IP 地址**：如 `123.45.67.89`
- **SSH 端口**：通常为 `22`
- **用户名**：通常为 `root` 或 `ubuntu`
- **密码** 或 **SSH 密钥**

### 1.2 测试 SSH 连接

```bash
# 在本地终端执行
ssh root@你的服务器IP

# 例如：
ssh root@123.45.67.89

# 首次连接会提示：
Are you sure you want to continue connecting (yes/no)?
# 输入 yes 并回车

# 输入密码后，成功进入服务器
```

### 1.3 配置 SSH 免密登录（推荐）

**在本地电脑上执行**：

```bash
# 1. 生成 SSH 密钥（如果已有则跳过）
ssh-keygen -t rsa -b 4096
# 一路回车，使用默认设置

# 2. 复制公钥到服务器
ssh-copy-id root@你的服务器IP

# 或手动复制（Mac/Linux）
cat ~/.ssh/id_rsa.pub | ssh root@你的服务器IP "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"

# 3. 测试免密登录
ssh root@你的服务器IP
# 无需输入密码即可登录
```

---

## 第二步：安装基础环境

### 2.1 更新系统

```bash
# Ubuntu/Debian
sudo apt update && sudo apt upgrade -y

# CentOS
sudo yum update -y
```

### 2.2 安装 Docker 和 Docker Compose

**Ubuntu 快速安装**：

```bash
# 1. 卸载旧版本（如果有）
sudo apt remove docker docker-engine docker.io containerd runc

# 2. 安装依赖
sudo apt update
sudo apt install -y ca-certificates curl gnupg lsb-release

# 3. 添加 Docker 官方 GPG 密钥
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# 4. 添加 Docker 仓库
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 5. 安装 Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# 6. 启动 Docker
sudo systemctl start docker
sudo systemctl enable docker

# 7. 验证安装
docker --version
docker compose version
```

**国内加速（可选）**：

```bash
# 配置 Docker 镜像加速
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": [
    "https://docker.m.daocloud.io",
    "https://dockerhub.azk8s.cn",
    "https://reg-mirror.qiniu.com"
  ]
}
EOF

# 重启 Docker
sudo systemctl daemon-reload
sudo systemctl restart docker
```

### 2.3 安装 Go

```bash
# 1. 下载 Go（版本根据需要调整）
cd /tmp
wget https://go.dev/dl/go1.24.0.linux-amd64.tar.gz

# 国内用户可使用镜像（更快）
# wget https://golang.google.cn/dl/go1.24.0.linux-amd64.tar.gz

# 2. 解压到 /usr/local
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf go1.24.0.linux-amd64.tar.gz

# 3. 配置环境变量
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
echo 'export GOPATH=$HOME/go' >> ~/.bashrc
echo 'export PATH=$PATH:$GOPATH/bin' >> ~/.bashrc
source ~/.bashrc

# 4. 配置 Go 代理（国内加速）
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct

# 5. 验证安装
go version
```

### 2.4 安装 GoFrame CLI

```bash
# 方法 1：使用 go install
go install github.com/gogf/gf/cmd/gf/v2@latest

# 方法 2：使用 wget（推荐，更快）
wget -O gf https://github.com/gogf/gf/releases/latest/download/gf_linux_amd64
chmod +x gf
sudo mv gf /usr/local/bin/

# 验证安装
gf -v
```

### 2.5 安装 Node.js 和 pnpm

```bash
# 1. 安装 Node.js 20.x（使用 NodeSource 仓库）
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# 2. 验证安装
node --version
npm --version

# 3. 安装 pnpm
npm install -g pnpm

# 4. 验证 pnpm
pnpm --version
```

### 2.6 安装 Git

```bash
sudo apt install -y git

# 配置 Git
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"

# 验证
git --version
```

### 2.7 安装常用工具

```bash
sudo apt install -y \
  vim \
  htop \
  curl \
  wget \
  unzip \
  tree \
  make
```

---

## 第三步：配置 VS Code Remote SSH

### 3.1 安装 VS Code 扩展

在本地 VS Code 中：

1. 打开扩展面板（`Cmd/Ctrl + Shift + X`）
2. 搜索并安装：**Remote - SSH**
3. 搜索并安装：**Remote - SSH: Editing Configuration Files**

### 3.2 配置 SSH 连接

1. **按 `F1` 或 `Cmd/Ctrl + Shift + P` 打开命令面板**
2. **输入并选择**：`Remote-SSH: Open SSH Configuration File`
3. **选择** `~/.ssh/config`
4. **添加服务器配置**：

```ssh-config
Host meme-dev
    HostName 你的服务器IP
    User root
    Port 22
    IdentityFile ~/.ssh/id_rsa
    ServerAliveInterval 60
    ServerAliveCountMax 3
```

**配置说明**：

- `Host`：连接别名，自定义名称
- `HostName`：服务器 IP 地址
- `User`：SSH 用户名
- `IdentityFile`：SSH 私钥路径（配置免密登录后）
- `ServerAliveInterval`：保持连接活跃

### 3.3 连接到服务器

1. **按 `F1` 打开命令面板**
2. **输入并选择**：`Remote-SSH: Connect to Host`
3. **选择** `meme-dev`（你配置的 Host 名称）
4. **选择操作系统**：Linux
5. **等待 VS Code Server 安装**（首次约 1-2 分钟）
6. **连接成功！**

### 3.4 验证连接

连接成功后，VS Code 左下角会显示：`SSH: meme-dev`

打开终端（`` Ctrl + ` ``），你会看到：

```bash
root@your-server:~#
```

这表示你已经在云服务器上工作了！

---

## 第四步：部署开发环境

### 4.1 克隆项目

**在 VS Code 远程终端中执行**：

```bash
# 1. 创建工作目录
mkdir -p ~/projects
cd ~/projects

# 2. 克隆项目
git clone https://github.com/你的用户名/meme-server.git
cd meme-server

# 3. 查看项目结构
tree -L 2
```

### 4.2 创建开发环境配置

**创建 `docker-compose.dev.yml`**：

```bash
cat > docker-compose.dev.yml <<'EOF'
version: '3.8'

services:
  mysql:
    image: mysql:8.0
    container_name: hotgo-mysql
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: root123456
      MYSQL_DATABASE: hotgo
      MYSQL_USER: hotgo
      MYSQL_PASSWORD: hg123456.
      TZ: Asia/Shanghai
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql
      - ./storage/init:/docker-entrypoint-initdb.d
    command:
      - --default-authentication-plugin=mysql_native_password
      - --character-set-server=utf8mb4
      - --collation-server=utf8mb4_unicode_ci
      - --max_connections=500
      - --innodb_buffer_pool_size=256M
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost", "-uhotgo", "-phg123456."]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    container_name: hotgo-redis
    restart: unless-stopped
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    command: redis-server --appendonly yes --maxmemory 128mb --maxmemory-policy allkeys-lru
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  mysql_data:
    driver: local
  redis_data:
    driver: local
EOF
```

> [!IMPORTANT]
> 注意配置中的内存限制优化：
>
> - MySQL `innodb_buffer_pool_size=256M`（适合 4GB 内存）
> - Redis `maxmemory=128mb`（避免占用过多内存）

### 4.3 启动开发环境

```bash
# 1. 启动 MySQL 和 Redis
docker compose -f docker-compose.dev.yml up -d

# 2. 查看服务状态
docker compose -f docker-compose.dev.yml ps

# 3. 查看日志
docker compose -f docker-compose.dev.yml logs -f mysql

# 等待显示: ready for connections
# 按 Ctrl+C 退出日志查看
```

### 4.4 初始化数据库

```bash
# 如果有初始化 SQL 文件
# 1. 将 SQL 文件放入 storage/init 目录
mkdir -p storage/init

# 2. 重启 MySQL 容器（自动执行 SQL）
docker compose -f docker-compose.dev.yml restart mysql

# 或手动导入
docker exec -i hotgo-mysql mysql -uhotgo -phg123456. hotgo < 你的SQL文件.sql
```

---

## 第五步：配置并启动项目

### 5.1 配置后端

```bash
# 1. 进入 server 目录
cd ~/projects/meme-server/server

# 2. 复制配置文件
cp manifest/config/config.example.yaml manifest/config/config.yaml

# 3. 下载 Go 依赖
go mod download

# 4. 生成代码（如果需要）
make dao
make service

# 5. 启动后端（HTTP 服务）
make http
```

**成功启动会看到**：

```
2026-01-27 15:30:00 [INFO] pid[12345]: http server started listening on [:8000]
2026-01-27 15:30:00 [INFO] swagger ui is serving at address: http://127.0.0.1:8000/swagger/
```

### 5.2 配置前端

**打开新终端**（`` Ctrl + Shift + ` ``）：

```bash
# 1. 进入 web 目录
cd ~/projects/meme-server/web

# 2. 安装依赖
pnpm install

# 3. 启动开发服务器
pnpm run dev
```

**成功启动会看到**：

```
VITE v5.4.2  ready in 1234 ms

➜  Local:   http://localhost:3000/
➜  Network: http://123.45.67.89:3000/
```

---

## 第六步：配置端口转发（重要）

### 6.1 配置 VS Code 端口转发

在 VS Code 中：

1. **打开端口面板**：
   - 点击 VS Code 底部的 **"PORTS"** 标签
   - 或按 `F1` → 输入 `View: Toggle Ports`

2. **添加端口转发**：
   - 点击 **"Forward a Port"**
   - 输入端口号：`8000`（后端）
   - 再次添加：`3000`（前端）

3. **设置可见性**：
   - 右键端口 → **Port Visibility** → **Public**（如需外网访问）

### 6.2 访问应用

现在你可以在**本地浏览器**访问：

- **后端 API**：`http://localhost:8000`
- **Swagger 文档**：`http://localhost:8000/swagger/`
- **前端应用**：`http://localhost:3000`

> 所有请求都会自动通过 SSH 隧道转发到云服务器！

---

## 第七步：优化和配置

### 7.1 配置 swap（防止 OOM）

2核4GB 内存在编译打包时可能紧张，建议添加 swap：

```bash
# 1. 创建 4GB swap 文件
sudo fallocate -l 4G /swapfile

# 2. 设置权限
sudo chmod 600 /swapfile

# 3. 格式化为 swap
sudo mkswap /swapfile

# 4. 启用 swap
sudo swapon /swapfile

# 5. 永久启用（重启后生效）
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

# 6. 验证
free -h
```

### 7.2 配置自动启动

创建 `~/start-dev.sh`：

```bash
cat > ~/start-dev.sh <<'EOF'
#!/bin/bash

# 启动 Docker 服务
cd ~/projects/meme-server
docker compose -f docker-compose.dev.yml up -d

echo "开发环境已启动！"
echo "后端：cd ~/projects/meme-server/server && make http"
echo "前端：cd ~/projects/meme-server/web && pnpm run dev"
EOF

chmod +x ~/start-dev.sh
```

**使用**：

```bash
# 每次重启服务器后执行
~/start-dev.sh
```

### 7.3 配置防火墙（如果需要外网访问）

```bash
# Ubuntu UFW
sudo ufw allow 8000/tcp
sudo ufw allow 3000/tcp
sudo ufw reload

# 或在云服务商控制台的"安全组"中开放端口
```

---

## 常用命令速查

### Docker 相关

```bash
# 查看容器状态
docker compose -f docker-compose.dev.yml ps

# 查看日志
docker compose -f docker-compose.dev.yml logs -f [服务名]

# 重启服务
docker compose -f docker-compose.dev.yml restart

# 停止服务
docker compose -f docker-compose.dev.yml stop

# 停止并删除容器
docker compose -f docker-compose.dev.yml down

# 完全清理（包括数据）
docker compose -f docker-compose.dev.yml down -v
```

### 后端相关

```bash
cd ~/projects/meme-server/server

# 启动所有服务
make all

# 仅启动 HTTP
make http

# 刷新权限
make refresh

# 生成代码
make dao
make service
```

### 前端相关

```bash
cd ~/projects/meme-server/web

# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build
```

### 系统监控

```bash
# 查看资源占用
htop

# 查看磁盘使用
df -h

# 查看内存使用
free -h

# 查看 Docker 资源
docker stats
```

---

## 故障排查

### 问题 1：VS Code 连接失败

**解决**：

```bash
# 1. 检查 SSH 连接
ssh root@你的服务器IP

# 2. 检查防火墙
sudo ufw status

# 3. 重启 SSH 服务
sudo systemctl restart sshd
```

### 问题 2：MySQL 连接失败

**解决**：

```bash
# 1. 检查 MySQL 容器状态
docker ps | grep mysql

# 2. 查看 MySQL 日志
docker logs hotgo-mysql

# 3. 测试连接
docker exec -it hotgo-mysql mysql -uhotgo -phg123456. hotgo

# 4. 如果密码错误，重建容器
docker compose -f docker-compose.dev.yml down -v
docker compose -f docker-compose.dev.yml up -d
```

### 问题 3：内存不足

**解决**：

```bash
# 1. 检查内存使用
free -h

# 2. 添加 swap（参考 7.1）

# 3. 限制服务内存
# 编辑 docker-compose.dev.yml，添加：
services:
  mysql:
    deploy:
      resources:
        limits:
          memory: 512M
```

### 问题 4：端口被占用

**解决**：

```bash
# 查看端口占用
sudo lsof -i :3306
sudo lsof -i :8000

# 杀死进程
sudo kill -9 进程ID

# 或修改 docker-compose.dev.yml 中的端口映射
```

---

## 开发工作流

### 日常开发流程

1. **本地打开 VS Code**
2. **连接到云服务器**（`F1` → `Remote-SSH: Connect to Host` → `meme-dev`）
3. **打开项目目录**（`File` → `Open Folder` → `/root/projects/meme-server`）
4. **启动服务**（在终端中执行 `make http` 和 `pnpm run dev`）
5. **开始编码**
6. **保存文件**（自动同步到服务器）
7. **在浏览器预览**（`http://localhost:3000`）

### 换电脑继续开发

1. **在新电脑上安装 VS Code**
2. **复制 SSH 配置**（`~/.ssh/config` 和私钥）
3. **连接到云服务器**
4. **打开项目**
5. **继续开发**（代码和环境都在云端，无需配置）

---

## 下一步

✅ 环境已配置完成！

现在你可以：

1. 📝 开始编写代码
2. 🔄 使用 Git 进行版本控制
3. 🚀 通过 GitHub Actions 自动部署
4. 📊 在 Portainer 中管理生产环境

**相关文档**：

- [GitHub Actions CI/CD](./github-actions-cicd.md)
- [Portainer 多环境管理](./cloud-server-comparison.md#6-portainer-多环境管理能力)
- [开发环境配置](./dev-environment-setup.md)

---

## 总结

恭喜！你已经成功配置了云端开发环境。从现在开始：

✅ 在任何电脑上都能秒级开始开发  
✅ 代码和数据永久保存在云端  
✅ 编译和运行不占用本地资源  
✅ 无需重复配置环境

**享受云端开发的自由吧！** 🎉
