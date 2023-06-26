module.exports = {
    title: 'lonjin-helper',
    base: "/lonjin-helper/",
    description: 'lonjinhelper',
    themeConfig: {
        nav: [
            // 一级导航
            { text: '文档', link: '/guide/' },
            { text: '联系我', link: 'https://lonjinup.github.io/post/about/', target: '_blank' },
            { text: 'github', link: 'https://github.com/LonJinUp/lonjin-helper', target: '_blank' },
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
                        ['../guide/serializeObject.md', 'serializeObject'],
                        ['../guide/sortObjectFields.md', 'sortObjectFields'],
                    ]
                },
                {
                    title: '数据验证',
                    collapsable: false,
                    children: [
                        ['../guide/checkFormRules.md', 'checkFormRules'],
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
                    title: '浏览器相关',
                    collapsable: false,
                    children: [
                        ['../guide/storage.md', 'storage'],
                        ['../guide/scrollTop.md', 'scrollTop'],
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