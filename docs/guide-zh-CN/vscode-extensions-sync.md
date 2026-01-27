# VS Code 插件快速同步指南

## 方法 1：Settings Sync（最推荐）⭐⭐⭐⭐⭐

### 优势

- ✅ 自动同步插件、设置、快捷键
- ✅ 多设备同步
- ✅ 一次配置，永久有效

### 配置步骤

#### 1. 在本地 VS Code 开启 Settings Sync

1. 按 `Cmd + Shift + P`（Windows: `Ctrl + Shift + P`）
2. 输入并选择：`Settings Sync: Turn On Settings Sync`
3. 选择登录方式：
   - **GitHub**（推荐）
   - Microsoft Account
4. 登录账号
5. 选择要同步的内容（**确保勾选所有选项**）：
   - Settings（设置）
   - Keyboard Shortcuts（快捷键）
   - Extensions（扩展）✅ 重要
   - User Snippets（用户代码片段）
   - UI State（界面状态）

6. 点击 `Sign in & Turn on`

#### 2. 在远程 VS Code 中同步

1. **连接到远程服务器**（`ssh meme-dev`）
2. **打开项目文件夹**：`/root/projects/meme-server`
3. **开启 Settings Sync**：
   - 按 `Cmd + Shift + P`
   - 输入 `Settings Sync: Turn On Settings Sync`
   - 使用**相同账号**登录
4. **等待自动下载和安装插件**（约 2-5 分钟）

5. **重新加载窗口**：
   - 按 `Cmd + Shift + P`
   - 输入 `Developer: Reload Window`

**完成！** 🎉 所有插件已自动安装到远程服务器。

---

## 方法 2：使用推荐扩展（半自动）⭐⭐⭐⭐

项目中已添加 `.vscode/extensions.json` 文件，包含推荐的扩展。

### 使用步骤

1. **在远程 VS Code 中打开项目**
2. **VS Code 会提示**："此工作区推荐了一些扩展"
3. **点击 "安装所有"** 或 **"显示推荐"**
4. **等待安装完成**

### 查看推荐扩展

- 按 `Cmd + Shift + X` 打开扩展面板
- 输入 `@recommended`
- 显示所有推荐扩展

---

## 方法 3：导出/导入插件列表（手动）⭐⭐⭐

### 步骤 1：导出本地插件列表

在**本地终端**执行：

```bash
# 导出所有插件 ID
code --list-extensions > ~/vscode-extensions.txt

# 查看列表
cat ~/vscode-extensions.txt
```

### 步骤 2：生成安装脚本

```bash
# 生成安装命令
cat ~/vscode-extensions.txt | xargs -L 1 echo code --install-extension > ~/install-vscode-extensions.sh

# 添加 shebang
echo "#!/bin/bash" | cat - ~/install-vscode-extensions.sh > temp && mv temp ~/install-vscode-extensions.sh

# 设置执行权限
chmod +x ~/install-vscode-extensions.sh

# 查看脚本内容
cat ~/install-vscode-extensions.sh
```

### 步骤 3：复制脚本到远程服务器

```bash
# 复制到远程服务器
scp ~/install-vscode-extensions.sh meme-dev:~/

# 或手动复制内容
cat ~/install-vscode-extensions.sh
# 然后在远程服务器上创建文件并粘贴
```

### 步骤 4：在远程服务器上安装

**SSH 连接到服务器**：

```bash
ssh meme-dev
```

**执行安装脚本**：

```bash
# 如果复制了脚本文件
~/install-vscode-extensions.sh

# 或手动逐个安装（示例）
code --install-extension golang.go
code --install-extension vue.volar
code --install-extension dbaeumer.vscode-eslint
# ... 更多插件
```

---

## 方法 4：批量安装核心插件（快速）⭐⭐⭐⭐

如果只想安装必要的插件，可以在远程服务器上快速执行：

### 在远程 VS Code 终端执行

连接到 `meme-dev` 后，打开终端（`` Ctrl + ` ``），执行：

```bash
# 安装核心开发插件
code --install-extension golang.go                    # Go 开发
code --install-extension vue.volar                     # Vue 3 支持
code --install-extension dbaeumer.vscode-eslint        # ESLint
code --install-extension esbenp.prettier-vscode        # 代码格式化
code --install-extension eamodio.gitlens               # Git 增强
code --install-extension editorconfig.editorconfig     # EditorConfig
code --install-extension christian-kohler.path-intellisense  # 路径智能提示
code --install-extension christian-kohler.npm-intellisense   # NPM 智能提示
code --install-extension formulahendry.auto-close-tag  # 自动闭合标签
code --install-extension formulahendry.auto-rename-tag # 自动重命名标签
code --install-extension vscode-icons-team.vscode-icons # 图标主题

echo "✅ 核心插件安装完成！"
```

### 重新加载窗口

安装完成后：

1. 按 `Cmd + Shift + P`
2. 输入 `Developer: Reload Window`
3. 等待窗口重新加载

---

## 验证安装

### 检查已安装的插件

在远程 VS Code 中：

```bash
# 列出所有已安装插件
code --list-extensions

# 检查特定插件是否安装
code --list-extensions | grep golang.go
```

### 通过 UI 查看

1. 按 `Cmd + Shift + X` 打开扩展面板
2. 查看 "INSTALLED" 标签页
3. 确认所有需要的插件都已安装

---

## 我的推荐

### 个人开发者

**使用方法 1：Settings Sync**

- 一次配置，永久同步
- 换电脑也能快速恢复环境

### 团队协作

**使用方法 2：推荐扩展**

- 确保团队成员使用相同的工具
- 新成员快速上手

### 快速体验

**使用方法 4：批量安装核心插件**

- 只安装必要插件
- 快速开始开发

---

## 常见问题

### Q1: Settings Sync 同步失败？

**解决方法**：

```bash
# 1. 退出登录
Cmd + Shift + P → Settings Sync: Sign Out

# 2. 清除缓存
rm -rf ~/.vscode/extensions/*

# 3. 重新登录
Cmd + Shift + P → Settings Sync: Turn On
```

### Q2: 插件安装很慢？

**解决方法**：

在远程服务器上配置代理（可选）：

```bash
# 编辑 VS Code 设置
code ~/.vscode-server/data/Machine/settings.json

# 添加代理配置
{
  "http.proxy": "http://your-proxy:port"
}
```

或者手动下载插件并安装：

```bash
# 1. 从 VS Code Marketplace 下载 .vsix 文件
# 2. 上传到服务器
scp extension.vsix meme-dev:~/

# 3. 在远程安装
code --install-extension ~/extension.vsix
```

### Q3: 如何卸载远程插件？

```bash
# 卸载特定插件
code --uninstall-extension golang.go

# 查看已安装插件
code --list-extensions
```

---

## 总结

| 方法              | 优势               | 适用场景        |
| :---------------- | :----------------- | :-------------- |
| **Settings Sync** | 全自动，多设备同步 | ⭐ 推荐所有用户 |
| **推荐扩展**      | 团队统一，自动提示 | ⭐ 团队协作项目 |
| **导出/导入**     | 完全控制，离线可用 | ⭐ 网络受限环境 |
| **批量安装**      | 快速简单           | ⭐ 快速体验     |

**我的建议**：

1. **首选 Settings Sync**：最省心，一次配置永久有效
2. **配合推荐扩展**：确保项目必需插件都已安装
3. **定期更新插件**：保持工具链最新

祝开发愉快！🎉
