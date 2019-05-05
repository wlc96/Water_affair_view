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