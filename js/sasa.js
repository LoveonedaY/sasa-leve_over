$(function() {
	$("#users").hover(function() {
		$("#users").find("i").css("background", "url(img/my-account1.png)");
		$("#users").find("em").css("background", "url(img/sanjiao1.png)");
		$("#userslist").stop().slideDown("400");
	}, function() {
		$("#users").find("i").css("background", "url(img/my-account.png)");
		$("#users").find("em").css("background", "url(img/sanjiao.png)");
		$("#userslist").stop().slideUp("400");
	})

	$("#list>li").hover(function() {
		$(this).css("background", "#fff");
	}, function() {
		$(this).css("background", "");
	})

	$("#enshrine").hover(function() {
		$("#enshrine").find("i").css("background", "url(img/my-enshrine1.png)");
	}, function() {
		$("#enshrine").find("i").css("background", "url(img/my-enshrine.png)");
	})

	$("#email").hover(function() {
		$("#email").find("i").css("background", "url(img/my-email1.png)");
	}, function() {
		$("#email").find("i").css("background", "url(img/my-email.png)");
	})

	$("#about").hover(function() {
		$("#about").find("em").css("background", "url(img/sanjiao1.png)");
		$("#aboutdl").stop().slideDown("400");
	}, function() {
		$("#about").find("em").css("background", "url(img/sanjiao.png)");
		$("#aboutdl").stop().slideUp("400");
	})

	$("#sina").hover(function() {
		$("#aboutdl").css("width", "210px");
		$("#sinapic").show();
	}, function() {
		$("#aboutdl").css("width", "86px");
		$("#sinapic").hide();
	})

	$("#sasa").hover(function() {
		$("#aboutdl").css("width", "210px");
		$("#sasapic").show();
	}, function() {
		$("#aboutdl").css("width", "86px");
		$("#sasapic").hide();
	})

	$("#yk").hover(function() {
		$("#aboutdl").css("width", "210px");
		$("#ykpic").show();
	}, function() {
		$("#aboutdl").css("width", "86px");
		$("#ykpic").hide();
	})

	$("#car").hover(function() {
		$("#car-empty").show();
	}, function() {
		$("#car-empty").hide();
	})

	$("#nav>li").hover(function() {
		$(this).css("background", "#ca1566");
	}, function() {
		$(this).css("background", "");
	})

	$("#navall").hover(function() {
		$("#navall").find("i").css("background", "url(img/hongsanjiao1.png)");
		$("#brandall").stop().slideDown("400");
	}, function() {
		$("#navall").find("i").css("background", "url(img/hongsanjiao.png)");
		$("#brandall").stop().slideUp("400");
	})

	$("#nav-right>li").hover(function() {
		$(this).css("width", "115px").siblings().css("width", "30px");
	})

	$("#menu-all>li").hover(function() {
		$(this).css("background", "white");
		$(this).children().children().eq(3).show();
	}, function() {
		$(this).css("background", "");
		$(this).children().children().eq(3).hide();
	})

	$("#menu-middle>li").hover(function() {
		var index = $(this).index();
		$(this).children().css("color", "#ec3e7d");
		$("#line").show().animate({
			left: 91 * index + 'px'
		}, 300)
	}, function() {
		$(this).children().css("color", "#fff");
		$("#line").hide()
	})

	$("#my").hover(function() {
		$("#my").css("background", "url(img/users1.png)");
		$("#my").children().stop().show().animate({
			"opacity": 1,
			"right": 38 + 'px'
		}, 400);
	}, function() {
		$("#my").css("background", "url(img/users.png)");
		$("#my").children().stop().hide().animate({
			"opacity": 0,
			"right": 70 + 'px'
		}, 400);
	})

	$("#my1").hover(function() {
		$("#my1").css("background", "url(img/love1.png)");
		$("#my1").children().stop().show().animate({
			"opacity": 1,
			"right": 38 + 'px'
		}, 400);
	}, function() {
		$("#my1").css("background", "url(img/love.png)");
		$("#my1").children().stop().hide().animate({
			"opacity": 0,
			"right": 70 + 'px'
		}, 400);
	})

	$("#my2").hover(function() {
		$("#my2").css("background", "url(img/time1.png)");
		$("#my2").children().stop().show().animate({
			"opacity": 1,
			"right": 38 + 'px'
		}, 400);
	}, function() {
		$("#my2").css("background", "url(img/time.png)");
		$("#my2").children().stop().hide().animate({
			"opacity": 0,
			"right": 70 + 'px'
		}, 400);
	})

	$("#my3").hover(function() {
		$("#my3").css("background", "url(img/serve1.png)");
		$("#my3").children().stop().show().animate({
			"opacity": 1,
			"right": 38 + 'px'
		}, 400);
	}, function() {
		$("#my3").css("background", "url(img/serve.png)");
		$("#my3").children().stop().hide().animate({
			"opacity": 0,
			"right": 70 + 'px'
		}, 400);
	})

	$("#my4").hover(function() {
		$("#my4").css("background", "url(img/weixin1.png)");
		$("#my4").children().stop().show().animate({
			"opacity": 1,
			"right": 88 + 'px'
		}, 400);
	}, function() {
		$("#my4").css("background", "url(img/weixin.png)");
		$("#my4").children().stop().hide().animate({
			"opacity": 0,
			"right": 120 + 'px'
		}, 400);
	})

	$("#shopping-car").hover(function() {
		$("#shopping-car").css("background", "#ec3e7d");
		$("#carlogo").css("background", "url(img/car1.png)");
	}, function() {
		$("#shopping-car").css("background", "");
		$("#carlogo").css("background", "url(img/car.png)");
	})

	$("#car-main").click(function() {
		$("#shopping-car").css("background", "#ec3e7d");
		$("#carlogo").css("background", "url(img/car1.png)");
		$("#car-box").css("display", "block");
	})

	$("#close").click(function() {
		$("#car-box").css("display", "none");
		$("#shopping-car").css("background", "");
		$("#carlogo").css("background", "url(img/car.png)");
	})

	$("#left1").hover(function() {
		$(this).css("background", "#333");
		$(this).children().css("color", "#fff");
		$(this).children().children().css("background", "url(img/left2.png)");
	}, function() {
		$(this).css("background", "");
		$(this).children().css("color", "#3e3e3e");
		$(this).children().children().css("background", "url(img/left1.png)");
	})

	$("#left2").hover(function() {
		$(this).css("background", "#333");
		$(this).children().css("color", "#fff");
		$(this).children().children().css("background", "url(img/left4.png)");
	}, function() {
		$(this).css("background", "");
		$(this).children().css("color", "#3e3e3e");
		$(this).children().children().css("background", "url(img/left3.png)");
	})

	$("#left3").hover(function() {
		$(this).css("background", "#333");
		$(this).children().css("color", "#fff");
		$(this).children().children().css("background", "url(img/left6.png)");
	}, function() {
		$(this).css("background", "");
		$(this).children().css("color", "#3e3e3e");
		$(this).children().children().css("background", "url(img/left5.png)");
	})

	$("#left4").hover(function() {
		$(this).css("background", "#333");
		$(this).children().css("color", "#fff");
		$(this).children().children().css("background", "url(img/left8.png)");
	}, function() {
		$(this).css("background", "");
		$(this).children().css("color", "#3e3e3e");
		$(this).children().children().css("background", "url(img/left7.png)");
	})

	$("#left5").hover(function() {
		$(this).css("background", "#333");
		$(this).children().css("color", "#fff");
		$(this).children().children().css("background", "url(img/left10.png)");
	}, function() {
		$(this).css("background", "");
		$(this).children().css("color", "#3e3e3e");
		$(this).children().children().css("background", "url(img/left9.png)");
	})

	$("#gotop").click(function() {
		$("body,html").animate({
			"scrollTop": 0
		}, 400);
	})

	$("#left1").click(function() {
		$("body,html").animate({
			"scrollTop": 631
		}, 400);
	})

	$("#left2").click(function() {
		$("body,html").animate({
			"scrollTop": 1231
		}, 400);
	})

	$("#left4").click(function() {
		$("body,html").animate({
			"scrollTop": 2531
		}, 400);
	})

	$("#left3,#left5").click(function() {
		$("body,html").animate({
			"scrollTop": 0
		}, 400);
	})

	$(window).scroll(function() {
		var top = $(window).scrollTop();
		if(top == 0) {
			$("#gotop").css("opacity", "0");
		}
		if(top > 0) {
			$("#gotop").css("opacity", "1");
		}

		if(top >= 630) {
			$("#top").stop().fadeIn(200);
			$("#left").stop().fadeIn(200);
		} else {
			$("#top").stop().fadeOut(200);
			$("#left").stop().fadeOut(200);
		}

		if(top > 630 && top <= 1230) {
			$("#left1").css("background", "#333");
			$("#left1").children().css("color", "#fff");
			$("#left1").children().children().css("background", "url(img/left2.png)");
		} else {
			$("#left1").css("background", "");
			$("#left1").children().css("color", "#3e3e3e");
			$("#left1").children().children().css("background", "url(img/left1.png)");
		}

		if(top > 1230 && top <= 2530) {
			$("#left2").css("background", "#333");
			$("#left2").children().css("color", "#fff");
			$("#left2").children().children().css("background", "url(img/left4.png)");
		} else {
			$("#left2").css("background", "");
			$("#left2").children().css("color", "#3e3e3e");
			$("#left2").children().children().css("background", "url(img/left3.png)");
		}

		if(top > 2530) {
			$("#left4").css("background", "#333");
			$("#left4").children().css("color", "#fff");
			$("#left4").children().children().css("background", "url(img/left8.png)");
		} else {
			$("#left4").css("background", "");
			$("#left4").children().css("color", "#3e3e3e");
			$("#left4").children().children().css("background", "url(img/left7.png)");
		}
	})

	$("#user,#pass,#password,#yzm").hover(function() {
		$(this).css("border-color", "#f9a0b4")
		$(this).css("box-shadow", "0 0 5px #fbb4b0")
	}, function() {
		$(this).css("border-color", "#ccc")
		$(this).css("box-shadow", "")
	})

	$("#dluser,#dlpass").hover(function() {
		$(this).css("border-color", "#f9a0b4")
		$(this).css("box-shadow", "0 0 5px #fbb4b0")
	}, function() {
		$(this).css("border-color", "#ccc")
		$(this).css("box-shadow", "")
	})

	$("#dluser").blur(function() {
		var demo = $(this).val();
		if(demo == "") {
			$(this).css("border-color", "#f9a0b4");
			$(this).css("box-shadow", "0 0 5px #fbb4b0");
			$(this).parent().children().eq(1).show(100);
			$(this).parent().children().eq(1).children().eq(1).html("请填写邮箱/手机号");
		} else {
			$(this).parent().children().eq(1).hide();
		}
	})

	$("#dlpass").blur(function() {
		var demo = $(this).val();
		if(demo == "") {
			$(this).css("border-color", "#f9a0b4");
			$(this).css("box-shadow", "0 0 5px #fbb4b0");
			$(this).parent().children().eq(1).show(100);
			$(this).parent().children().eq(1).children().eq(1).html("请填写密码");
		} else {
			$(this).parent().children().eq(1).hide();
		}
	})

	$("#user").blur(function() {
		var demo = $(this).val();
		if(demo == "") {
			$(this).css("background", "#fff8f6");
			$(this).css("border-color", "#f9a0b4");
			$(this).css("box-shadow", "0 0 5px #fbb4b0");
			$(this).parent().children().eq(1).show(100);
			$(this).parent().children().eq(1).children().eq(1).html("请填写邮箱或手机号，最少5个字符");
		} else if(!/^\w+@\w+(\.)\w+$/.test(demo) && !/^1(3|5|7|8)\d{9}$/.test(demo)) {
			$(this).css("background", "#fff8f6");
			$(this).css("border-color", "#f9a0b4");
			$(this).css("box-shadow", "0 0 5px #fbb4b0");
			$(this).parent().children().eq(1).show();
			$(this).parent().children().eq(1).children().eq(1).html("格式有误，请使用正确的邮箱地址或手机号码");
		} else {
			$(this).css("background", "")
			$(this).parent().children().eq(1).hide();
		}
	})

	$("#pass").blur(function() {
		var demo1 = $(this).val();
		if(demo1 == "") {
			$(this).css("background", "#fff8f6");
			$(this).css("border-color", "#f9a0b4");
			$(this).css("box-shadow", "0 0 5px #fbb4b0");
			$(this).parent().children().eq(1).show(100);
			$(this).parent().children().eq(1).children().eq(1).html("请填写密码，6-16个字符");
		} else if(!/^\w{6,16}$/.test(demo1)) {
			$(this).css("background", "#fff8f6");
			$(this).css("border-color", "#f9a0b4");
			$(this).css("box-shadow", "0 0 5px #fbb4b0");
			$(this).parent().children().eq(1).show();
			$(this).parent().children().eq(1).children().eq(1).html("输入格式有误，长度在6-16个字符");
		} else {
			$(this).css("background", "")
			$(this).parent().children().eq(1).hide();
		}
	})

	$("#password").blur(function() {
		var demo2 = $("#pass").val();
		var demo3 = $(this).val();
		if(demo3 == "") {
			$(this).css("background", "#fff8f6");
			$(this).css("border-color", "#f9a0b4");
			$(this).css("box-shadow", "0 0 5px #fbb4b0");
			$(this).parent().children().eq(1).show(100);
			$(this).parent().children().eq(1).children().eq(1).html("请再次填写确认密码");
		} else if(demo3 != demo2) {
			$(this).css("background", "#fff8f6");
			$(this).css("border-color", "#f9a0b4");
			$(this).css("box-shadow", "0 0 5px #fbb4b0");
			$(this).parent().children().eq(1).show();
			$(this).parent().children().eq(1).children().eq(1).html("密码与确认密码不相符，请重新填写");
		} else {
			$(this).css("background", "")
			$(this).parent().children().eq(1).hide();
		}
	})

	$("#yzm").blur(function() {
		var demo4 = $(this).val();
		if(demo4 == "") {
			$(this).css("background", "#fff8f6");
			$(this).css("border-color", "#f9a0b4");
			$(this).css("box-shadow", "0 0 5px #fbb4b0");
			$(this).parent().children().eq(1).show(100);
			$(this).parent().children().eq(1).children().eq(1).html("验证码不能为空");
		} else if(demo4 != 4155) {
			$(this).css("background", "#fff8f6");
			$(this).css("border-color", "#f9a0b4");
			$(this).css("box-shadow", "0 0 5px #fbb4b0");
			$(this).parent().children().eq(1).show();
			$(this).parent().children().eq(1).children().eq(1).html("请正确填写验证码");
		} else {
			$(this).css("background", "")
			$(this).parent().children().eq(1).hide();
		}
	})

	$('#btn').click(function() {
		//主动触发元素的离开事件
		$("#yzm,#password,#pass,#user").trigger('blur');
		//根据页面显示的元素 如果显示错误信息 
		if($(".error:visible").length > 0) {
			console.log($(".error:visible").length)
			return;
		} else {
			//如果也没没有显示错误，将信息保存到cookie当中
			var user = $("#user").val();
			var pass = $("#pass").val();
			document.cookie = "user:" + user + "&pass:" + pass;
			alert("注册成功！");
			window.location.href = "login.html"
		}
	})

	$('#btn1').click(function() {
		//主动触发元素的离开事件
		$("#dluser,#dlpass").trigger('blur');
		//根据页面显示的元素 如果显示错误信息 
		if($(".error:visible").length > 0) {
			console.log($(".error:visible").length)
			return;
		} else {
			//如果也没没有显示错误，将信息保存到cookie当中
			var demo = document.cookie.split("&");
			var demo1 = demo[0]
			var demo2 = demo1.split(":")
			var demo3 = document.cookie.split("&");
			var demo4 = demo3[1]
			var demo5 = demo4.split(":")
			console.log(demo5)
			if($("#dluser").val() == demo2[1]) {
				if($("#dlpass").val() == demo5[1]) {
					window.location.href = "index.html";
				} else {
					alert("用户名或密码错误！")
				}
			} else {
				var r = confirm('当前用户不存在，请立即注册！')
				if(r == true) {
					window.location.href = "regist.html";
				}
			}
		}
	})
	
	setInterval(function() {
		var endTime = new Date('2016/8/20 09:00:00').getTime();
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
		$(".t1").html(day);
		$(".h1").html(hour);
		$(".m1").html(minutes);
		$(".s1").html(ss);
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
		$(".t2").html(day);
		$(".h2").html(hour);
		$(".m2").html(minutes);
		$(".s2").html(ss);
	}, 1000)
	
	setInterval(function() {
		var endTime = new Date('2016/8/21 19:00:00').getTime();
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
		$(".t3").html(day);
		$(".h3").html(hour);
		$(".m3").html(minutes);
		$(".s3").html(ss);
	}, 1000)

	var demo = document.cookie.split("&");
	var demo1 = demo[0]
	var demo2 = demo1.split(":");
	var demo3 = demo2[1]
	if(demo3!=undefined){
	$('#dl1').html("<span>欢迎光临莎莎官网！</span>" + demo3 + "<a style='margin-left:5px;text-decoration: underline;color:#EC3E7D' href='javascript:void(0);'>退出</a>");
	}
	
})