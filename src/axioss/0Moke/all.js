
let Mock=require('mockjs')
Mock.setup({timeout:2000})
Mock.mock('all.js',{
    "data|2-6":[{
        'id|+1':88,
        'name|1':["@cname","@cname","@cname","@cname","@cname","@cname"],
        'age|18-28':0,
        'sex|1':['男','女']
    }]

})