# 日本旅游行程网站

🏯 一个带有浓厚日式风格的旅游行程规划网站，使用Astro和Tailwind CSS构建。

## 功能特点

- 🗾 浓厚日式风格设计
- 📱 响应式布局，适配手机和桌面设备
- 📝 Markdown内容驱动
- 🗺️ 集成Google Maps
- 📷 基于行程点的图片展示
- 🔄 可展开/收起的行程卡片
- 🔗 支持QR码分享行程

## 预览项目

1. 克隆仓库
   ```bash
   git clone [仓库地址]
   cd [仓库名]
   ```

2. 安装依赖
   ```bash
   npm install
   ```

3. 启动开发服务器
   ```bash
   npm run dev
   ```

4. 在浏览器中打开
   ```
   http://localhost:4321
   ```

## 添加新的行程

1. 在 `src/content/itinerary/` 目录下创建新的Markdown文件
2. 遵循以下格式：

```md
---
title: "Day X - 行程标题"
date: "202X-XX-XX"
cover: "/images/cover.jpg"
---

## 🕘 行程时间表

### 09:00 地点名称
> 地点描述和注意事项
> 📍 `Google Maps嵌入链接`
> 🖼️ `图片链接`

---

### 10:30 下一个地点
> 地点描述
> 📍 `Google Maps嵌入链接`
> 🖼️ `图片链接`
```

## 部署到GitHub Pages

1. 修改 `astro.config.mjs` 中的 `site` 和 `base` 配置
   ```js
   site: 'https://你的用户名.github.io',
   base: '/仓库名',
   ```

2. 创建部署脚本（可选）
   在 `package.json` 中添加:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. 安装 gh-pages 包（可选）
   ```bash
   npm install -D gh-pages
   ```

4. 构建并部署
   ```bash
   npm run deploy
   ```

5. 或者直接在GitHub仓库设置中启用GitHub Pages
   - 在仓库设置中找到Pages选项
   - 选择分支和目录（通常是gh-pages分支或main分支的docs目录）
   - 点击保存

## 项目结构

```
/
├── public/           # 静态资源
├── src/
│   ├── components/   # 组件
│   ├── content/      # 内容集合
│   │   └── itinerary/   # 行程Markdown文件
│   ├── layouts/      # 布局组件
│   ├── pages/        # 页面
│   └── styles/       # 样式文件
└── package.json
```

## 命令

| 命令                      | 操作                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | 安装依赖                                        |
| `npm run dev`             | 启动本地开发服务器，地址为 `localhost:4321`      |
| `npm run build`           | 构建生产站点到 `./dist/` 目录                   |
| `npm run preview`         | 在部署前本地预览构建结果                          |
