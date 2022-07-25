const { defaultTheme } = require('vuepress')


module.exports = {
    lang: 'zh-CN', //站点语言
    title: 'chjina Wiki !', //站点名称
    description: '这是我的第一个 VuePress 站点',//站点标题
    pagePatterns:['**/*.md', '!.vuepress', '!node_modules'], //屏蔽文件被 VuePress 处理
    markdown:{
      // anchor:false  //取消markdown 锚点设置
    },
     
    theme: defaultTheme({
      docsBranch:'main',
      lastUpdatedText: '最近更新时间' ,  //文章页面显示最近更新时间  git
      contributorsText:'贡献者', //文章显示贡献者 git
      notFound:['Not Found'],
      navbar: [
        {
          text: '首页',
          link: '/',
        },
       {
          text: '数通',
          children: [
            {
              text: '华三',
              link: '/CT/H3C',
            },
            {
              text: '锐捷',
              link: '/CT/RuiJie',
            },
            {
              text: '华为',
              link: '/CT/HuaWe',
            },
            {
              text: '戴尔',
              link: '/CT/DEll',
            },
          ],
        },
        {
          text: '服务器',
          children: [
            {
              text: '戴尔',
              link: '/IT/Dell',
            },
            {
              text: '惠普',
              link: '/IT/HP',
            },
            {
              text: '浪潮',
              link: '/IT/Inspur',
            },
          ],
        },
        {
          text: '虚拟化',
          children: [
            {
              text: 'Vmware',
              link: '/VT/Vmware',
            },
          ],
        },   
      ], //上方导航栏

      sidebar: {
        '/reference/': [
          {
            text: 'VuePress Reference',
            collapsible: true,
            children: ['/reference/cli.md', '/reference/config.md'],
          },
          {
            text: 'Bundlers Reference',
            collapsible: true,
            children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
          },
        ],
      },

    }),


  }