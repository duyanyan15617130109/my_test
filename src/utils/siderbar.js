export default [{
        label: '首页',
        value: '1',
        tab: '1',
        component: 'homePage'
    },
    {
        label: '政策规则',
        value: '2',
        component: 'policyRules',
        children: [{
                label: '二级类目00',
                value: '11',
                children: [{
                        label: '三级类目999',
                        value: '111',
                        children: [{
                            label: '四级类目999',
                            value: '1111',
                            component: 'policyRules',
                        }],
                    },
                    {
                        label: '三级类目1',
                        value: '112',
                        tab: '1111',
                        component: 'policyRules',

                    },
                    {
                        label: '三级类目2',
                        value: '113',
                        tab: '1111',
                        component: 'policyRules',
                    },
                ],
            },
            {
                label: '二级类目1',
                value: '12',
                tab: '1111',
                component: 'policyRules',
            },
            {
                label: '二级类目3',
                value: '13',
                tab: '1111',
                component: 'policyRules',
            },
        ],
    },
    {
        label: '标准规范',
        value: '3',
        component: 'standard',
        children: [{
                label: '二级类目00',
                value: '31',
                children: [{
                        label: '三级类目999',
                        value: '311',
                        tab: '311',
                        component: 'standard',
                    },
                    {
                        label: '三级类目1',
                        value: '312',
                        tab: '311',
                        component: 'standard',
                    },
                    {
                        label: '三级类目2',
                        value: '313',
                        tab: '311',
                        component: 'standard',
                    },
                ],
            },
            {
                label: '二级类目1',
                value: '32',
                tab: '311',
                component: 'standard',
            },
            {
                label: '二级类目3',
                value: '33',
                tab: '311',
                component: 'standard',
            },
        ],
    },
    {
        label: '电网概况',
        value: '4',
        tab: '4',
        component: 'standard',
    },
    {
        label: '电力供需与市场约束',
        value: '5',
        tab: '5',
        component: 'standard',
    },
    {
        label: '电网运行情况',
        value: '6',
        tab: '6',
        component: 'standard',
    },
    {
        label: '电力市场运营信息',
        value: '7',
        tab: '7'
    },
    {
        label: '市场成员',
        value: '8',
        tab: '8',
        component: 'member',
    },
    {
        label: '现货专栏',
        value: '9',
        tab: '9'
    },
    {
        label: '我的信息',
        value: '10',
        tab: '10'
    },
];