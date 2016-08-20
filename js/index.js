$(function() {
	$("#every>li").hover(function() {
		$(this).css("box-shadow", "3px 3px 10px rgba(0, 0, 0, 0.3)")
	}, function() {
		$(this).css("box-shadow", "")
	})

	$("#one,#fiv").hover(function() {
		$("#bg1").css("background", "url(img/bg1.jpg) no-repeat right top");
		$("#bg2").css("background", "url(img/bg1.jpg) no-repeat left top")
	})

	$("#two,#six").hover(function() {
		$("#bg1").css("background", "url(img/bg2.jpg) no-repeat right top");
		$("#bg2").css("background", "url(img/bg2.jpg) no-repeat left top")
	})

	$("#thr,#sev").hover(function() {
		$("#bg1").css("background", "url(img/bg3.jpg) no-repeat right top");
		$("#bg2").css("background", "url(img/bg3.jpg) no-repeat left top")
	})

	$("#fou,#eig").hover(function() {
		$("#bg1").css("background", "url(img/bg4.jpg) no-repeat right top");
		$("#bg2").css("background", "url(img/bg4.jpg) no-repeat left top")
	})

	$("#time-shop>li").hover(function() {
		$(this).css("box-shadow", "3px 3px 10px rgba(0, 0, 0, 0.3)")
		$(this).children().children().eq(1).css("display", "block");
		$(this).children().children().eq(2).children().addClass("blur");
	}, function() {
		$(this).css("box-shadow", "")
		$(this).children().children().eq(1).css("display", "none");
		$(this).children().children().eq(2).children().removeClass("blur");
	})

	$(".hot-logo>li").hover(function() {
		$(this).children().stop().animate({
			"top": -150
		}, 300);
	}, function() {
		$(this).children().stop().animate({
			"top": 0
		}, 300);
	})

	$("#hotnav>li").hover(function() {
		var index = $(this).index();
		var i = index + 2;
		$(this).children().css("color", "#ec3e7d");
		$(this).parent().parent().children().eq(i).show().siblings().not($(".hot-nav,.time-tit")).hide();
		$("#hotline").show().animate({
			left: 112 * index + 'px'
		}, 300)
	}, function() {
		$(this).children().css("color", "#3e3e3e");
		$("#hotline").hide()
	})
})