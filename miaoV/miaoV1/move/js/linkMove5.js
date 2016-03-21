
function getStyle(obj,attr){
		if(window.currentStyle){
			if(attr=="opacity");
			return obj.currentStyle[attr];
		}
		else{
			return getComputedStyle(obj,false)[attr];
		}
	}


	//新增加了fn，如果有fn存在则调用，不存在则不做什么事
	function startMove(obj,attr,iTarget,fn){
		if(obj.timer){
			clearInterval(obj.timer);
		}
		
		/*var iCur = parseInt(getStyle(obj,attr));*/
		obj.timer = setInterval(function(){

			//iCur的值一定要写在定时器的里面，不然的话只会变动一次，因为最后面的else总是执行的是iCur加上速度，没有变化
			var iCur=0;
			//对opacity进行特殊处理
			if(attr == "opacity"){
				iCur = parseInt(parseFloat(getStyle(obj,attr))*100);
			}
			else{
				iCur = parseInt(getStyle(obj,attr));
			}
			iSpeed = (iTarget - iCur)/8;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed):Math.floor(iSpeed);

			//console.log(iSpeed);
			if(iCur == iTarget){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}
			else{
				if(attr == "opacity"){
					//对opacity进行特殊处理
					obj.style.filter = 'alpha(opacity:' + (iCur + iSpeed) + ')';
					obj.style.opacity = (iCur + iSpeed)/100;
				}
				else{
					obj.style[attr] = iCur + iSpeed + "px";
				}
			}
		},30);
	}