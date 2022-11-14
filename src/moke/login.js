let Mock=require('mockjs')
Mock.setup({timeout:1000})
Mock.mock('../moke/login.js','post',function(options){
    let data=JSON.parse(options.body)
    let userName=data.userName
    let password=data.password
    if(userName=='tom' && password==123){
        return Mock.mock({"code":"10001","msg":"ok"})
    }else{
        return Mock.mock({"code":"10002","msg":"用户名或密码错误"})
    }
})