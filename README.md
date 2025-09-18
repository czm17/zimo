# 简洁响应式网站模板

这是一个使用原生 HTML、CSS 与 JavaScript 构建的基础网站模板，开箱即用，适合个人主页、产品落地页或项目展示。

## 项目结构

```
.
 index.html
 assets
     css
        styles.css
     js
         main.js
```

## 使用方式

- 直接用浏览器打开 `index.html` 即可预览。
- 推荐在本地以静态服务器方式运行（可获得更佳体验）：
  - VS Code: 安装 Live Server 扩展，右键 `index.html` 选择 "Open with Live Server"。
  - Node.js: `npx serve` 然后在浏览器访问提示地址。

## 自定义

- 颜色与主题：在 `assets/css/styles.css` 的 `:root` 中修改 CSS 变量。
- 品牌与文案：在 `index.html` 中调整导航、标题与各 section 的内容。
- 交互：在 `assets/js/main.js` 中扩展移动菜单、平滑滚动等逻辑。

## 许可证

MIT