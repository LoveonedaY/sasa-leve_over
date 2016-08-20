$(function() {
	$('#stars').raty({
		score: 5
	});

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
		$(".day").html(day);
		$(".hour").html(hour);
		$(".minute").html(minutes);
		$(".second").html(ss);
	}, 1000)

	$("#jian").click(function() {
		var num = parseInt($("#num").val());
		if(num == 1) {
			return;
		} else {
			num -= 1;
		}
		$("#num").val(num);
	})

	$("#jia").click(function() {
		var num = parseInt($("#num").val());
		num += 1;
		$("#num").val(num);
	})

	$("#sys").hover(function() {
		$(".erweima").show();
	}, function() {
		$(".erweima").hide();
	})

	$("#piclist>li").hover(function() {
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parents(".leftmain").find("img").eq(0).attr("src", "img/" + $(this).index() + "shop.jpg");
	})

	$(".before>a").click(function() {
		var num = $(".active").index();
		num -= 1;
		if(num < 1) {
			$("#piclist>li").first().addClass("active").siblings().removeClass("active");
			$("#piclist>li").parents(".leftmain").find("img").eq(0).attr("src", "img/0shop.jpg");
		} else {
			$(".active").prev().addClass("active").next().removeClass("active");
			$("#piclist>li").parents(".leftmain").find("img").eq(0).attr("src", "img/" + num + "shop.jpg");
		}
	})

	$(".next>a").click(function() {
		var num = $(".active").index();
		var length = $("#piclist>li").length;
		length -= 1;
		if(num >= length) {
			$("#piclist>li").last().addClass("active").siblings().removeClass("active");
			$("#piclist>li").parents(".leftmain").find("img").eq(0).attr("src", "img/2shop.jpg");
		} else {
			$(".active").next().addClass("active").prev().removeClass("active");
			$("#piclist>li").parents(".leftmain").find("img").eq(0).attr("src", "img/" + (num + 1) + "shop.jpg");
		}
	})

	$(".picmain").mousemove(function(e) {
		var num = $(".active").index();
		console.log(num)
		$(".fdj2").find("img").eq(0).attr("src", "img/" + num + "big.jpg");
		$(".fdj").css('display', 'block');
		$(".fdj2").css('display', 'block');
		ratio = $(".fdj2").width() / $(".fdj").width();
		//获取坐标的两种方法
		// var iX = e.clientX - this.offsetLeft - $Drag.width()/2,
		// 	iY = e.clientY - this.offsetTop - $Drag.height()/2,	
		var iX = e.pageX - $(this).offset().left - $(".fdj").width() / 2,
			iY = e.pageY - $(this).offset().top - $(".fdj").height() / 2,
			MaxX = $(".picmain").width() - $(".fdj").width(),
			MaxY = $(".picmain").height() - $(".fdj").height();

		iX = iX > 0 ? iX : 0;
		iX = iX < MaxX ? iX : MaxX;
		iY = iY > 0 ? iY : 0;
		iY = iY < MaxY ? iY : MaxY;
		$(".fdj").css({
			left: iX + 'px',
			top: iY + 'px'
		});
		$(".fdj2").find("img").css({
			marginLeft: -ratio * iX + 'px',
			marginTop: -ratio * iY + 'px'
		});
		//return false;
	});
	$(".picmain").mouseout(function() {
		$(".fdj").css('display', 'none');
		$(".fdj2").css('display', 'none');
	});

	$(window).scroll(function() {
		var top = $(window).scrollTop();
		console.log(top)
		if(top >= 970) {
			$(".rightnav").css("position", "fixed");
			$(".rightnav").css("top", "0");
			$(".rightnav").css("box-shadow", "2px 4px 5px rgba(0, 0, 0, 0.2)");
		} else {
			$(".rightnav").css("position", "relative");
			$(".rightnav").css("box-shadow", "");
		}

		if(top >= 0 && top < 1335) {
			$(".navlist").eq(0).addClass("act").siblings().removeClass("act");
		} else if(top >= 1335 && top < 4525) {
			$(".navlist").eq(1).addClass("act").siblings().removeClass("act");
		} else if(top >= 4525 && top < 6775) {
			$(".navlist").eq(2).addClass("act").siblings().removeClass("act");
		} else if(top >= 6775) {
			$(".navlist").eq(3).addClass("act").siblings().removeClass("act");
		}
	})

	$("#a1").click(function() {
		$("body,html").animate({
			"scrollTop": 990
		}, 400);
	})

	$("#a2").click(function() {
		$("body,html").animate({
			"scrollTop": 1335
		}, 400);
	})

	$("#a3").click(function() {
		$("body,html").animate({
			"scrollTop": 4525
		}, 400);
	})

	$("#a4").click(function() {
		$("body,html").animate({
			"scrollTop": 6775
		}, 400);
	})
})