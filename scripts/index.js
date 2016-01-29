window.onload=function(){
	var $=function(div){
		return document.getElementById(div);
	},
	$$=function(div){
		return document.getElementsByClassName(div)
	};

	var xiaoyuanquans=$$('xiaoyuanquan'),lunbotus=$$('lunbotu'),items=$$('item'),
	dTu=$$('d_tu'),
	changchang=$('changchang'),cZuo=$('c-zuo'),cYou=$('c-you'),waikuan=$('waikuan');
	var index=0;

	//  xiaoyuanquans[0].style.background='white';
	//  var  shang=xiaoyuanquans[0];
	// var fn=function(){
	// 	shang.style.background='#8C8882';
	// 	xiaoyuanquans[index].style.background='white';
	// 	shang=xiaoyuanquans[index];
	// 	changchang.style.marginLeft=-1222*index+'px';
	// 	index++;
	// 	if(index==5){
	// 		index=0;
	// 	}
	// };


	// var timeId=setInterval(fn,1000);
	// for(var i=0;i<xiaoyuanquans.length;i++){
	// 	xiaoyuanquans[i].ww=i;
	// 	xiaoyuanquans[i].onclick=function(){
	// 		shang.style.background='#8C8882';
	// 		this.style.background='white';
	// 		shang=this;
	// 		clearInterval(timeId);
	// 		changchang.style.marginLeft=-1222*this.ww+'px';

	// 	};

	// }
	// waikuan.onmouseover=function(e){
	// 	clearInterval(timeId);
	// };
	// waikuan.onmouseout=function(){
	// 	clearInterval(timeId);
	// 	 timeId=setInterval(fn,1000);
	// };



	// cYou.onclick=function(){
	// 	clearInterval(timeId);
	// 	changchang.style.marginLeft=-1222*(index)+'px';
	// 	index++;
	// 	if(index==5){
	// 		index=0;
	// 	}
	// 	shang.style.background='#8C8882';
	// 	xiaoyuanquans[index].style.background='white';
	// 	shang=xiaoyuanquans[index];		
	// }

	// prev.onclick=function(){
	// 	kaiguan=false;
	// 	clearInterval(timeId);
	// 	currentItem.setAttribute('class','item2');
	// 	var pervI=(currentItem.previousElementSibling)?currentItem.previousElementSibling:items[items.length-1];
	// 	pervI.setAttribute('class','item2 show');
	// 	currentItem=pervI;

	// 	currentYuan.setAttribute('class','yuan');
	// 	var prevY=(currentYuan.previousElementSibling)?currentYuan.previousElementSibling:yuans[yuans.length-1];
	// 	prevY.setAttribute('class','yuan active');
	// 	currentYuan=prevY;
	// };


	
	// cZuo.onclick=function(){

	// 	clearInterval(timeId);
	// 	changchang.style.marginLeft=-1222*index+'px';
	// 	index--;
	// 	if(index<0){
	// 		index=4;
	// 	}
	// 	shang.style.background='#8C8882';
	// 	xiaoyuanquans[index].style.background='white';
	// 	shang=xiaoyuanquans[index];
		
	// }

	////////////////////////////////////////////////////////
	var timeId, currentYuan=xiaoyuanquans[0],currentlunbotu=lunbotus[0],kaiguan=true;
	var fn=(function(){
		var index=0;
		return function(){
			index++;
			if(index==lunbotus.length){
				index=0;
			}
			currentlunbotu.setAttribute('class','lunbotu');
			lunbotus[index].setAttribute('class','lunbotu show');
			currentlunbotu=lunbotus[index];

			currentYuan.setAttribute('class','xiaoyuanquan');
			xiaoyuanquans[index].setAttribute('class','xiaoyuanquan active');
			currentYuan=xiaoyuanquans[index];
		};
	})();
	timeId=setInterval(fn,2000);
	waikuan.onmouseover=function(){
		clearInterval(timeId);
	};
	waikuan.onmouseout=function(){
		if(kaiguan){
			clearInterval(timeId);
			timeId=setInterval(fn,2000);
		}	
	};
	for(var i=0;i<xiaoyuanquans.length;i++){

		xiaoyuanquans[i].onclick=function(e){
			
			clearInterval(timeId);
			var index=this.getAttribute('INDEX');
			currentlunbotu.setAttribute('class','lunbotu');
			lunbotus[index].setAttribute('class','lunbotu show');
			currentlunbotu=lunbotus[index];

			currentYuan.setAttribute('class','xiaoyuanquan');
			this.setAttribute('class','xiaoyuanquan active');
			currentYuan=this;
		};
	}

	cZuo.onclick=function(){
		kaiguan=false;
		clearInterval(timeId);
		currentlunbotu.setAttribute('class','lunbotu');
		var pervI=(currentlunbotu.previousElementSibling)?currentlunbotu.previousElementSibling:lunbotus[lunbotus.length-1];
		pervI.setAttribute('class','lunbotu show');
		currentlunbotu=pervI;

		currentYuan.setAttribute('class','xiaoyuanquan');
		var prevY=(currentYuan.previousElementSibling)?currentYuan.previousElementSibling:xiaoyuanquans[xiaoyuanquans.length-1];
		prevY.setAttribute('class','xiaoyuanquan active');
		currentYuan=prevY;
	};

	cYou.onclick=function(){
		clearInterval(timeId);
		currentlunbotu.setAttribute('class','lunbotu');
		var nextI=(currentlunbotu.nextElementSibling)?currentlunbotu.nextElementSibling:lunbotus[0];
		nextI.setAttribute('class','lunbotu show');
		currentlunbotu=nextI;

		currentYuan.setAttribute('class','xiaoyuanquan');
		var nextY=(currentYuan.nextElementSibling)?currentYuan.nextElementSibling:xiaoyuanquans[0];
		nextY.setAttribute('class','xiaoyuanquan active');
		currentYuan=nextY;
	};
	for(var i=0;i<items.length;i++){
		items[i].onmouseover=function(){
			this.style.boxShadow='0 5px 10px #808080';
		
		}
		items[i].onmouseout=function(){
			this.style.boxShadow='0 0 0';
		}
	}

};