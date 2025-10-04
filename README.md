# InvestHub - 创新型孵化投资平台

> **Where Innovation Meets Investment** - 让小额投资者通过区块链技术参与创业股权投资

## 🎯 项目简介

InvestHub 是一个创新型的众筹投资平台，参考 [Wellfound](https://wellfound.com/)、Republic、Seedrs 等知名平台的设计风格，为投资者和创业项目搭建桥梁。

**核心特点：**
- 💰 低门槛投资（€100起）
- 🔒 区块链技术保障
- 📊 透明的项目展示
- 🚀 精选优质创业项目

## 🛠️ 技术栈

- **前端框架**: React 18 + Vite
- **路由**: React Router v6
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **部署**: Vercel / Netlify

## 📦 安装与运行

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:3000` 查看网站

### 3. 构建生产版本

```bash
npm run build
```

### 4. 预览生产构建

```bash
npm run preview
```

## 📁 项目结构

```
InvestWeb/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # 导航栏
│   │   └── Footer.jsx          # 页脚
│   ├── pages/
│   │   ├── Home.jsx            # 首页
│   │   ├── Projects.jsx        # 项目列表
│   │   ├── ProjectDetail.jsx   # 项目详情
│   │   ├── HowItWorks.jsx      # 如何运作
│   │   ├── About.jsx           # 关于我们
│   │   ├── Returns.jsx         # 收益说明
│   │   └── Register.jsx        # 注册意向
│   ├── App.jsx                 # 主应用组件
│   ├── main.jsx                # 入口文件
│   └── index.css               # 全局样式
├── index.html                  # HTML模板
├── package.json                # 依赖配置
├── vite.config.js              # Vite配置
├── tailwind.config.js          # Tailwind配置
└── README.md                   # 项目文档
```

## 🌟 功能页面

| 页面 | 路由 | 说明 |
|------|------|------|
| **首页** | `/` | Hero区域 + 平台优势 + 热门项目 + 数据展示 |
| **项目列表** | `/projects` | 所有项目卡片 + 筛选功能 |
| **项目详情** | `/projects/:id` | 项目完整信息 + 投资计算器 + Tab导航 |
| **如何运作** | `/how-it-works` | 5步投资流程说明 |
| **关于我们** | `/about` | 平台使命 + 价值观 + 统计数据 |
| **收益说明** | `/returns` | 收益计算器 + 收益来源说明 |
| **注册意向** | `/register` | 意向收集表单 |

## 🎨 设计风格

参考 Wellfound 的设计理念：

- ✅ **极简主义**: 清爽的界面，聚焦核心内容
- ✅ **大标题**: 醒目的标题吸引注意力
- ✅ **数据驱动**: 突出展示关键数据和指标
- ✅ **清晰CTA**: 明确的行动号召按钮
- ✅ **卡片设计**: 统一的卡片式布局
- ✅ **微动效**: 流畅的过渡和悬停效果

### 配色方案

- **主色**: Primary Blue (#0284c7, #0369a1)
- **辅助色**: Accent Green (#10b981)
- **背景**: Gray 50-100
- **文字**: Gray 600-900

## 📝 下一步开发

### MVP 阶段（已完成）
- [x] 项目脚手架搭建
- [x] 核心页面开发（首页、项目列表、详情页）
- [x] 导航和路由配置
- [x] 响应式设计

### 增强功能（待开发）
- [ ] 投资流程Demo页面
- [ ] FAQ页面
- [ ] 区块链技术说明页
- [ ] 表单数据对接（Google Sheets/Airtable）
- [ ] 更多项目数据
- [ ] 用户认证系统
- [ ] 真实支付集成

## 🚀 部署

### Vercel 部署（推荐）

1. 推送代码到 GitHub
2. 导入到 Vercel
3. 自动构建和部署

### 手动部署

```bash
npm run build
# 将 dist/ 目录部署到任何静态托管服务
```

## 📚 参考资源

- **设计参考**: [Wellfound](https://wellfound.com/), [Republic](https://republic.com/), [Seedrs](https://seedrs.com/)
- **React 文档**: [react.dev](https://react.dev/)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com/)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion/)

## 📄 License

MIT License

## 👥 贡献

欢迎提交 Issue 和 Pull Request！

---

**Made with ❤️ by InvestHub Team**


