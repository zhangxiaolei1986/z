"use strict";
function init(cb) {

	var dv = $(".item");

	var m = null;
	var mv = null;
	var ms = null;
	var mz = null;
	var mc = null;
	var vi = null;

	var x = 0;
	var y = 0;
	var l = 0;
	var t = 0;
	//var zc = false;
	var isDown = false;
	var isClick = false;
	

	// $(".content-z").click(function(e){
	// 	e.preventDefault();
	// 	e.stopPropagation()
	// 	alert("dd");
	// });
	// $(".content-z").unbind("mousedown");
 //    $(".content-z").click(function(){
 //    	alert("d");
 //    });

	//按下
	dv.on("mousedown",function(e){
        
        m = $(this);
        ms = String(m.data("status"));
        mv = m.find(".item-video");
        mz = m.find(".content-z");
        mc = m.find(".content-c");
        vi = m.find("video");
        //zc = m.hasClass("content-b");


        //获取x坐标和y坐标
	    x = e.clientX;
	    y = e.clientY; 
	    console.log(x,y)
	    

	    //获取左部和顶部的偏移量
	    l = m.offset().left;
	    t = m.offset().top;

	    isClick = true;

	 //    mz.on("mousedown",function(e){
  //   		var me = $(this);
  //   		zc = me.hasClass("content-b");
		// 	mz.html("已点赞");
		// });

    });

	//移动
	dv.on("mousemove",function(e){

		if (isClick == false) {
	        return;
	    }
	    
	    //获取x和y
	    var nx = e.clientX;
	    var ny = e.clientY;

	    // 计算是否移动
	    if (x !== nx || y !== ny) {
	    	
	    	//计算移动后的左偏移量和顶部的偏移量
		    var nl = nx - (x - l);
		    var nt = ny - (y - t);

	    	//设置样式  
    		m.css("cursor","move");
		    m.css("position", "absolute");
		    m.css("left", nl + 'px');
		    m.css("top", nt + 'px');

		    //开关打开
		    isDown = true;
		}
	});

	//抬起
    dv.on("mouseup",function(e){
    	// console.log(iszc);
    	// if (iszc) {
    	// 	//开关关闭
		   //  m.css("cursor","default");
		   //  isDown = false;
		   //  isClick = false;
     //    	return;
     //    }

	    //判断是否放大
		if ( ms === "false" &&  isDown === false) {

			//放大
			m.css("position", "absolute");
		    m.css("left", x + 'px');
		    m.css("top", y + 'px');

			mv.addClass("item-video-b");
			m.data("status","true");

			vi.trigger('play');
			//vi.play();//播放

			// mz.show();
			// mc.show();

			
		} else if ( ms === "true" &&  isDown === false ){

			//缩小
			mv.removeClass("item-video-b");
			m.data("status","false");

			//回到原处
			m.css("position", "static");
			vi.trigger('pause');

			mz.hide();
			mc.hide();

		} else {

		    //开关关闭
		    m.css("cursor","default");
		    isDown = false;

		}

		isClick = false;
	});

}
module.exports = {
    init: init
};