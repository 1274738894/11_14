var Mock=require('mockjs')
Mock.mock('../moke/login.php','post',function(options){
    let data=JSON.parse(options.body)
    console.log(data);
    let userName=data.userName
    let password=data.password
    if(userName=='tom' && password=='123'){
        return Mock.mock({"code":'10001','mse':'ok'})
    }else{
        return Mock.mock({"code":"20002",'mse':'用户名或密码错误'})
    }
})