var ajaxFun = {
	post: function(url,data,userToken,success) {
		if(userToken == ""){
			$.ajax({
				url: url, //请求url
				type: "post",
				data : data,
				contentType: "application/x-www-form-urlencoded",
				success: function(response){
					success(response);
				},
				error: function(err){
					console.log("错误信息：" + JSON.stringify(err))
				}
			})
		}else{
			$.ajax({
				headers: {
					"access-token": userToken //此处放置请求到的用户token
				},
				url: url, //请求url
				type: "post",
				data : data,
				contentType: "application/x-www-form-urlencoded",
				success: function(response){
					success(response);
				},
				error: function(err){
					console.log("错误信息：" + JSON.stringify(err))
				}
			})
		}
	},
	get: function(url,data,userToken,success) {
		console.log('进入ajax方法...');
		//发送数据
		var requestMsg="";
		for (var i in data) {
		  requestMsg += (i + "=" + data[i]+"&")
		  //console.log(i, ":", obj[i]);
		}
		console.log("------------网络请求-----------");
		console.log((url + (requestMsg != "" ? '?' + requestMsg.substring(0, requestMsg.length - 1) : requestMsg) + "|" + "GET"));
		$.ajax({
			url: url, //请求url
			data: data,
			beforeSend: function(request) {
				request.setRequestHeader("access-token", userToken);
			},
			dataType: 'JSON',
			async: false, //请求是否异步，默认为异步
			type: 'GET',
			success: function(response) {
				success(response);
			},
			error: function(xhr, type, errorThrown) {
				//异常处理；			
				console.log('xhr:' + xhr + "|type:" + type + "|errorThrown:" + errorThrown);
			}
		});
	},
	getUrlParam : function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = window.location.search.substr(1).match(reg); //匹配目标参数
		if (r != null) {
			return unescape(r[2]);
		};
		return null;
	}
}
