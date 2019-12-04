	if($('#side_left').offset()){
		var _h = $('#side_left').height();
		var _ftop = $('#bottom-nav')[0].offsetTop;
	}

	//回顶部
	$(window).scroll(function(){ 						
		// 侧边栏距离顶部的高度
		if($('#side_left').offset()){
		if($('.main_wrap').height()==$('#side_left').height()){
			return;
		}
		//scrollbar滚动的距离
			var vSTop = $(window).scrollTop();
			if (vSTop>=320) {
				if (vSTop+_h<_ftop){
					// 开始随屏幕滚动
					$('#side_left').removeAttr('style').css({
						position: 'absolute',
						top: vSTop-40,
						zIndex:'9'
					});
				}else{
					$('#side_left').removeAttr('style').css({
						position: 'absolute',
						bottom: '0'
					});
				}
				
			}else {
				// 停止随屏幕滚动
				$('#side_left').removeAttr('style').css({
					position: 'relative',
					top: '0'
				});
			}
		}		
	});