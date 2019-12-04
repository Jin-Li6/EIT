$(function(){
	//从底部上升的遮罩效果开始
	$(".a-fadeinR").hover(function(){
		$(this).find(".float").stop().animate({height:"320px",paddingTop:"150px"},200);
	},function(){
		$(this).find(".float").stop().animate({height:"50px",paddingTop:"15px"},200);
	})
	//从底部上升的遮罩效果结束

	//直接显示遮罩效果开始
	$(".a-fadeinR").hover(function(){
		$(this).find(".mask").css("display","block");
		},function(){
			$(this).find(".mask").css("display","none");
	})
	//直接显示遮罩效果结束
});
