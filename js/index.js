$(function(){
	/**
	 * 计算屏幕高度
	 * @type {[type]}
	 */
	
	var bodyHeight = document.documentElement.clientHeight;
	$("#section").css("height",bodyHeight+'px');
	
	/**
	 * 加载数据
	 * 后端提供接口
	 */
	var navTpl = require('./tpl/nav.tpl');
	var menuTpl = require('./tpl/menu.tpl');
	var videoTpl = require('./tpl/video.tpl');
	var videoApi = require('./api/videoApi.js');

	var video = require('./video.js');
	var animate = require('./animate.js');

	var $itemNav = $(".item-nav");
	var $itemMenu = $(".item-menu");
	var $itemVide = $(".item-video");

	$itemNav.html(navTpl(function(){

		animate.init();
	}));
	

	$itemMenu.html(menuTpl(function(){

		animate.init();
	}));


	videoApi.init(function(data){

	    var code = parseInt(data.code, 10);
	    if(code === 200){

	        $itemVide.html(videoTpl(data));
	        animate.init();
	        video.init();

	    } 
	});
	
});