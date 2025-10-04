# 🚀 Vercel 部署指南

## ✅ 已完成步骤

1. ✅ 代码已推送到GitHub
   - Repository: https://github.com/Gamesome666/InvestWeb
   - Commit: `feat: 完成所有16个页面 + 新Logo + Wellfound风格首页`

## 🌐 方式一：通过Vercel网站部署（最简单）

### 首次部署

1. **访问** [vercel.com](https://vercel.com)
2. **点击** "Add New..." → "Project"
3. **选择** "Import Git Repository"
4. **选择** 你的GitHub账号和仓库 `InvestWeb`
5. **配置项目**：
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```
6. **点击** "Deploy"
7. **等待** 1-3分钟部署完成

### 后续更新（自动部署）

✨ **一旦设置完成，每次推送到GitHub都会自动部署！**

```bash
# 以后只需要：
git add .
git commit -m "your message"
git push origin main
# Vercel会自动检测并部署！
```

---

## 🔧 方式二：使用Vercel CLI

### 1. 安装（已完成 ✅）

```bash
npm install -g vercel
```

### 2. 登录

**关闭并重新打开终端**，然后运行：

```bash
vercel login
```

按照提示选择登录方式（GitHub/Email等）

### 3. 首次部署

```bash
vercel
```

按照提示操作：
- Set up and deploy? → Yes
- Which scope? → 选择你的账号
- Link to existing project? → No
- Project name? → investhub（或保持默认）
- Directory? → ./
- Override settings? → No

### 4. 后续更新

```bash
vercel --prod
```

---

## 📊 部署后检查

### ✅ 确认以下功能正常：

- [ ] 首页浮动标签交互效果
- [ ] Logo显示正确
- [ ] 所有16个页面可访问
- [ ] 导航菜单正常
- [ ] 投资流程演示
- [ ] FAQ搜索和筛选
- [ ] 区块链页面
- [ ] 响应式设计（移动端）

### 🔍 测试页面列表

1. 首页: `/`
2. 项目列表: `/projects`
3. 项目详情: `/projects/1`
4. 关于我们: `/about`
5. 如何运作: `/how-it-works`
6. 收益说明: `/returns`
7. 注册页面: `/register`
8. 投资演示: `/invest/demo`
9. 选择金额: `/invest/amount`
10. 确认信息: `/invest/confirm`
11. 完成页面: `/invest/success`
12. 区块链: `/blockchain`
13. FAQ: `/faq`
14. 感谢页: `/thank-you`

---

## 🔧 环境变量（如需要）

如果项目需要环境变量，在Vercel Dashboard中配置：

1. 进入项目设置
2. Settings → Environment Variables
3. 添加变量（如API keys等）

---

## 📝 自定义域名（可选）

### 添加自定义域名

1. 在Vercel Dashboard中打开项目
2. Settings → Domains
3. 添加你的域名
4. 按照指示配置DNS

---

## 🐛 常见问题

### Q: 部署失败？

**检查：**
1. `package.json` 中的依赖是否完整
2. Build命令是否正确: `npm run build`
3. 查看部署日志找到错误信息

### Q: 页面404？

**确认：**
1. `vercel.json` 配置了路由重写
2. React Router使用的是BrowserRouter

### Q: 样式或图片不显示？

**检查：**
1. 资源路径是否正确
2. Tailwind CSS配置是否正确
3. PostCSS配置

---

## 📦 项目信息

- **框架**: React + Vite
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **路由**: React Router DOM v6

---

## 🎉 部署成功后

你的网站将在以下地址可访问：
- **Production**: `https://your-project.vercel.app`
- **每次推送**: 会生成预览URL

### 分享你的网站

1. 复制Vercel提供的URL
2. 分享给团队或客户
3. 每次更新会自动部署新版本

---

**最后更新**: 2025-10-04  
**Git Commit**: be1d3e2  
**部署状态**: ✅ 已推送到GitHub，等待Vercel部署

