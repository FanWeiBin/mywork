function $(id){
	return document.getElementById(id);
}

window.onload=function(){
	var oUl=$("Control").children;
	console.log(oUl);
	for(let i=1;i<oUl.length;i++){
		oUl[i].onmouseover=function (){
			console.log(this.lastElementChild);
			this.lastElementChild.style.display="block";
			console.log(1);
		}
		oUl[i].onmouseleave=function (){
			this.lastElementChild.style.display="none";
			console.log(1);
		}
	}
}
// (function($){

// 	$.noConflict();

// 	$(".Control li").bind("mouseenter",function(){
// 		let iIndex=$(this).index();
// 		$(".Control li a .nav-unfold").css("display","block");

// 	})

// })(jQuery);
