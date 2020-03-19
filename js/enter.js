
/**
 * 思路
 * ru问题：不是单个入场
 * 移动问题：不是改变每个像素的样式，而是一个大容器
 * 定位问题：绝对定位，还是浮动？
 */


var e = e || window.event;
var h = document.documentElement.clientHeight;
var dvm = $(".wrap");
var dvc = $("#content");

dvm.css("height",h+'px');


/**
 * 请求接口
 * 定义模版
 * 显示数据
 */
var etpl = require('./tpl/enter.tpl');
var eurl = '../js/json/enter.json';
$.ajax({
    url: eurl,
    dataType: "json",
    data: {},
    type:'GET',
    success: function(data) {

    	data.data.j = 0;
    	dvc.html( etpl(data) );
		scroll();
    }
});



/**
 * 默认每帧5像素
 * 默认500毫秒
 */
var d = 10;
var t = 10; 
var r = null;
var t1 = null;

function scroll() {
	
	if (!t) {
		t = 500;
	}
	// 如果t是空值，则直接使用默认值
	
	if (!d) {
		d = 5;
	}

	r = parseInt(dvc.css('right'),10);

	t1 = setInterval(function(){

		if ( r < d ) {
			//清除定时器
			clearInterval(t1);
		}

		r = r-d;

		dvc.css("right", -r + 'px');

		compare();

	},t);
}

/**
 * 控制台
 * 比较
 * 获取左部和顶部的偏移量
 * 获取的元素上边框相对于html上边界的偏移量
 * var cleft = c.clientX;
 * var ctop = c.clientY;
 */
var o,
	owidth,
	oheight,
	oleft,
	otop,
	oright,
	obottom;

	o = $("#console");
	owidth = o.width();
	oheight = o.height();

	oleft = o.offset().left + 60; 
	otop = o.offset().top;

	oright = oleft + owidth + 60;
	obottom = otop + oheight;


var i,
	iwidth,
	iheight,
	ileft,
	itop,
	iright,
	ibottom;

function compare() {
	
	$(".item").each(function(index){

		i = $(this);

		iwidth = i.width();
		iheight = i.height();

		ileft = i.offset().left + 60;
		iright = ileft + iwidth + 60;

		itop = i.offset().top; 
		ibottom = itop + iheight;

		/**
		 * 在控制台-上方活动
		 * 在控制台-左边活动
		 * 在控制台-右边活动
		 * 在控制台-下方活动
		 */

		if (otop > ibottom || oleft > iright || oright < ileft || obottom < itop) {
			

		} else {
			/**
			 * 绝对定位
			 * 一:上边碰撞
			 * 二:下边碰撞
			 * 三:中间碰撞
			 */
			console.log("发生碰撞");

			if ( ibottom > otop) {

				console.log("上方发生碰撞");
			}
			if ( obottom > itop ) {

				console.log("下方发生碰撞");
			}
		}
	});
}

