function elasticFn(obj,iTarget){
			if(obj.timer){
				clearInterval(obj.timer);
			}
			var iSpeed = 0 ;
			obj.timer = setInterval(function(){
				/*
				能够使物体速度随着目标点的距离变化而变化
				*/
				iSpeed += (iTarget - obj.offsetLeft)/8;

				/*
				为速度加上一个摩擦力，使他们慢慢变为0
				*/
				iSpeed *=0.7;
				left += iSpeed;
				/*
				是否停止的判断条件
				*/
				if(Math.abs(iSpeed) < 1 && Math.abs(left-iTarget) < 1){
					clearInterval(obj.timer);
					obj.style.left = iTarget + "px";
				}
				else{
					obj.style.left = left + "px";
				}
				
				},30);
		}