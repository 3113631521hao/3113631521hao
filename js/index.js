window.onload = function (){
    var email = document.getElementById("email")
    var btn = document.getElementById("submit")
    var info = document.getElementById("settings-info")
    email.onblur=function (){
        if (email.value==""){
            email.value="请输入你的邮箱地址"
        }
    };
    btn.onclick = function (){
        if (email.value==""||email.value==null||email.value=="请输入你的邮箱地址"){
            info.innerText = "发送失败";
            return false;
        }else {
            info.innerText="发送成功"
        }
    }
}