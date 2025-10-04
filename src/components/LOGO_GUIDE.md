# InvestHub Logo 使用指南

## 🎨 Logo设计理念

新Logo体现了InvestHub的核心价值：

### 设计元素
1. **区块链方块** - 三个递增的方块代表区块链技术和成长趋势
2. **增长曲线** - 连接线展示投资增长轨迹
3. **欧元符号** - 右下角的€符号象征低门槛投资（€100起）
4. **渐变色彩** - 蓝色到紫色的渐变代表科技与创新

### 颜色方案
- **主渐变**: 蓝色 (#2563eb) → 紫色 (#9333ea)
- **强调色**: 绿色 (#10b981) - 代表成长和收益

---

## 📦 组件使用

### 1. LogoMark (完整Logo + 文字)
最常用的版本，适合导航栏和页头

```jsx
import { LogoMark } from './components/Logo'

// 默认尺寸
<LogoMark />

// 小尺寸 (8x8)
<LogoMark size="small" />

// 默认尺寸 (10x10)
<LogoMark size="default" />

// 大尺寸 (12x12)
<LogoMark size="large" />

// 白色版本（深色背景）
<LogoMark variant="white" />

// 深色版本
<LogoMark variant="dark" />
```

### 2. Logo (纯图标，带完整设计)
只有图标，无文字

```jsx
import Logo from './components/Logo'

<Logo className="w-10 h-10" variant="color" />
<Logo className="w-16 h-16" variant="white" />
```

### 3. LogoIcon (简化版图标)
极简版本，适合favicon或小尺寸显示

```jsx
import { LogoIcon } from './components/Logo'

<LogoIcon className="w-8 h-8" />
```

---

## 🎯 使用场景

### ✅ 已应用位置
- `Header.jsx` - 导航栏左上角
- `Footer.jsx` - 页脚品牌区域

### 💡 建议使用场景
- **Favicon** - 使用 LogoIcon 导出为 .ico
- **社交媒体分享** - 使用大尺寸 Logo
- **加载动画** - Logo可以添加旋转动画
- **404页面** - 使用大尺寸居中显示
- **邮件签名** - 使用 LogoMark

---

## 🎨 颜色变体

### Color (默认)
适合白色背景
```jsx
<LogoMark variant="color" />
```

### White
适合深色背景（如Footer）
```jsx
<LogoMark variant="white" />
```

### Dark
适合浅色背景的深色版本
```jsx
<LogoMark variant="dark" />
```

---

## 📐 尺寸规范

| 尺寸 | Logo大小 | 文字大小 | 使用场景 |
|------|----------|----------|----------|
| small | 8x8 (2rem) | text-lg | Footer, 侧边栏 |
| default | 10x10 (2.5rem) | text-2xl | Header, 导航栏 |
| large | 12x12 (3rem) | text-3xl | 着陆页, Hero区域 |

---

## 🚫 使用规范

### ❌ 不要
- 改变Logo的颜色比例
- 拉伸或压缩Logo
- 在Logo周围添加边框
- 旋转Logo（除非是加载动画）
- 改变Logo内部元素的位置

### ✅ 可以
- 调整整体大小
- 使用提供的颜色变体
- 添加hover效果（如透明度变化）
- 在链接中使用

---

## 🔧 技术细节

### SVG优势
- 矢量图形，无损缩放
- 文件体积小
- 支持动画
- 可通过CSS控制颜色

### 性能
- 纯SVG，无外部依赖
- 内联渲染，无额外HTTP请求
- 支持Tree-shaking

---

## 📸 导出Logo（用于外部使用）

如需导出Logo为图片文件：

1. **在浏览器中打开项目**
2. **打开开发者工具 (F12)**
3. **运行以下代码**:

```javascript
// 导出PNG
const svg = document.querySelector('svg')
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
const img = new Image()

// 设置尺寸
canvas.width = 512
canvas.height = 512

img.onload = () => {
  ctx.drawImage(img, 0, 0, 512, 512)
  const png = canvas.toDataURL('image/png')
  const link = document.createElement('a')
  link.download = 'investhub-logo.png'
  link.href = png
  link.click()
}

img.src = 'data:image/svg+xml;base64,' + btoa(svg.outerHTML)
```

---

## 🎯 品牌一致性

Logo是品牌识别的核心，请在所有平台保持一致使用：

- 📱 移动应用图标
- 🌐 网站favicon
- 📧 邮件模板
- 📄 PDF文档
- 🎥 视频封面
- 📱 社交媒体头像

---

**创建日期**: 2025-10-04  
**版本**: 1.0  
**设计者**: InvestHub Design Team

