$(".tcp_content").focus(function() {
	if ($(this).val() == "") {
		$(".tcp_box p").css('display', 'none')
	}
}).blur(function() {
	if ($(this).val() == "") {
		$(".tcp_box p").css('display', 'block')
	} else {
		$(".tcp_box p").css('display', 'none')
	}
})
$(".pl_tcp").click(function() {
	$(this).css('display', 'none');
	$(".tcp_content").focus();
})
$(".tcp_content").change(function() {
	$(".t_h i").html($(".tcp_content").val().length)
})
$(".tcp_content").keydown(function() {
	$(".t_h i").html($(".tcp_content").val().length)
})
$(".tcp_content").keyup(function() {
	$(".t_h i").html($(".tcp_content").val().length)
})
//验证手机号是否合法
function IsMobilePhone(obj) {
	var partten = /^((\(\d{3}\))|(\d{3}\-))?13[0-9]\d{8}|14[0-9]\d{8}|15[0-9]\d{8}|17[0-9]\d{8}|18\d{9}$/;
	if (partten.test(obj)) {
		return true;
	} else {
		return false;
	}
}
//配置通知选项
toastr.options = {
	"closeButton": true,
	"debug": false,
	"progressBar": true,
	"preventDuplicates": false,
	"positionClass": "toast-top-center",
	"onclick": null,
	"showDuration": "400",
	"hideDuration": "1000",
	"timeOut": "1500",
	"extendedTimeOut": "1000",
	"showEasing": "swing",
	"hideEasing": "linear",
	"showMethod": "fadeIn",
	"hideMethod": "fadeOut"
}

$(".qpBtn").click(function() {
	$(".barBox").removeClass("show");
	var no = $(this).attr("data-no");
	if ($(this).attr("data-state") == "0") {
		$(this).find("img.small").addClass("show").siblings().removeClass("show");
		$(this).parent().addClass("show");
		$(this).parent().css("width", "100%");
		$(this).parent().css("height", totalHeight);
		$(this).parent().find(".echartBox").css("height", totalHeight);
		$(".barBox").css({
			"marginTop": "0px",
			"marginBottom": "0px",
			"marginLeft": "6px",
			"marginRight": "6px"
		});
		$(".qpBtn").css({
			"right": "40px",
			"bottom": "40px"
		})
		if (no == "1") {
			myChart1.setOption(option1, true);
			myChart1.resize();
		} else if (no == "2") {
			myChart2.setOption(option2, true);
			myChart2.resize();
		} else if (no == "3") {
			myChart3.setOption(option3, true);
			myChart3.resize();
		} else if (no == "4") {
			myChart4.setOption(option4, true);
			myChart4.resize();
		}

		$(this).attr("data-state", "1");
	} else if ($(this).attr("data-state") == "1") {
		$(".barBox").addClass("show");
		$(this).find("img.big").addClass("show").siblings().removeClass("show");
		CalculationWidth();
		$(".qpBtn").css({
			"right": "20px",
			"bottom": "20px"
		})
		if (no == "1") {
			myChart1.setOption(option1, true);
			myChart1.resize();
		} else if (no == "2") {
			myChart2.setOption(option2, true);
			myChart2.resize();
		} else if (no == "3") {
			myChart3.setOption(option3, true);
			myChart3.resize();
		} else if (no == "4") {
			myChart4.setOption(option4, true);
			myChart4.resize();
		}

		$(".barBox").css("margin", "6px");
		$(this).attr("data-state", "0");
	}
})

function CalculationWidth() {
	var totlaWidth = $(".wrapper-content").width();
	$(".echartBox").css("height", "450px");
	$(".barBox").css("width", (totlaWidth - 24) / 2);
	$(".barBox").css("height", "450px");
}
