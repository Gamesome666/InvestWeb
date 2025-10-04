# 🎬 动画系统使用指南

## ✨ 新增动画组件

### 📦 组件位置
- `src/components/PageTransition.jsx` - 页面动画组件
- `src/components/Button.jsx` - 按钮组件
- `src/components/Card.jsx` - 卡片组件

---

## 🎯 页面动画组件

### PageTransition - 页面入场动画
所有页面的根包装器，提供统一的进入/退出动画

```jsx
import PageTransition from '../components/PageTransition'

export default function MyPage() {
  return (
    <PageTransition>
      {/* 页面内容 */}
    </PageTransition>
  )
}
```

**效果**: 淡入 + 上移20px

---

### FadeInWhenVisible - 滚动显示
元素进入视口时淡入

```jsx
import { FadeInWhenVisible } from '../components/PageTransition'

<FadeInWhenVisible delay={0.2}>
  <h1>标题会在滚动到时淡入</h1>
</FadeInWhenVisible>
```

---

### StaggerContainer + StaggerItem - 交错显示
子元素依次出现

```jsx
import { StaggerContainer, StaggerItem } from '../components/PageTransition'

<StaggerContainer>
  {items.map(item => (
    <StaggerItem key={item.id}>
      <Card>{item.content}</Card>
    </StaggerItem>
  ))}
</StaggerContainer>
```

**效果**: 每个子元素延迟0.1s出现

---

### SlideInFromLeft / SlideInFromRight
从侧边滑入

```jsx
import { SlideInFromLeft } from '../components/PageTransition'

<SlideInFromLeft delay={0.3}>
  <div>从左侧滑入</div>
</SlideInFromLeft>
```

---

### ScaleIn - 缩放进入

```jsx
import { ScaleIn } from '../components/PageTransition'

<ScaleIn>
  <img src="..." />
</ScaleIn>
```

---

## 🔘 按钮组件

### PrimaryButton - 主按钮
渐变背景，主要CTA

```jsx
import { PrimaryButton } from '../components/Button'

<PrimaryButton to="/register">
  Get Started
</PrimaryButton>

// 或带点击事件
<PrimaryButton onClick={handleClick}>
  Submit
</PrimaryButton>
```

**效果**: Hover放大1.05x + 上移2px

---

### SecondaryButton - 次要按钮
白色背景，边框

```jsx
import { SecondaryButton } from '../components/Button'

<SecondaryButton to="/learn-more">
  Learn More
</SecondaryButton>
```

---

### OutlineButton - 轮廓按钮
透明背景，Hover时填充

```jsx
import { OutlineButton } from '../components/Button'

<OutlineButton to="/demo">
  Try Demo
</OutlineButton>
```

---

### GradientButton - 渐变按钮
多色渐变，大型CTA

```jsx
import { GradientButton } from '../components/Button'

<GradientButton to="/invest">
  Start Investing Now
</GradientButton>
```

---

### LoadingButton - 加载按钮
带加载状态

```jsx
import { LoadingButton } from '../components/Button'

<LoadingButton loading={isSubmitting} onClick={handleSubmit}>
  {isSubmitting ? 'Submitting...' : 'Submit'}
</LoadingButton>
```

---

### IconButton - 图标按钮
小型圆形按钮

```jsx
import { IconButton } from '../components/Button'

<IconButton onClick={handleClose}>
  <XIcon className="w-5 h-5" />
</IconButton>
```

---

## 🎴 卡片组件

### Card - 基础卡片
带阴影和Hover效果

```jsx
import { Card } from '../components/Card'

<Card>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

**效果**: Hover时上移8px + 阴影加深

---

### ProjectCard - 项目卡片
专为项目列表设计

```jsx
import { ProjectCard } from '../components/Card'

<ProjectCard>
  <img src={project.image} />
  <div>{project.name}</div>
</ProjectCard>
```

**效果**: Hover时上移10px

---

### FeatureCard - 特色卡片
带渐变边框效果

```jsx
import { FeatureCard } from '../components/Card'

<FeatureCard>
  <h3>Feature Title</h3>
  <p>Feature description</p>
</FeatureCard>
```

**效果**: Hover时显示渐变光晕

---

### StatCard - 统计卡片
数字展示

```jsx
import { StatCard } from '../components/Card'

<StatCard>
  <div className="text-5xl font-bold">€5.2M</div>
  <div>Total Funded</div>
</StatCard>
```

---

### GlassCard - 玻璃态卡片
半透明毛玻璃效果

```jsx
import { GlassCard } from '../components/Card'

