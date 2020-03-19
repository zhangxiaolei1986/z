/*! <DEBUG:undefined> */
function anonymous($data,$filename) {'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,set=$data.set,j=$data.j,$each=$utils.$each,data=$data.data,v=$data.v,i=$data.i,$out='';$out+=' ';
$out+=$escape(set j = 0);
$out+=' ';
$each(data.list,function(v,i){
$out+=' ';
if(i < 10 ){
$out+=' <div class="item" style="top:0px;left:';
$out+=$escape(i*10+i*120);
$out+='px;"> <img src="';
$out+=$escape(v.img);
$out+='"> </div> ';
}
$out+=' ';
if(i > 10 && i < 19 ){
$out+=' <div class="item" style="top:0px;left:';
$out+=$escape(j*10+j*120);
$out+='px;"> <img src="';
$out+=$escape(v.img);
$out+='"> </div> ';
}
$out+=' ';
});
$out+=' ';
return new String($out);}