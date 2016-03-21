function getStyle(obj,attr){
		return getComputedStyle(obj,false)[attr];
	}

function startMove(obj,json,fn){
			
			if (obj.timer){
				clearInterval(obj.timer);
			}
	
			obj.timer = setInterval(function(){
				var attr;
				var bContinue = false;
				var iCur;
				var iSpeed = 0 ;
				for(attr in json){

					iCur = parseInt(getStyle(obj,attr));
					/*console.log(attr+iCur);*/
					if(iCur != json[attr]){
						
						bContinue = bContinue || true;
				
						
					}
					iSpeed = (json[attr] - iCur)/5;
						/*
						ispeed向上向下取整很重要
						*/
						iSpeed = iSpeed > 0 ? Math.ceil(iSpeed):Math.floor(iSpeed);
					/*iSpeed = (json[attr] - iCur)/5;*/
					
			
						obj.style[attr] = iCur + iSpeed + "px";
						/*console.log(attr + json[attr]);*/
						// console.log(attr + obj.style[attr]);
											
				}
				if(!bContinue){
					/*console.log(true);*/
					clearInterval(obj.timer);
					if(fn){
						fn();
					}
				}


			},30);
		
			
		}