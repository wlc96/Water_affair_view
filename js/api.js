//页面跳转基础地址
// var baseUrl = "http://127.0.0.1:8848/智慧水务/";
var baseUrl = "https://water.ym-zh.cn/"

//接口地址
// var ApiUrl = "http://water.ym-zh.cn/api/"; //接口地址
var ApiUrl = "http://w.ym-zh.cn/api/"; //接口地址
var ImgUrl = ""; //图片地址

/*
	登录账号：wlc123
	登录密码：123123
**/

var global_url = {
	login: "admin/login", //管理员登陆请求接口---（完）
	cityTree: "cityTree", //全部城市接口
	stationList: "equipment/station-list", //站点信息接口(列表)---（完）
	stationInfo: "equipment/station-info", //站点信息接口(详情)---（完）
	intelligent: "equipment/intelligent", //智能抄表接口---（完）
	change: "equipment/eqchange", //换表拆装信息接口---（完）
	stop: "equipment/eqstop", //停水管理接口---（完）
	eqrecovery: "equipment/eqrecovery", //恢复供水接口---（完）
	list: "Management/recharge/list", //订单信息接口---（完）
	company: "Management/finance/company", //公司财务信息接口---（完）
	wolist: "Management/workOrder/list", //工单列表接口---（完）
	woadd: "Management/workOrder/add", //添加工单接口---（完）
	oplist: "Management/operator/list", //操作员列表---（完）
	costList: "Management/cost/list", //成本管理接口---（完）
	costAdd: "Management/cost/add", //成本费用添加---（完）
	priceList: "Management/price/list", //价格管理列表---（完）
	invoiceList: "Management/invoice/list", //发票管理列表---（完）
	invoiceAdd: "Management/invoice/add", //添加发票---（完）
	patrolPlanAdd: "Operation/patrolPlan/add", //添加巡检计划接口---（完）
	patrolPlanList: "Operation/patrolPlan/list", //巡检计划列表---（完）
	patrolPlanEdit: "Operation/patrolPlan/edit", //编辑巡检计划接口---（完）
	patrolPlanDelete: "Operation/patrolPlan/delete", //删除巡检计划接口---（完）
	faultList: "Operation/fault/list", //故障列表接口---（完）
	faultEdit: "Operation/fault/edit", //故障编辑接口---（完）
	orderList: "Operation/order/list", //工单列表---（完）
	directoryList: "system/directory/list", //目录列表接口---（完）
	/*2019-04-29（新增）*/
	power : "admin/power",//权限接口---（完）
	stationInfoX : "equipment/station-infoX",//站点阶梯水价---（完）
	waterPrice : "equipment/waterPrice",//调整阶梯水价---（完）
	stationEdit : "equipment/stationEdit",//编站点信息---（完）
	eqEdit : "equipment/eqEdit",//操作---（完）
	eqList : "equipment/eqList",//---（完）
	orderEdit : "Operation/order/edit",//工单编辑---（完）
	orderDelete : "Operation/order/delete",//删除工单---（完）
	examinerAdd : "Operation/examiner/add",//巡检人员添加---（完）
	examinerList : "Operation/examiner/list",//巡检人员列表---（完）
	examinerEdit : "Operation/examiner/edit",//巡检人员编辑---（完）
	examinerDelete : "Operation/examiner/delete",//巡检人员删除---（完）
	eventList : "Operation/event/list",//事件列表---（完）
	eventEdit : "Operation/event/edit",//编辑事件---（完）
	eventDelete : "Operation/event/delete",//删除事件---（完）
	adminAdd : "system/admin/add",//增加管理员---（完）
	adminList : "system/admin/list",//管理员列表---（完）
	adminEdit : "system/admin/edit",//编辑管理员---（完）
	adminDelete : "system/admin/delete",//删除管理员---（完）
	roleAdd : "system/role/add",//增加角色---（完）
	roleList : "system/role/list",//角色列表---（完）
	roleEdit : "system/role/edit",//角色编辑---（完）
	roleDelete : "system/role/delete",//删除角色---（完）
	
	patrolPlanInfo : "Operation/patrolPlan/info",//单条巡检计划---（完）
	orderInfo : "Operation/order/info",//单条工单信息---（完）
	examinerInfo : "Operation/examiner/info",//单条巡检人信息---（完）
	eventInfo : "Operation/event/info",//单条事件信息---（完）
	adminInfo : "system/admin/info",//单条管理员信息---（完）
	roleInfo : "system/role/info",//单条角色信息---（完）
}

/*
//声明参数对象
var data = {};
//请求回调函数
var success = function(response) {
	console.log("获取到的数据：" + JSON.stringify(response));
}
//请求方法
ajaxFun.get(ApiUrl + global_url.ChengBenGuanLi, data, '', success);
*/
