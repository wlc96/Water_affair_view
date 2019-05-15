/****************换表管理*******************/
var defaultNum1 = 10;
var table1;
//初始化页码
function initPage1(defaultNum1) {
	$(".selNum1").find('option[value="' + defaultNum1 + '"]').prop("selected", true);
	$.ajax({
		type: "POST",
		url: ApiUrl + global_url.change,
		cache: false, //禁用缓存
		data: {
			pre_page: defaultNum1,
			type: 1
		}, //传入组装的参数
		contentType: "application/x-www-form-urlencoded;",
		dataType: "json",
		beforeSend: function(xhr) {
			xhr.setRequestHeader('access-token', localStorage.getItem("access-token"));
		},
		success: function(result) {
			//console.log(JSON.stringify(result));
			if (result.result) {
				//初始化表格数据
				initTableData1(defaultNum1);
				//渲染页码
				var currentPage = 1;
				var totalPages = result.data.last_page;
				$("#page").bootstrapPaginator({
					bootstrapMajorVersion: 3, //对应的bootstrap版本
					currentPage: currentPage, //当前页数
					numberOfPages: 10, //每次显示页数
					totalPages: totalPages, //总页数
					shouldShowPage: true, //是否显示该按钮
					useBootstrapTooltip: true,
					//分页点击事件
					onPageClicked: function(event, originalEvent, type, page) {
						console.log(ApiUrl + global_url.change + "?page=" + page);
						//点击分页重载表格
						table1.ajax.url(ApiUrl + global_url.change + "?page=" + page).load();
					}
				});

			}
		}
	});
}
//初始化表格
function initTableData1(defaultNum1) {
	table1 = $('#HuanBiaoTable').DataTable({
		paging: false,
		pageLength: 10,
		responsive: true,
		ordering : false,
		destroy: true,
		bAutoWidth: false,
		lengthMenu: [5, 10, 25, 50, ],
		bFilter: false,
		sPaginationType: "full_numbers",
		bLengthChange: true,
		info: false,
		sDom: '<"top"<"clear">>rt<"bottom"lfip<"clear">>',
		language: {
			"sProcessing": "处理中...",
			"sLengthMenu": "显示 _MENU_ 项结果",
			"sZeroRecords": "没有匹配结果",
			// "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
			"sInfo": "共 _TOTAL_ 项",
			"sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
			"sInfoFiltered": "(由 _MAX_ 项结果过滤)",
			"sInfoPostFix": "",
			"sSearch": "搜索:",
			"sUrl": "",
			"sEmptyTable": "表中数据为空",
			"sLoadingRecords": "载入中...",
			"sInfoThousands": ",",
			"oPaginate": {
				"sFirst": "首页",
				"sPrevious": "上页",
				"sNext": "下页",
				"sLast": "末页"
			},
			"oAria": {
				"sSortAscending": ": 以升序排列此列",
				"sSortDescending": ": 以降序排列此列"
			}
		},
		ajax: {
			url: ApiUrl + global_url.change,
			type: "POST",
			contentType: "application/x-www-form-urlencoded",
			beforeSend: function(xhr) {
				xhr.setRequestHeader('access-token', localStorage.getItem("access-token"));
			},
			data: function(obj) {
				obj.pre_page = defaultNum1;
				obj.type = 1;
			},
			dataSrc: function(json) {
				console.log("获取到的换表列表的数据：" + JSON.stringify(json));
				return json.data.data;
			}
		},
		fnServerParams: function(aoData) { //这个里面的 aoData就是会发送到后端的数据
			//在这里 你可以对 发送到后端之前做任何事情. 
			// aoData._rand = Math.random();
			console.log(aoData);
		},
		columns: [{
				data: "number"
			},
			{
				data: "user_num"
			},
			{
				data: "user_name"
			},
			{
				data: "phone"
			},
			{
				data: "station_name"
			},
			{
				data: "old_num"
			},
			{
				data: "new_num"
			}
		],
		buttons: [{
				extend: 'copy',
				className: 'copyButton',
				text: "复制"
			},
			{
				extend: 'excel',
				className: 'excelButton',
				text: "导出excel",
				title: 'ExampleFile'
			},
			{
				extend: 'pdf',
				className: 'pdfButton',
				text: "导出pdf",
				title: 'ExampleFile'
			},
			{
				extend: 'print',
				className: 'printButton',
				text: "打印",
				customize: function(win) {
					$(win.document.body).addClass('white-bg');
					$(win.document.body).css('font-size', '10px');

					$(win.document.body).find('table')
						.addClass('compact')
						.css('font-size', 'inherit');
				}
			}
		],
		fnCreatedRow: function(nRow, aData, iDataIndex) { //将id绑定在tr
			if (typeof(aData.id) != "undefined") {
				$(nRow).attr("tr_id", aData.id);
			}
		}
	});
}
//选择每页显示条数
$(".selNum1").change(function() {
	var num = $(this).find("option:checked").val();
	defaultNum1 = num;
	//初始化页码
	initPage1(defaultNum1);
})
/****************欠费停水列表*******************/
var defaultNum2 = 10;
var table2;
//初始化页码
function initPage2(defaultNum2) {
	$(".selNum2").find('option[value="' + defaultNum2 + '"]').prop("selected", true);
	$.ajax({
		type: "POST",
		url: ApiUrl + global_url.stop,
		cache: false, //禁用缓存
		data: {
			pre_page: defaultNum2,
		}, //传入组装的参数
		contentType: "application/x-www-form-urlencoded;",
		dataType: "json",
		beforeSend: function(xhr) {
			xhr.setRequestHeader('access-token', localStorage.getItem("access-token"));
		},
		success: function(result) {
			//console.log(JSON.stringify(result));
			if (result.result) {
				//初始化表格数据
				initTableData2(defaultNum2);
				//渲染页码
				var currentPage = 1;
				var totalPages = result.data.last_page;
				$("#page2").bootstrapPaginator({
					bootstrapMajorVersion: 3, //对应的bootstrap版本
					currentPage: currentPage, //当前页数
					numberOfPages: 10, //每次显示页数
					totalPages: totalPages, //总页数
					shouldShowPage: true, //是否显示该按钮
					useBootstrapTooltip: true,
					//分页点击事件
					onPageClicked: function(event, originalEvent, type, page) {
						console.log(ApiUrl + global_url.stop + "?page=" + page);
						//点击分页重载表格
						table2.ajax.url(ApiUrl + global_url.stop + "?page=" + page).load();
					}
				});

			}
		}
	});
}
//初始化表格
function initTableData2(defaultNum2) {
	table2 = $('#QianFeiTable').DataTable({
		paging: false,
		pageLength: 10,
		responsive: true,
		ordering : false,
		destroy: true,
		bAutoWidth: false,
		lengthMenu: [5, 10, 25, 50, ],
		bFilter: false,
		sPaginationType: "full_numbers",
		bLengthChange: true,
		info: false,
		sDom: '<"top"<"clear">>rt<"bottom"lfip<"clear">>',
		language: {
			"sProcessing": "处理中...",
			"sLengthMenu": "显示 _MENU_ 项结果",
			"sZeroRecords": "没有匹配结果",
			// "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
			"sInfo": "共 _TOTAL_ 项",
			"sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
			"sInfoFiltered": "(由 _MAX_ 项结果过滤)",
			"sInfoPostFix": "",
			"sSearch": "搜索:",
			"sUrl": "",
			"sEmptyTable": "表中数据为空",
			"sLoadingRecords": "载入中...",
			"sInfoThousands": ",",
			"oPaginate": {
				"sFirst": "首页",
				"sPrevious": "上页",
				"sNext": "下页",
				"sLast": "末页"
			},
			"oAria": {
				"sSortAscending": ": 以升序排列此列",
				"sSortDescending": ": 以降序排列此列"
			}
		},
		ajax: {
			url: ApiUrl + global_url.stop,
			type: "POST",
			contentType: "application/x-www-form-urlencoded",
			beforeSend: function(xhr) {
				xhr.setRequestHeader('access-token', localStorage.getItem("access-token"));
			},
			data: function(obj) {
				obj.pre_page = defaultNum2;
			},
			dataSrc: function(json) {
				console.log("获取到的欠费列表的数据：" + JSON.stringify(json));
				return json.data.data;
			}
		},
		fnServerParams: function(aoData) { //这个里面的 aoData就是会发送到后端的数据
			//在这里 你可以对 发送到后端之前做任何事情. 
			// aoData._rand = Math.random();
			console.log(aoData);
		},
		columns: [{
				data: "number"
			},
			{
				data: "user_num"
			},
			{
				data: "user_name"
			},
			{
				data: "phone"
			},
			{
				data: "station_name"
			},
			{
				render:function(data, type, row){
					return row.created_at.date;
				}
			},
			{
				data: "type"
			}
		],
		buttons: [{
				extend: 'copy',
				className: 'copyButton',
				text: "复制"
			},
			{
				extend: 'excel',
				className: 'excelButton',
				text: "导出excel",
				title: 'ExampleFile'
			},
			{
				extend: 'pdf',
				className: 'pdfButton',
				text: "导出pdf",
				title: 'ExampleFile'
			},
			{
				extend: 'print',
				className: 'printButton',
				text: "打印",
				customize: function(win) {
					$(win.document.body).addClass('white-bg');
					$(win.document.body).css('font-size', '10px');

					$(win.document.body).find('table')
						.addClass('compact')
						.css('font-size', 'inherit');
				}
			}
		],
		fnCreatedRow: function(nRow, aData, iDataIndex) { //将id绑定在tr
			if (typeof(aData.id) != "undefined") {
				$(nRow).attr("tr_id", aData.id);
			}
		}
	});
}
//选择每页显示条数
$(".selNum2").change(function() {
	var num = $(this).find("option:checked").val();
	defaultNum2 = num;
	//初始化页码
	initPage2(defaultNum2);
})
/****************恢复供水列表*******************/
var defaultNum3 = 10;
var table3;
//初始化页码
function initPage3(defaultNum3) {
	$(".selNum3").find('option[value="' + defaultNum3 + '"]').prop("selected", true);
	$.ajax({
		type: "POST",
		url: ApiUrl + global_url.eqrecovery,
		cache: false, //禁用缓存
		data: {
			pre_page: defaultNum3,
		}, //传入组装的参数
		contentType: "application/x-www-form-urlencoded;",
		dataType: "json",
		beforeSend: function(xhr) {
			xhr.setRequestHeader('access-token', localStorage.getItem("access-token"));
		},
		success: function(result) {
			//console.log(JSON.stringify(result));
			if (result.result) {
				//初始化表格数据
				initTableData3(defaultNum3);
				//渲染页码
				var currentPage = 1;
				var totalPages = result.data.last_page;
				$("#page3").bootstrapPaginator({
					bootstrapMajorVersion: 3, //对应的bootstrap版本
					currentPage: currentPage, //当前页数
					numberOfPages: 10, //每次显示页数
					totalPages: totalPages, //总页数
					shouldShowPage: true, //是否显示该按钮
					useBootstrapTooltip: true,
					//分页点击事件
					onPageClicked: function(event, originalEvent, type, page) {
						console.log(ApiUrl + global_url.eqrecovery + "?page=" + page);
						//点击分页重载表格
						table3.ajax.url(ApiUrl + global_url.eqrecovery + "?page=" + page).load();
					}
				});

			}
		}
	});
}
//初始化表格
function initTableData3(defaultNum3) {
	table3 = $('#HuiFuTable').DataTable({
		paging: false,
		pageLength: 10,
		responsive: true,
		destroy: true,
		ordering : false,
		bAutoWidth: false,
		lengthMenu: [5, 10, 25, 50, ],
		bFilter: false,
		sPaginationType: "full_numbers",
		bLengthChange: true,
		info: false,
		sDom: '<"top"<"clear">>rt<"bottom"lfip<"clear">>',
		language: {
			"sProcessing": "处理中...",
			"sLengthMenu": "显示 _MENU_ 项结果",
			"sZeroRecords": "没有匹配结果",
			// "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
			"sInfo": "共 _TOTAL_ 项",
			"sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
			"sInfoFiltered": "(由 _MAX_ 项结果过滤)",
			"sInfoPostFix": "",
			"sSearch": "搜索:",
			"sUrl": "",
			"sEmptyTable": "表中数据为空",
			"sLoadingRecords": "载入中...",
			"sInfoThousands": ",",
			"oPaginate": {
				"sFirst": "首页",
				"sPrevious": "上页",
				"sNext": "下页",
				"sLast": "末页"
			},
			"oAria": {
				"sSortAscending": ": 以升序排列此列",
				"sSortDescending": ": 以降序排列此列"
			}
		},
		ajax: {
			url: ApiUrl + global_url.eqrecovery,
			type: "POST",
			contentType: "application/x-www-form-urlencoded",
			beforeSend: function(xhr) {
				xhr.setRequestHeader('access-token', localStorage.getItem("access-token"));
			},
			data: function(obj) {
				obj.pre_page = defaultNum3;
			},
			dataSrc: function(json) {
				console.log("获取到的欠费列表的数据：" + JSON.stringify(json));
				return json.data.data;
			}
		},
		fnServerParams: function(aoData) { //这个里面的 aoData就是会发送到后端的数据
			//在这里 你可以对 发送到后端之前做任何事情. 
			// aoData._rand = Math.random();
			console.log(aoData);
		},
		columns: [{
				data: "number"
			},
			{
				data: "user_num"
			},
			{
				data: "user_name"
			},
			{
				data: "phone"
			},
			{
				data: "station_name"
			},
			{
				render:function(data, type, row){
					return row.created_at.date;
				}
			},
			{
				data: "type"
			},
		],
		buttons: [{
				extend: 'copy',
				className: 'copyButton',
				text: "复制"
			},
			{
				extend: 'excel',
				className: 'excelButton',
				text: "导出excel",
				title: 'ExampleFile'
			},
			{
				extend: 'pdf',
				className: 'pdfButton',
				text: "导出pdf",
				title: 'ExampleFile'
			},
			{
				extend: 'print',
				className: 'printButton',
				text: "打印",
				customize: function(win) {
					$(win.document.body).addClass('white-bg');
					$(win.document.body).css('font-size', '10px');

					$(win.document.body).find('table')
						.addClass('compact')
						.css('font-size', 'inherit');
				}
			}
		],
		fnCreatedRow: function(nRow, aData, iDataIndex) { //将id绑定在tr
			if (typeof(aData.id) != "undefined") {
				$(nRow).attr("tr_id", aData.id);
			}
		}
	});
}
//选择每页显示条数
$(".selNum3").change(function() {
	var num = $(this).find("option:checked").val();
	defaultNum3 = num;
	//初始化页码
	initPage3(defaultNum3);
})
/****************销户拆表*******************/
var defaultNum4 = 10;
var table4;
//初始化页码
function initPage4(defaultNum4) {
	$(".selNum4").find('option[value="' + defaultNum4 + '"]').prop("selected", true);
	$.ajax({
		type: "POST",
		url: ApiUrl + global_url.change,
		cache: false, //禁用缓存
		data: {
			pre_page: defaultNum4,
			type : 3
		}, //传入组装的参数
		contentType: "application/x-www-form-urlencoded;",
		dataType: "json",
		beforeSend: function(xhr) {
			xhr.setRequestHeader('access-token', localStorage.getItem("access-token"));
		},
		success: function(result) {
			//console.log(JSON.stringify(result));
			if (result.result) {
				//初始化表格数据
				initTableData4(defaultNum4);
				//渲染页码
				var currentPage = 1;
				var totalPages = result.data.last_page;
				$("#page4").bootstrapPaginator({
					bootstrapMajorVersion: 3, //对应的bootstrap版本
					currentPage: currentPage, //当前页数
					numberOfPages: 10, //每次显示页数
					totalPages: totalPages, //总页数
					shouldShowPage: true, //是否显示该按钮
					useBootstrapTooltip: true,
					//分页点击事件
					onPageClicked: function(event, originalEvent, type, page) {
						console.log(ApiUrl + global_url.change + "?page=" + page);
						//点击分页重载表格
						table4.ajax.url(ApiUrl + global_url.change + "?page=" + page).load();
					}
				});

			}
		}
	});
}
//初始化表格
function initTableData4(defaultNum4) {
	table4 = $('#XiaoHuTable').DataTable({
		paging: false,
		pageLength: 10,
		responsive: true,
		destroy: true,
		bAutoWidth: false,
		ordering : false,
		lengthMenu: [5, 10, 25, 50, ],
		bFilter: false,
		sPaginationType: "full_numbers",
		bLengthChange: true,
		info: false,
		sDom: '<"top"<"clear">>rt<"bottom"lfip<"clear">>',
		language: {
			"sProcessing": "处理中...",
			"sLengthMenu": "显示 _MENU_ 项结果",
			"sZeroRecords": "没有匹配结果",
			// "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
			"sInfo": "共 _TOTAL_ 项",
			"sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
			"sInfoFiltered": "(由 _MAX_ 项结果过滤)",
			"sInfoPostFix": "",
			"sSearch": "搜索:",
			"sUrl": "",
			"sEmptyTable": "表中数据为空",
			"sLoadingRecords": "载入中...",
			"sInfoThousands": ",",
			"oPaginate": {
				"sFirst": "首页",
				"sPrevious": "上页",
				"sNext": "下页",
				"sLast": "末页"
			},
			"oAria": {
				"sSortAscending": ": 以升序排列此列",
				"sSortDescending": ": 以降序排列此列"
			}
		},
		ajax: {
			url: ApiUrl + global_url.change,
			type: "POST",
			contentType: "application/x-www-form-urlencoded",
			beforeSend: function(xhr) {
				xhr.setRequestHeader('access-token', localStorage.getItem("access-token"));
			},
			data: function(obj) {
				obj.pre_page = defaultNum4;
				obj.type = 3;
			},
			dataSrc: function(json) {
				console.log("获取到的销户列表的数据：" + JSON.stringify(json));
				return json.data.data;
			}
		},
		fnServerParams: function(aoData) { //这个里面的 aoData就是会发送到后端的数据
			//在这里 你可以对 发送到后端之前做任何事情. 
			// aoData._rand = Math.random();
			console.log(aoData);
		},
		columns: [{
				data: "number"
			},
			{
				data: "user_num"
			},
			{
				data: "user_name"
			},
			{
				data: "phone"
			},
			{
				data: "station_name"
			},
			{
				data: "move_time"
			},
			{
				data: "old_num"
			},
			{
				data: "start_num"
			},
			{
				data: "end_num"
			},
		],
		buttons: [{
				extend: 'copy',
				className: 'copyButton',
				text: "复制"
			},
			{
				extend: 'excel',
				className: 'excelButton',
				text: "导出excel",
				title: 'ExampleFile'
			},
			{
				extend: 'pdf',
				className: 'pdfButton',
				text: "导出pdf",
				title: 'ExampleFile'
			},
			{
				extend: 'print',
				className: 'printButton',
				text: "打印",
				customize: function(win) {
					$(win.document.body).addClass('white-bg');
					$(win.document.body).css('font-size', '10px');

					$(win.document.body).find('table')
						.addClass('compact')
						.css('font-size', 'inherit');
				}
			}
		],
		fnCreatedRow: function(nRow, aData, iDataIndex) { //将id绑定在tr
			if (typeof(aData.id) != "undefined") {
				$(nRow).attr("tr_id", aData.id);
			}
		}
	});
}
//选择每页显示条数
$(".selNum4").change(function() {
	var num = $(this).find("option:checked").val();
	defaultNum4 = num;
	//初始化页码
	initPage4(defaultNum4);
})
/****************复装*******************/
var defaultNum5 = 10;
var table5;
//初始化页码
function initPage5(defaultNum5) {
	$(".selNum5").find('option[value="' + defaultNum5 + '"]').prop("selected", true);
	$.ajax({
		type: "POST",
		url: ApiUrl + global_url.change,
		cache: false, //禁用缓存
		data: {
			pre_page: defaultNum5,
			type : 4
		}, //传入组装的参数
		contentType: "application/x-www-form-urlencoded;",
		dataType: "json",
		beforeSend: function(xhr) {
			xhr.setRequestHeader('access-token', localStorage.getItem("access-token"));
		},
		success: function(result) {
			//console.log(JSON.stringify(result));
			if (result.result) {
				//初始化表格数据
				initTableData5(defaultNum5);
				//渲染页码
				var currentPage = 1;
				var totalPages = result.data.last_page;
				$("#page5").bootstrapPaginator({
					bootstrapMajorVersion: 3, //对应的bootstrap版本
					currentPage: currentPage, //当前页数
					numberOfPages: 10, //每次显示页数
					totalPages: totalPages, //总页数
					shouldShowPage: true, //是否显示该按钮
					useBootstrapTooltip: true,
					//分页点击事件
					onPageClicked: function(event, originalEvent, type, page) {
						console.log(ApiUrl + global_url.change + "?page=" + page);
						//点击分页重载表格
						table5.ajax.url(ApiUrl + global_url.change + "?page=" + page).load();
					}
				});

			}
		}
	});
}
//初始化表格
function initTableData5(defaultNum5) {
	table5 = $('#FuZhuangTable').DataTable({
		paging: false,
		pageLength: 10,
		responsive: true,
		destroy: true,
		bAutoWidth: false,
		ordering : false,
		lengthMenu: [5, 10, 25, 50, ],
		bFilter: false,
		sPaginationType: "full_numbers",
		bLengthChange: true,
		info: false,
		sDom: '<"top"<"clear">>rt<"bottom"lfip<"clear">>',
		language: {
			"sProcessing": "处理中...",
			"sLengthMenu": "显示 _MENU_ 项结果",
			"sZeroRecords": "没有匹配结果",
			// "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
			"sInfo": "共 _TOTAL_ 项",
			"sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
			"sInfoFiltered": "(由 _MAX_ 项结果过滤)",
			"sInfoPostFix": "",
			"sSearch": "搜索:",
			"sUrl": "",
			"sEmptyTable": "表中数据为空",
			"sLoadingRecords": "载入中...",
			"sInfoThousands": ",",
			"oPaginate": {
				"sFirst": "首页",
				"sPrevious": "上页",
				"sNext": "下页",
				"sLast": "末页"
			},
			"oAria": {
				"sSortAscending": ": 以升序排列此列",
				"sSortDescending": ": 以降序排列此列"
			}
		},
		ajax: {
			url: ApiUrl + global_url.change,
			type: "POST",
			contentType: "application/x-www-form-urlencoded",
			beforeSend: function(xhr) {
				xhr.setRequestHeader('access-token', localStorage.getItem("access-token"));
			},
			data: function(obj) {
				obj.pre_page = defaultNum5;
				obj.type = 4;
			},
			dataSrc: function(json) {
				console.log("获取到的复装列表的数据：" + JSON.stringify(json));
				return json.data.data;
			}
		},
		fnServerParams: function(aoData) { //这个里面的 aoData就是会发送到后端的数据
			//在这里 你可以对 发送到后端之前做任何事情. 
			// aoData._rand = Math.random();
			console.log(aoData);
		},
		columns: [{
				data: "number"
			},
			{
				data: "user_num"
			},
			{
				data: "user_name"
			},
			{
				data: "phone"
			},
			{
				data: "station_name"
			},
			{
				data: "move_time"
			},
			{
				data: "end_num"
			},
			{
				data: "old_num"
			},
			{
				data: "new_num"
			},
		],
		buttons: [{
				extend: 'copy',
				className: 'copyButton',
				text: "复制"
			},
			{
				extend: 'excel',
				className: 'excelButton',
				text: "导出excel",
				title: 'ExampleFile'
			},
			{
				extend: 'pdf',
				className: 'pdfButton',
				text: "导出pdf",
				title: 'ExampleFile'
			},
			{
				extend: 'print',
				className: 'printButton',
				text: "打印",
				customize: function(win) {
					$(win.document.body).addClass('white-bg');
					$(win.document.body).css('font-size', '10px');

					$(win.document.body).find('table')
						.addClass('compact')
						.css('font-size', 'inherit');
				}
			}
		],
		fnCreatedRow: function(nRow, aData, iDataIndex) { //将id绑定在tr
			if (typeof(aData.id) != "undefined") {
				$(nRow).attr("tr_id", aData.id);
			}
		}
	});
}
//选择每页显示条数
$(".selNum5").change(function() {
	var num = $(this).find("option:checked").val();
	defaultNum5 = num;
	//初始化页码
	initPage5(defaultNum5);
})
/****************暂拆*******************/
var defaultNum6 = 10;
var table6;
//初始化页码
function initPage6(defaultNum6) {
	$(".selNum6").find('option[value="' + defaultNum6 + '"]').prop("selected", true);
	$.ajax({
		type: "POST",
		url: ApiUrl + global_url.change,
		cache: false, //禁用缓存
		data: {
			pre_page: defaultNum6,
			type : 2
		}, //传入组装的参数
		contentType: "application/x-www-form-urlencoded;",
		dataType: "json",
		beforeSend: function(xhr) {
			xhr.setRequestHeader('access-token', localStorage.getItem("access-token"));
		},
		success: function(result) {
			//console.log(JSON.stringify(result));
			if (result.result) {
				//初始化表格数据
				initTableData6(defaultNum6);
				//渲染页码
				var currentPage = 1;
				var totalPages = result.data.last_page;
				$("#page6").bootstrapPaginator({
					bootstrapMajorVersion: 3, //对应的bootstrap版本
					currentPage: currentPage, //当前页数
					numberOfPages: 10, //每次显示页数
					totalPages: totalPages, //总页数
					shouldShowPage: true, //是否显示该按钮
					useBootstrapTooltip: true,
					//分页点击事件
					onPageClicked: function(event, originalEvent, type, page) {
						console.log(ApiUrl + global_url.change + "?page=" + page);
						//点击分页重载表格
						table6.ajax.url(ApiUrl + global_url.change + "?page=" + page).load();
					}
				});

			}
		}
	});
}
//初始化表格
function initTableData6(defaultNum6) {
	table6 = $('#ZanChaiTable').DataTable({
		paging: false,
		pageLength: 10,
		responsive: true,
		destroy: true,
		ordering : false,
		bAutoWidth: false,
		lengthMenu: [5, 10, 25, 50, ],
		bFilter: false,
		sPaginationType: "full_numbers",
		bLengthChange: true,
		info: false,
		sDom: '<"top"<"clear">>rt<"bottom"lfip<"clear">>',
		language: {
			"sProcessing": "处理中...",
			"sLengthMenu": "显示 _MENU_ 项结果",
			"sZeroRecords": "没有匹配结果",
			// "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
			"sInfo": "共 _TOTAL_ 项",
			"sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
			"sInfoFiltered": "(由 _MAX_ 项结果过滤)",
			"sInfoPostFix": "",
			"sSearch": "搜索:",
			"sUrl": "",
			"sEmptyTable": "表中数据为空",
			"sLoadingRecords": "载入中...",
			"sInfoThousands": ",",
			"oPaginate": {
				"sFirst": "首页",
				"sPrevious": "上页",
				"sNext": "下页",
				"sLast": "末页"
			},
			"oAria": {
				"sSortAscending": ": 以升序排列此列",
				"sSortDescending": ": 以降序排列此列"
			}
		},
		ajax: {
			url: ApiUrl + global_url.change,
			type: "POST",
			contentType: "application/x-www-form-urlencoded",
			beforeSend: function(xhr) {
				xhr.setRequestHeader('access-token', localStorage.getItem("access-token"));
			},
			data: function(obj) {
				obj.pre_page = defaultNum5;
				obj.type = 2;
			},
			dataSrc: function(json) {
				console.log("获取到的复装列表的数据：" + JSON.stringify(json));
				return json.data.data;
			}
		},
		fnServerParams: function(aoData) { //这个里面的 aoData就是会发送到后端的数据
			//在这里 你可以对 发送到后端之前做任何事情. 
			// aoData._rand = Math.random();
			console.log(aoData);
		},
		columns: [{
				data: "number"
			},
			{
				data: "user_num"
			},
			{
				data: "user_name"
			},
			{
				data: "phone"
			},
			{
				data: "station_name"
			},
			{
				data: "move_time"
			},
			{
				data: "old_num"
			},
			{
				data: "start_num"
			},
			{
				data: "end_num"
			},
		],
		buttons: [{
				extend: 'copy',
				className: 'copyButton',
				text: "复制"
			},
			{
				extend: 'excel',
				className: 'excelButton',
				text: "导出excel",
				title: 'ExampleFile'
			},
			{
				extend: 'pdf',
				className: 'pdfButton',
				text: "导出pdf",
				title: 'ExampleFile'
			},
			{
				extend: 'print',
				className: 'printButton',
				text: "打印",
				customize: function(win) {
					$(win.document.body).addClass('white-bg');
					$(win.document.body).css('font-size', '10px');

					$(win.document.body).find('table')
						.addClass('compact')
						.css('font-size', 'inherit');
				}
			}
		],
		fnCreatedRow: function(nRow, aData, iDataIndex) { //将id绑定在tr
			if (typeof(aData.id) != "undefined") {
				$(nRow).attr("tr_id", aData.id);
			}
		}
	});
}
//选择每页显示条数
$(".selNum6").change(function() {
	var num = $(this).find("option:checked").val();
	defaultNum6 = num;
	//初始化页码
	initPage6(defaultNum6);
})