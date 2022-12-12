module.exports = {
    title: 'lonjin-helper',
    base: "/",
    description: 'lonjinhelper',
    themeConfig: {
        nav: [
            // 一级导航
            { text: '文档', link: '/guide/' },
            // 下拉列表导航
            //   {
            //     text: '了解更多',
            //     items: [
            //       { text: 'github', link: 'https://github.com/ShuQingX/vue-comp-test', target: '_blank' },
            //       { text: 'preview', link: 'https://shuqingx.github.io/vue-comp-test/', target: '_blank' }
            //     ]
            //   }
        ],
        sidebar: {
            '/guide/': [
                ['', '介绍'], // '' 等价于 /guide/
                {
                    title: '数据结构相关',
                    collapsable: false,
                    children: [
                        ['../guide/formatConfig.md', 'formatConfig'],
                        ['../guide/fieldPatching.md', 'fieldPatching'],
                        ['../guide/filterEmptyParameters.md', 'filterEmptyParameters'],
                        ['../guide/getLabel.md', 'getLabel'],
                        ['../guide/getNameByEnum.md', 'getNameByEnum'],
                    ]
                },
                {
                    title: '金额处理',
                    collapsable: false,
                    children: [
                        ['../guide/numberFormat.md', 'numberFormat'],
                    ]
                },
                {
                    title: '辅助函数',
                    collapsable: false,
                    children: [
                        ['../guide/sleep.md', 'sleep'],
                    ]
                }
              ]
        }
        
    }
    
}