import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/gr-component-doc/",
  cleanUrls: true,
  lastUpdated: true,
  title: "GrComponent",
  description: "仿战双的组件库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: '主页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '开发指南',
        items: [
          { text: '快速上手', link: '/start' },
        ]
      },
      {
        text: '基础组件',
        items: [
          { text: 'Container 布局容器', link: '/gr-container' },
        ]
      },
      {
        text: '展示组件',
        items: [
          { text: 'Carousel 轮播图', link: '/gr-carousel' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LuminaQAQ' }
    ]
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('gr-')
      }
    }
  },
})
