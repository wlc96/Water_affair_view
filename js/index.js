$(function() {
	/*左侧导航栏显示隐藏功能*/
	$(".subNav").click(function() {
			/*显示*/
			if($(this).find("span:first-child").attr('class') == "title-icon fa fa-caret-right") {
				$(this).find("span:first-child").removeClass("fa-caret-right");
				$(this).find("span:first-child").addClass("fa-caret-down");
				$(this).removeClass("sublist-down");
				$(this).addClass("sublist-up");
			}
			/*隐藏*/
			else {
				$(this).find("span:first-child").removeClass("fa-caret-down");
				$(this).find("span:first-child").addClass("fa-caret-right");
				$(this).removeClass("sublist-up");
				$(this).addClass("sublist-down");
			}
			// 修改数字控制速度， slideUp(500)控制卷起速度
			$(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(300);
		})
		/*左侧导航栏缩进功能*/
// 		$('.left-main').mouseover(function(){
// 			$(this).removeClass("left-off");
// 			$(this).addClass("left-full");
// 			$(this).siblings().find(".right-product").removeClass("right-off");
// 			$(this).siblings().find(".right-product").addClass("right-full");
// 			$(this).find('.sidebar-fold').find('span').attr('class',"fa fa-dedent");
// 		})
// 		$('.left-main').mouseout(function(){
// 			$(this).removeClass("left-full");
// 			$(this).addClass("left-off");
// 			$(this).siblings().find(".right-product").removeClass("right-full");
// 			$(this).siblings().find(".right-product").addClass("right-off");
// 			$(this).find('.sidebar-fold').find('span').attr('class',"fa fa-indent");
// 		})
	$(".sidebar-fold").click(function() {
		if($("#leftNav").attr('class') == "left-main left-full") {			//收起
			$("#leftNav").removeClass("left-full");
			$("#leftNav").addClass("left-off");

			$("#leftNav").parent().find(".right-product").removeClass("right-full");
			$("#leftNav").parent().find(".right-product").addClass("right-off");
			
			$("#leftNav").parent().find(".nav-style").removeClass("nav-full");
			$("#leftNav").parent().find(".nav-style").addClass("nav-off");
			$(this).find('span').attr('class',"fa fa-indent");
			
		} else {																//打开
			$("#leftNav").removeClass("left-off");
			$("#leftNav").addClass("left-full");

			$("#leftNav").parent().find(".right-product").removeClass("right-off");
			$("#leftNav").parent().find(".right-product").addClass("right-full");
			
			$("#leftNav").parent().find(".nav-style").removeClass("nav-off");
			$("#leftNav").parent().find(".nav-style").addClass("nav-full");
			$(this).find('span').attr('class',"fa fa-dedent");
		}
	})

	/*左侧鼠标移入提示功能*/
	$(".sBox ul li").mouseenter(function() {
		if($(this).find("span:last-child").css("display") == "none") {
			$(this).find("div").show();
		}
	}).mouseleave(function() {
		$(this).find("div").hide();
	})
	$('.subNavBox li').click(function(){
		$('.subNavBox ul li').removeClass('active');
		$(this).addClass('active');
	})
	
	$('.navContent>li>a').click(function(e){
		e.preventDefault();
		var href=$(this).attr('href');
		var iframe=$('#ifr')[0].src=href;
	})
	$('#a1>li').click(function(){
		$(this).addClass('active').siblings('.active').removeClass('active');
		var id=$(this).find('a').attr('href');
		$(id).removeClass('hide').siblings().addClass('hide');
		$(id).find('div').find('ul').find('li').removeClass('active');
		$(id).find('div').find('ul').find('li:eq(0)').addClass('active');
		var id2=$(id).find('div').find('ul').find('li:eq(0)').find('a').attr('href');
		var iframe=$('#ifr')[0].src=id2;
	})
	
	$('#drop_menu').mouseover(function(){
		$(this).css('background','#E5E5E5');
		$(this).parent().find('.user-menu').css('display','block');
	});
	$('.dMenu').mouseleave(function(){
		$('#drop_menu').css('background','#fff');
		$('.user-menu').css('display','none');
	});
})


