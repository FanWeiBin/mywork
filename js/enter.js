function $(id){
	return document.getElementById(id);
}
window.onload=function(){
	$("mima").onclick=function(){
		$("inp").style.display="block";
		$("btn").style.display="block";
		$("scan").style.display="none";
	}
	$("saoma").onclick=function(){
		$("inp").style.display="none";
		$("btn").style.display="none";
		$("scan").style.display="block";
	}
	$("num1").onfocus=function(){
		$("lab1").style.display="none";
	}
	$("num1").onblur=function(){
		var iNum1=$("num1").value;
		if(iNum1==""){
			$("lab1").style.display="block";
		}
		// var regObj=/^1[35789]\d{9}$/ig;
		// var regObj1=/^\w+@\w+\.(com|cn|net|com.cn)$/ig;
		// if(!regObj.test(this.value) || !regObj1.test(this.value)){
		// 	alert("用户名输入不正确");
		// }
	}
	$("num2").onfocus=function(){
		$("lab2").style.display="none";
	}
	$("num2").onblur=function(){
		var iNum2=$("num2").value;
		if(iNum2==""){
			$("lab2").style.display="block";
		}
		// var iNUm2=$("num2").value;
		// if((iNUm2.length<=6) || (iNUm2>=15)){
		// 	alert("密码输入不正确");
		// 	console.log(iNUm2.length);
		// }
	}
	$("loginButton").onclick=function(){
		var iNum1=$("num1").value;
		var iNum2=$("num2").value;
		if((iNum1=="") && (iNum2=="")){
			alert("请填写用户名与密码");
		}else{
			self.location="index.html";
		}
	}
}