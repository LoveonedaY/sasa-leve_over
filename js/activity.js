$(function() {
	$(".menu-all").hover(function() {
		$(".menu-box").show();
	}, function() {
		$(".menu-box").hide();
	});
	//---------------------------
	//倒计时方法
	function countDown(time, id) {
		id = '#' + id;
		var day_elem = $(id).find('.day');
		var hour_elem = $(id).find('.hour');
		var minute_elem = $(id).find('.minute');
		var second_elem = $(id).find('.second');
		var end_time = time; //js时间戳 time为php时间戳
		var now = "1471274051";
		var sys_second = (end_time - now);
		var timer = setInterval(function() {
			if (sys_second > 0) {
				sys_second -= 1;
				var day = Math.floor((sys_second / 3600) / 24);
				var hour = Math.floor((sys_second / 3600) % 24);
				var minute = Math.floor((sys_second / 60) % 60);
				var second = Math.floor(sys_second % 60);
				day_elem && $(day_elem).text(day < 10 ? "0" + day : day); //计算天
				$(hour_elem).text(hour < 10 ? "0" + hour : hour); //计算小时
				$(minute_elem).text(minute < 10 ? "0" + minute : minute); //计算分钟
				$(second_elem).text(second < 10 ? "0" + second : second); //计算秒杀
			} else {
				clearInterval(timer);
			}
		}, 1000);
	}
	//-----------------------------------------

        $('#seckill>li').each(function (index, items) {
            $(items).css({
            	background:'url(img/activity' + (index + 1) + '.jpg)',
            	backgroundSizing:"contain"
            })
        });
        $('#seckill>li').eq(0).css({
        	width:'675px'
        });
        $('#seckill>li').hover(function () {
            $(this).stop().animate({
                width: 675,
                opacity:1
            }, 300).siblings().stop().animate({
                width: 83,
                opacity:0.5
            }, 300)
        })
  


})