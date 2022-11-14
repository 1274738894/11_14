let Mock=require('mockjs')
Mock.setup({timeout:2000})
Mock.mock('data.js','post',(options)=>{
    console.log(options);
    let url=new URLSearchParams(options.body)
    let name=url.get('name')
    let age=url.get('age')
    return Mock.mock({
        "data|1-6": [{   // 随机生成1到6个数组元素
            'id|+1': 88,    // 属性值自动加 1，初始值为88
            'name|1': ["@cname","@cname","@cname",name],
            'age|1': [18,19,23,age,22],   // 18至28以内随机整数, 0只是用来确定类型
            'sex|1':['男',"女"]
        }]
    })
})