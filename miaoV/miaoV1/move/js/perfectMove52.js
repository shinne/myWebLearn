
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
	function startMove(obj,json,fn){
		if(obj.timer){
			clearInterval(obj.timer);
		}
		
		/*var iCur = parseInt(getStyle(obj,attr));*/
		obj.timer = setInterval(function(){
			//最开始设置为stop为true
			var bStop = true;
			//iCur的值一定要写在定时器的里面，不然的话只会变动一次，因为最后面的else总是执行的是iCur加上速度，没有变化
			var attr;
			
			for(attr in json){
				var iCur=0;
				//对opacity进行特殊处理
				if(attr == "opacity"){
					iCur = parseInt(parseFloat(getStyle(obj,attr))*100);
				}
				else{
				    iCur = parseInt(getStyle(obj,attr));
				}
				iSpeed = (json[attr] - iCur)/5;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed):Math.floor(iSpeed);

				//当有一个数值不符合的时候bStop就变为false
				if(iCur != json[attr]){
					bStop = false;
					console.log("1" + "f");
				}
				
				
				if(attr == "opacity"){
					//对opacity进行特殊处理
					obj.style.filter = 'alpha(opacity:' + (iCur + iSpeed) + ')';
					obj.style.opacity = (iCur + iSpeed)/100;
				}
				else{
					obj.style[attr] = iCur + iSpeed + "px";
				}
	
			}
			/*

			这里bStop检测一定要放到最外面




			*/
				if(bStop){
					clearInterval(obj.timer);
					console.log("2" + "t");
					console.log(obj.style.top);
					obj.style[attr] = json[attr] + "px";
					if(fn){
						fn();
					}
				}

			/*

				这里bStop检测一定要放到最外面




			*/
		},30);
	}