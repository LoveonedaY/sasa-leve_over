$(function() {
	$(".menu-all").hover(function() {
		$(".menu-box").show();
	}, function() {
		$(".menu-box").hide();
	})

	setInterval(function() {
		var endTime = new Date('2016/8/21 09:00:00').getTime();
		var nowTime = new Date().getTime();
		//日期时间是不能直接相减的 所以先转化为毫秒
		//时分秒
		//endT距离下班的毫秒
		var endT = parseInt((endTime - nowTime) / 1000);
		var day = Math.floor((endT / 3600) / 24);
		//求多少小时
		var hour = Math.floor((endT / 3600) % 24);
		//求多少分
		var minutes = Math.floor((endT % 3600) / 60);
		//求多少秒
		var ss = endT % 60;
		$(".d1").html(day);
		$(".h1").html(hour);
		$(".m1").html(minutes);
		$(".s1").html(ss);
	}, 1000)

	setInterval(function() {
		var endTime = new Date('2016/8/21 21:00:00').getTime();
		var nowTime = new Date().getTime();
		//日期时间是不能直接相减的 所以先转化为毫秒
		//时分秒
		//endT距离下班的毫秒
		var endT = parseInt((endTime - nowTime) / 1000);
		var day = Math.floor((endT / 3600) / 24);
		//求多少小时
		var hour = Math.floor((endT / 3600) % 24);
		//求多少分
		var minutes = Math.floor((endT % 3600) / 60);
		//求多少秒
		var ss = endT % 60;
		$(".d2").html(day);
		$(".h2").html(hour);
		$(".m2").html(minutes);
		$(".s2").html(ss);
	}, 1000)

	setInterval(function() {
		var endTime = new Date('2016/8/22 09:00:00').getTime();
		var nowTime = new Date().getTime();
		//日期时间是不能直接相减的 所以先转化为毫秒
		//时分秒
		//endT距离下班的毫秒
		var endT = parseInt((endTime - nowTime) / 1000);
		var day = Math.floor((endT / 3600) / 24);
		//求多少小时
		var hour = Math.floor((endT / 3600) % 24);
		//求多少分
		var minutes = Math.floor((endT % 3600) / 60);
		//求多少秒
		var ss = endT % 60;
		$(".d3").html(day);
		$(".h3").html(hour);
		$(".m3").html(minutes);
		$(".s3").html(ss);
	}, 1000)

	$(".biglist>li>a").click(function() {
		if($(this).parent().hasClass("active")) {
			$(this).next().hide();
			$(this).parent().removeClass("active");
		} else {
			$(this).next().show();
			$(this).parent().addClass("active");
		}
	})

	$(".smalllist a").hover(function() {
		$(this).css("color", "#c69a62");
		$(this).children().eq(0).css("background-position", "-88px -3px");
	}, function() {
		$(this).css("color", "#828282");
		$(this).children().eq(0).css("background-position", "-74px -3px")
	})

	$(".more").click(function() {
		if($(".hide").hasClass("dis")){
			$(".hide").removeClass("dis");
			$(this).find("i").eq(0).css("background", "url(img/fsanjiao.png)");
			$(this).find("span").eq(0).html("更多");
			$(this).parent().css("height", "98px");
		} else {
			$(".hide").addClass("dis");
			$(this).find("i").eq(0).css("background", "url(img/tsanjiao.png)");
			$(this).find("span").eq(0).html("收起");
			$(this).parent().css("height", "360px");
		}
	})
})