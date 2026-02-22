# 法律学习资源共享平台

本仓库是法律学习资源共享平台的文档站点，目标是通过“结构化目录 + 可检索规范 + 可复用模板”降低法律学习的检索与复盘成本。

## 快速开始

```bash
pnpm install
pnpm docs:dev
```

构建与预览：

```bash
pnpm docs:build
pnpm docs:preview
```

## 文档结构

- `docs/index.md` 主页
- `docs/guide/` 使用指南与学习路径
- `docs/catalog/` 学科目录与资源结构
- `docs/tools/` 检索规范与模板
- `docs/community/` 共建与提交流程
- `docs/about/` 项目信息

## 贡献方式

从修正目录名称到补充课程资料，任何贡献都欢迎。请先阅读 `docs/community/contribute.md` 与 `docs/community/submit.md`。

## 站点配置

- VitePress 配置：`docs/.vitepress/config.mts`
- 自定义主题样式：`docs/.vitepress/theme/custom.css`

## 部署

仓库已包含 GitHub Pages 的部署工作流：`.github/workflows/deploy.yml`。
