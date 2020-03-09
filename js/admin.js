


var bodyHeight = document.documentElement.clientHeight-101;
$(".main").css("height",bodyHeight+'px');


$(".menu-item-tit").click(function(){

	var m = $(this);
	var p = m.parent(".menu-item");
	var c = p.find(".menu-item-content");
	var is = m.hasClass("curr");

	if (!is) {
		c.show();
		m.addClass("curr");
	} else {
		c.hide();
		m.removeClass("curr");
	}
	//c.toggle();

});


function tab(tabTit,tabConbox,shijian){

    $(tabConbox).find(".item:first").show();

    $(tabTit).find("li").bind(shijian,function(){
        $(this).addClass("curr").siblings("li").removeClass("curr"); 
        
        var activeindex = $(tabTit).find("li").index(this);
        
        $(tabConbox).children().eq(activeindex).show().siblings().hide();

        return false;
    });
}
tab("#J-tab","#J-conbox","click");


