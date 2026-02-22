import { defineConfig } from 'vitepress'

const learningSidebar = [
  {
    text: "学习目录",
    items: [
      { text: "资源目录首页", link: "/catalog/overview" }
    ]
  },
  {
    text: "法学生必备技能库",
    collapsed: false,
    items: [
      { text: "总览", link: "/skills/overview" },
      { text: "优质法律公众号推荐", link: "/skills/wechat-accounts" },
      { text: "法律检索与数据库", link: "/skills/legal-research" },
      { text: "法条与案例阅读方法", link: "/skills/statute-case-reading" },
      { text: "法学写作基础", link: "/skills/legal-writing" },
      { text: "文献管理与笔记系统", link: "/skills/reference-notes" },
      { text: "学术表达与答辩能力", link: "/skills/presentation-defense" },
      { text: "实习与求职技能", link: "/skills/internship-career" },
      { text: "AI 辅助学习与研究", link: "/skills/ai-assistant" }
    ]
  },
  {
    text: "基础法学门径",
    collapsed: false,
    items: [
      { text: "总览", link: "/fundamentals/overview" },
      { text: "法学第一课", link: "/fundamentals/lesson-01-intro-law" },
      { text: "法理学与法律方法论", link: "/fundamentals/jurisprudence-method" },
      { text: "宪法与行政法基础", link: "/fundamentals/constitutional-administrative" },
      { text: "民法总论与物债入门", link: "/fundamentals/civil-general-property-obligation" },
      { text: "刑法总论与分论入门", link: "/fundamentals/criminal-general-specific" },
      { text: "民诉与证据法基础", link: "/fundamentals/civil-procedure-evidence" },
      { text: "刑诉与程序保障", link: "/fundamentals/criminal-procedure" },
      { text: "商法与经济法入门", link: "/fundamentals/commercial-economic" },
      { text: "国际法与国际私法导论", link: "/fundamentals/international-private" }
    ]
  },
  {
    text: "前沿交叉学科探索",
    collapsed: false,
    items: [
      { text: "总览", link: "/frontier/overview" },
      { text: "人工智能与法律治理", link: "/frontier/ai-governance" },
      { text: "数据合规与个人信息保护", link: "/frontier/data-compliance-privacy" },
      { text: "平台治理与竞争法", link: "/frontier/platform-antitrust" },
      { text: "金融科技与监管科技", link: "/frontier/fintech-regtech" },
      { text: "计算法学与法律数据分析", link: "/frontier/computational-law" },
      { text: "法律实证研究方法", link: "/frontier/empirical-legal-studies" },
      { text: "数字证据与网络犯罪治理", link: "/frontier/digital-evidence-cybercrime" },
      { text: "全球科技治理与比较法观察", link: "/frontier/global-tech-comparative-law" }
    ]
  }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "法律学习资源共享平台",
  description:
    "法律学习资源共享平台是一个面向法学学人、法律从业者及自学者的数字化知识库。本项目由西安交通大学法学院学生发起，旨在解决法学学习过程中资源碎片化、检索效率低下的问题。平台通过系统化的目录结构，整合从法学基础教育到前沿交叉学科的研究资料，构建一个开放、持续更新的学术共同体。",
  lastUpdated: true,
  cleanUrls: true,
  base: "/lawstudy_platform/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "资源目录", link: "/catalog/overview" },
      { text: "使用指南", link: "/guide/intro" },
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
      "/catalog/": learningSidebar,
      "/skills/": learningSidebar,
      "/fundamentals/": learningSidebar,
      "/frontier/": learningSidebar,
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
    editLink: {
      pattern: "https://github.com/SmallsmallQ/lawstudy_platform/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页"
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
    },
    giscus: {
      enabled: true,
      repo: "SmallsmallQ/lawstudy_platform",
      repoId: "R_kgDORWHBUw",
      category: "General",
      categoryId: "DIC_kwDORWHBU84C2-2k",
      mapping: "pathname",
      strict: "0",
      reactionsEnabled: "1",
      inputPosition: "bottom",
      theme: "preferred_color_scheme",
      lang: "zh-CN"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/SmallsmallQ/lawstudy_platform" }
    ]
  }
})