<GlassCard>
  <div>Content with glassmorphism effect</div>
</GlassCard>
```

---

## 🎨 动画参数

### 持续时间
- 快速: 0.2s - 0.3s（按钮、小元素）
- 标准: 0.5s - 0.6s（卡片、页面元素）
- 慢速: 0.8s - 1.0s（页面切换、大元素）

### 延迟
- 无延迟: 立即动画
- 小延迟: 0.1s - 0.2s（交错效果）
- 中延迟: 0.3s - 0.5s（强调某个元素）

### 缓动函数
- `easeOut` - 默认，自然减速
- `easeInOut` - 双向缓动
- `spring` - 弹性效果（按钮）
- `linear` - 线性（加载动画）

---

## 📱 响应式考虑

### 移动端优化
```jsx
// 在移动端禁用复杂动画
import { useMediaQuery } from 'react-responsive'

const isMobile = useMediaQuery({ maxWidth: 768 })

<motion.div
  animate={isMobile ? {} : { x: 100 }}
>
```

### 性能优化
```jsx
// 使用 viewport 只触发一次
whileInView={{ opacity: 1 }}
viewport={{ once: true, margin: '-50px' }}
```

---

## 🎯 最佳实践

### ✅ 推荐做法

1. **页面级动画**
```jsx
<PageTransition>
  <div>页面内容</div>
</PageTransition>
```

2. **滚动触发**
```jsx
<FadeInWhenVisible>
  <Section />
</FadeInWhenVisible>
```

3. **列表渲染**
```jsx
<StaggerContainer>
  {items.map(item => (
    <StaggerItem key={item.id}>
      <Item />
    </StaggerItem>
  ))}
</StaggerContainer>
```

### ❌ 避免

1. **过度动画**
- 不要给所有元素添加动画
- 保持动画简洁有目的

2. **性能问题**
- 避免同时动画过多元素
- 不要在滚动时持续触发动画

3. **用户体验**
- 不要阻塞用户交互
- 提供跳过动画的选项

---

## 🚀 已更新页面

### ✅ 完成
- [x] Home.jsx - Wellfound风格浮动标签
- [x] About.jsx - 团队、时间线动画
- [x] Projects.jsx - 项目卡片、筛选动画
- [x] HowItWorks.jsx - 步骤动画、轮换效果

### 🔄 进行中
- [ ] ProjectDetail.jsx - Tab切换动画
- [ ] Returns.jsx - 计算器动画
- [ ] Register.jsx - 表单动画
- [ ] 投资流程页面（4个）
- [ ] Blockchain.jsx
- [ ] FAQ.jsx
- [ ] ThankYou.jsx

---

## 🎬 效果预览

### 页面加载
1. **初始状态**: opacity: 0, y: 20
2. **动画到**: opacity: 1, y: 0
3. **持续时间**: 0.5s
4. **效果**: 页面从下方淡入上移

### 按钮交互
1. **Hover**: scale: 1.05, y: -2
2. **Tap**: scale: 0.98
3. **效果**: 放大并上移，点击时缩小

### 卡片效果
1. **静止**: 正常状态
2. **Hover**: y: -8, shadow加深
3. **效果**: 悬浮感

### 进度条
1. **初始**: width: 0
2. **动画**: width: 实际百分比
3. **持续**: 1s
4. **效果**: 从左到右填充

---

## 📊 性能指标

### 目标
- 首次绘制: < 1s
- 页面加载动画: < 0.5s
- 交互响应: < 100ms
- 60fps 流畅度

### 优化技巧
```jsx
// 1. 使用 transform 而非 position
❌ animate={{ left: 100 }}
✅ animate={{ x: 100 }}

// 2. 避免 layout 动画
❌ animate={{ width: 200 }}
✅ animate={{ scale: 2 }}

// 3. 使用 will-change
className="will-change-transform"

// 4. 限制动画元素数量
{items.slice(0, 10).map(...)}
```

---

## 🔧 故障排除

### 动画不显示？
1. 确认 Framer Motion 已安装
2. 检查组件是否正确导入
3. 查看控制台错误

### 动画卡顿？
1. 减少同时动画的元素
2. 使用 transform 而非其他属性
3. 检查是否有复杂计算

### 移动端性能？
1. 简化动画效果
2. 减少动画持续时间
3. 使用 CSS 动画替代

---

**版本**: 1.0  
**创建日期**: 2025-10-04  
**状态**: 持续更新中

