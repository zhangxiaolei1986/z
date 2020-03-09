"use strict";

/**
 * 用户点击切换效果
 * 方便二次开发、用户需求不同
 * 放弃fullpage、isScrool等全屏滚动插件
 */


/**
 * 定义动画方案
 * animate.css样式表
 * animat: {
 * 	outleft: 'fadeOutLeft',
 * 	outright: 'fadeOutRight',
 * 	outup: 'fadeOutUp',
 * 	outdown: 'fadeOutDown',
 * 	inleft: 'fadeInLeftBig',
 * 	inright: 'fadeInRightBig',
 * 	inup: 'fadeInUpBig',
 * 	indown: 'fadeInDownBig'
 * 	}
 */
	
var scroll = {
	slideContainer: '#section',
	slidePages: '.slide-item'
}

var scheme = [{
	srcid:'0',
	nextid:'1',
	inanimate: 'fadeInDown',
	outanimate: 'fadeOutLeftBig',
	outtime: '1000'
},{
	srcid:'1',
	nextid:'2',
	inanimate: 'fadeInRight',
	outanimate: 'hide',
	outtime: '0'
},{
	srcid:'2',
	nextid:'0',
	inanimate: 'fadeInUpBig',
	outanimate: 'fadeOutDown',
	outtime: '500'
}];

function init(cb) {	
	
	//$(scroll.slideContainer).find(scroll.slidePages).hide();
	$(scroll.slideContainer).find(scroll.slidePages).eq(0).show().addClass("fadeInDown");
	
	$(".botton").click(function(){

		var me = $(this);
		var srcid = me.data("srcid");
		var nextid = scheme[srcid].nextid;

		animate( srcid,nextid );

	});
}

function animate ( srcid,nextid ) {

	var srcIdObj = $(scroll.slideContainer).find(scroll.slidePages).eq(srcid);
	var nextIdObj = $(scroll.slideContainer).find(scroll.slidePages).eq(nextid);

	srcIdObj.removeClass(scheme[srcid].inanimate);
	
	srcIdObj.addClass(scheme[srcid].outanimate,setTimeout(function(){
		srcIdObj.hide();

		if (parseInt(scheme[srcid].nextid,10) === 1) {
			$(".slide-botton").show();
		} else {
			$(".slide-botton").hide();
		}
		
		nextIdObj.show().addClass(scheme[nextid].inanimate);
		srcIdObj.removeClass(scheme[srcid].outanimate);

	},scheme[srcid].outtime));
}

module.exports = {
    init: init
};	