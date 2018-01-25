function $(id){
	return document.getElementById(id);
}
window.onload=function(){
	$("num1").onblur=function(){
		var regObj=/^1[35789]\d{9}$/ig;
		var regObj1=/^\w+@\w+\.(com|cn|net|com.cn)$/ig;
		if(regObj.test(this.value) || regObj1.test(this.value)){
			$("regName1").innerHTML="√";
		}else{
			$("regName1").innerHTML="";
			$("regName1").innerHTML="请输入正确的用户名";
		}
	}
	$("num2").onblur=function(){
		var iNUm2=$("num2").value;
		if((6<=iNUm2.length) && (iNUm2.length<=15)){
			$("regName2").innerHTML="√";
		}else{
			$("regName2").innerHTML="密码长度应该为6-15位";
		}
	}
	$("num3").onblur=function(){
		var iNUm2=$("num2").value;
		var iNUm3=$("num3").value;
		if(iNUm2==iNUm3){
			$("regName3").innerHTML="√";
		}else{
			$("regName3").innerHTML="两次密码不一致";
		}
	}
	$("regSubmit").onclick=function(){
		var reg1=$("regName1").innerHTML;
		var reg3=$("regName3").innerHTML;
		if(($("regName1").innerHTML=="√") && ($("regName2").innerHTML=="√") && ($("regName3").innerHTML=="√")){
			self.location="register.html";
			$("num1").value="";
			$("num2").value="";
			$("num3").value="";
		}else{
			alert("请完整填写信息");
		}
	}
}