var data,
		myScroll,
		pullDownEl, pullDownOffset,
		pullUpEl, pullUpOffset,
		generatedCount = 0;
	function pullUpAction () {

		$.getJSON('/uploads/rs/200/ptvnx6ur/test.json', function (data, state) {
			if (data && data.state == 1 && state == 'success') {
				//本地测试，为了看到加载中效果故加上定时器
				setTimeout(function () {
					$('#news-lists').append(data.data);
					myScroll.refresh();
				}, 600);
			}
		});
	}

	//初始化绑定iScroll控件 
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	document.addEventListener('DOMContentLoaded', loaded, false);

	function loaded() {
		pullDownEl = document.getElementById('pullDown');
		pullDownOffset = pullDownEl.offsetHeight;
		pullUpEl = document.getElementById('pullUp');	
		pullUpOffset = pullUpEl.offsetHeight;
		
		/**
		 * 初始化iScroll控件
		 */
		myScroll = new iScroll('wrapper', {
			vScrollbar : false,
			topOffset : pullDownOffset,
			onRefresh : function () {
				if (pullUpEl.className.match('loading')) {
					pullUpEl.className = '';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
				}
			},
			onScrollMove: function () {
				if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
					pullUpEl.className = 'flip';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
				}
			},
			onScrollEnd: function () {
				if (pullUpEl.className.match('flip')) {
					pullUpEl.className = 'loading';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';				
					pullUpAction();
				}
			}
		});
	}