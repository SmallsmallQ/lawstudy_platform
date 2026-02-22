import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "法律学习资源共享平台",
  description:
    "法律学习资源共享平台是一个面向法学学人、法律从业者及自学者的数字化知识库。本项目由西安交通大学法学院学生发起，旨在解决法学学习过程中资源碎片化、检索效率低下的问题。平台通过系统化的目录结构，整合从法学基础教育到前沿交叉学科的研究资料，构建一个开放、持续更新的学术共同体。",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "开始", link: "/guide/intro" },
      { text: "资源目录", link: "/catalog/overview" },
      { text: "工具与模板", link: "/tools/search" },
      { text: "共建", link: "/community/contribute" },
      { text: "关于", link: "/about/project" }
    ],

    sidebar: {
      "/guide/": [
        {
          text: "使用指南",
          items: [
            { text: "平台介绍", link: "/guide/intro" },
            { text: "学习路径", link: "/guide/roadmap" },
            { text: "学习方法", link: "/guide/methods" }
          ]
        }
      ],
      "/catalog/": [
        {
          text: "资源目录",
          items: [
            { text: "目录总览", link: "/catalog/overview" },
            { text: "法学基础", link: "/catalog/basic" },
            { text: "民商法", link: "/catalog/civil" },
            { text: "刑法", link: "/catalog/criminal" },
            { text: "行政法与公共法", link: "/catalog/administrative" },
            { text: "诉讼与程序法", link: "/catalog/procedure" },
            { text: "国际法", link: "/catalog/international" },
            { text: "经济法与金融法", link: "/catalog/econ" },
            { text: "比较法与科技法", link: "/catalog/comp-tech" }
          ]
        }
      ],
      "/tools/": [
        {
          text: "工具与模板",
          items: [
            { text: "检索与标注", link: "/tools/search" },
            { text: "写作与笔记模板", link: "/tools/templates" }
          ]
        }
      ],
      "/community/": [
        {
          text: "共建与社区",
          items: [
            { text: "贡献指南", link: "/community/contribute" },
            { text: "提交流程", link: "/community/submit" },
            { text: "常见问题", link: "/community/faq" },
            { text: "更新日志", link: "/community/changelog" }
          ]
        }
      ],
      "/about/": [
        {
          text: "关于",
          items: [
            { text: "项目理念", link: "/about/project" },
            { text: "联系方式", link: "/about/contact" }
          ]
        }
      ]
    },

    search: {
      provider: "local"
    },
    outline: [2, 3],
    lastUpdated: {
      text: "更新于"
    },
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
    footer: {
      message: "共建、可追溯、可复用的法律学习资源目录。",
      copyright: "Copyright © 2026 法律学习资源共享平台"
    }
  }
})
