var iDebug=false;
var flag=true;
$(function() {

	var mySwiper = $('.swiper-container-1').swiper({
		direction: 'vertical'
	});

	function window_resize(){
		if($(window).width()>$(window).height()){//竖屏
			screenOrientation=0;
			$("#layout").hide();
			if(iDebug){console.log(screenOrientation);}
		}
		else{
			screenOrientation=1;
			$("#layout").show();
			if(iDebug){console.log(screenOrientation);}
		}
	}

	window.addEventListener("onorientationchange" in window ? "orientationchange":"resize", window_resize, false);
});