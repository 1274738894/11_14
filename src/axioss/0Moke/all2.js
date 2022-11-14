let Mock=require('mockjs')
Mock.setup({timeout:4000})
Mock.mock('data.js',{
    'data|2':[{
        'prodId|+1': 88,    // 属性值自动加 1，初始值为88
        'prodName|1': ['计算机',"手机","桌子"],
        'price|1':[1000,1200,800,900]   // 18至28以内随机整数, 0只是用来确定类型
    }]
})