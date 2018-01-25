function $(id){
	return document.getElementById(id);
}
window.onload=function(){
	$("sub").onclick=function(){
		var iNum=$("Num").value;
		var iSpa=$("spa1").innerHTML;
		if(iNum>0){
			iNum--;
			$("Num").value=iNum;
			$("spa2").innerHTML=Number(iNum)*Number(iSpa);
			$("spa3").innerHTML=Number(iNum)*Number(iSpa);
			console.log(iNum);
			console.log(iSpa);
		}
	}

	$("add").onclick=function(){
		var iNum=$("Num").value;
		var iSpa=$("spa1").innerHTML;
		iNum++;
		$("Num").value=iNum;
		$("spa2").innerHTML=Number(iNum)*Number(iSpa);
		$("spa3").innerHTML=Number(iNum)*Number(iSpa);
	}
}