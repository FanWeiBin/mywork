function $(id) {
	return document.getElementById(id);
}
window.onload=function(){
	var iAm=document.getElementById("amp");
	var iMe=document.getElementById("med");
	var iDi=document.getElementById("dim");
	var iTop=document.getElementById("Top");
	var iBox=document.getElementById("imgshow");
	var iDc=Array.from(iDi.children);
	var iAimg=document.getElementById("aImg");
	var iBimg=document.getElementById("bImg");
	var iPro=document.getElementById("proDetails");
	iDc.forEach(function(i){
		i.addEventListener("mouseenter",function(){
			iDc.forEach(function(m){
				m.className="";
			});
			i.className="ativ";
			iAimg.src=i.src;
			// console.log(i.src);
			iBimg.src=i.src;
			// console.log(iBimg.src);
		}.bind(i));
	});

	iMe.onmouseenter=function(){
		iPro.style.display="none";
		iTop.style.display="block";
		iAm.style.display="block";


		iMe.onmousemove=function(e){
			let eve=e || window.event;
			let iL=eve.pageX-iMe.offsetLeft*2;
			let iT=eve.pageY-iMe.offsetTop-iTop.offsetHeight*2;

			if(iL<0){
				iL=0;
			}if(iL>iMe.offsetWidth-iTop.offsetWidth){
				iL=iMe.offsetWidth-iTop.offsetWidth;
			}if(iT<0){
				iT=0;
			}if(iT>iMe.offsetHeight-iTop.offsetHeight){
				iT=iMe.offsetHeight-iTop.offsetHeight;
			}

			iTop.style.left=iL+"px";
			iTop.style.top=iT+"px";

			iAimg.style.left=-iL+"px";
			iAimg.style.top=-iT+"px";
			console.log(iAimg.style.left);
			console.log(iAimg.style.top);
		}
	}	
	iMe.onmouseleave=function(){
		iPro.style.display="block";

		iTop.style.display="none";
		iAm.style.display="none";
	}

}