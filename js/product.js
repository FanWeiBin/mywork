function $(id){
	return document.getElementById(id);
}
window.onscroll=function(){
		var top=document.documentElement.scrollTop||document.body.scrollTop;
		var Box=document.getElementById("J_Filter");
		if(top>=805){
			Box.style.position="fixed";
			Box.style.top=0;
		}
		if(top<=805){
			Box.style.position="absolute";
			Box.style.top="805px";
		}
	}