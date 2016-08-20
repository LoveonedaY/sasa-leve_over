$(document).ready(function() {
	var num = $('.banner-span span').length;
	var i_mun = 0;
	var timer_banner;

	$('.banner-ul li:gt(0)').hide(); //页面加载隐藏所有的li 除了第一个

	//底下小图标点击切换
	$('.banner-span span').hover(function() {
		$(this).addClass('banner-active')
			.siblings('span').removeClass('banner-active');
		var i_mun1 = $('.banner-span span').index(this);
		$('.banner-ul li').eq(i_mun1).fadeIn('slow')
			.siblings('li').fadeOut('slow');

		i_mun = i_mun1;
	});

	//自动播放函数
	function bannerMoveks() {
		timer_banner = setInterval(function() {
			move_banner()
		}, 4000)
	};
	bannerMoveks(); //开始自动播放

	//鼠标移动到banner上时停止播放
	$('.main-banner').mouseover(function() {
		clearInterval(timer_banner);
	});

	//鼠标离开 banner 开启定时播放
	$('.main-banner').mouseout(function() {
		bannerMoveks();
	});

	//banner 右边点击执行函数
	function move_banner() {
		if(i_mun == num - 1) {
			i_mun = -1
		}
		//大图切换
		$('.banner-ul li').eq(i_mun + 1).fadeIn('slow')
			.siblings('li').fadeOut('slow');
		//小图切换
		$('.banner-span span').eq(i_mun + 1).addClass('banner-active')
			.siblings('span').removeClass('banner-active');

		i_mun++

	}

})