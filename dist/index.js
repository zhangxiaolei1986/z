/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/animate.js":
/*!***********************!*\
  !*** ./js/animate.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * 用户点击切换效果\n * 方便二次开发、用户需求不同\n * 放弃fullpage、isScrool等全屏滚动插件\n */\n\n\n/**\n * 定义动画方案\n * animate.css样式表\n * animat: {\n * \toutleft: 'fadeOutLeft',\n * \toutright: 'fadeOutRight',\n * \toutup: 'fadeOutUp',\n * \toutdown: 'fadeOutDown',\n * \tinleft: 'fadeInLeftBig',\n * \tinright: 'fadeInRightBig',\n * \tinup: 'fadeInUpBig',\n * \tindown: 'fadeInDownBig'\n * \t}\n */\n\t\nvar scroll = {\n\tslideContainer: '#section',\n\tslidePages: '.slide-item'\n}\n\nvar scheme = [{\n\tsrcid:'0',\n\tnextid:'1',\n\tinanimate: 'fadeInDown',\n\toutanimate: 'fadeOutLeftBig',\n\touttime: '1000'\n},{\n\tsrcid:'1',\n\tnextid:'2',\n\tinanimate: 'fadeInRight',\n\toutanimate: 'hide',\n\touttime: '0'\n},{\n\tsrcid:'2',\n\tnextid:'0',\n\tinanimate: 'fadeInUpBig',\n\toutanimate: 'fadeOutDown',\n\touttime: '500'\n}];\n\nfunction init(cb) {\t\n\t\n\t//$(scroll.slideContainer).find(scroll.slidePages).hide();\n\t$(scroll.slideContainer).find(scroll.slidePages).eq(0).show().addClass(\"fadeInDown\");\n\t\n\t$(\".botton\").click(function(){\n\n\t\tvar me = $(this);\n\t\tvar srcid = me.data(\"srcid\");\n\t\tvar nextid = scheme[srcid].nextid;\n\n\t\tanimate( srcid,nextid );\n\n\t});\n}\n\nfunction animate ( srcid,nextid ) {\n\n\tvar srcIdObj = $(scroll.slideContainer).find(scroll.slidePages).eq(srcid);\n\tvar nextIdObj = $(scroll.slideContainer).find(scroll.slidePages).eq(nextid);\n\n\tsrcIdObj.removeClass(scheme[srcid].inanimate);\n\t\n\tsrcIdObj.addClass(scheme[srcid].outanimate,setTimeout(function(){\n\t\tsrcIdObj.hide();\n\n\t\tif (parseInt(scheme[srcid].nextid,10) === 1) {\n\t\t\t$(\".slide-botton\").show();\n\t\t} else {\n\t\t\t$(\".slide-botton\").hide();\n\t\t}\n\t\t\n\t\tnextIdObj.show().addClass(scheme[nextid].inanimate);\n\t\tsrcIdObj.removeClass(scheme[srcid].outanimate);\n\n\t},scheme[srcid].outtime));\n}\n\nmodule.exports = {\n    init: init\n};\t\n\n//# sourceURL=webpack:///./js/animate.js?");

/***/ }),

/***/ "./js/api/videoApi.js":
/*!****************************!*\
  !*** ./js/api/videoApi.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction init(cb) {\n    var url = '../js/json/index.json';\n    var dataType = 'json';\n    $.ajax({\n        url: url,\n        dataType: dataType,\n        data: {},\n        type:'GET',\n        success: function(data) {\n            if ($.isFunction(cb)) {\n                cb(data);\n            }\n        }\n    });\n}\nmodule.exports = {\n    init: init\n};\n\n\n//# sourceURL=webpack:///./js/api/videoApi.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("$(function(){\n\t/**\n\t * 计算屏幕高度\n\t * @type {[type]}\n\t */\n\t\n\tvar bodyHeight = document.documentElement.clientHeight;\n\t$(\"#section\").css(\"height\",bodyHeight+'px');\n\t\n\t/**\n\t * 加载数据\n\t * 后端提供接口\n\t */\n\tvar navTpl = __webpack_require__(/*! ./tpl/nav.tpl */ \"./js/tpl/nav.tpl\");\n\tvar menuTpl = __webpack_require__(/*! ./tpl/menu.tpl */ \"./js/tpl/menu.tpl\");\n\tvar videoTpl = __webpack_require__(/*! ./tpl/video.tpl */ \"./js/tpl/video.tpl\");\n\tvar videoApi = __webpack_require__(/*! ./api/videoApi.js */ \"./js/api/videoApi.js\");\n\n\tvar video = __webpack_require__(/*! ./video.js */ \"./js/video.js\");\n\tvar animate = __webpack_require__(/*! ./animate.js */ \"./js/animate.js\");\n\n\tvar $itemNav = $(\".item-nav\");\n\tvar $itemMenu = $(\".item-menu\");\n\tvar $itemVide = $(\".item-video\");\n\n\t$itemNav.html(navTpl(function(){\n\n\t\tanimate.init();\n\t}));\n\t\n\n\t$itemMenu.html(menuTpl(function(){\n\n\t\tanimate.init();\n\t}));\n\n\n\tvideoApi.init(function(data){\n\n\t    var code = parseInt(data.code, 10);\n\t    if(code === 200){\n\n\t        $itemVide.html(videoTpl(data));\n\t        animate.init();\n\t        video.init();\n\n\t    } \n\t});\n\t\n});\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/tpl/menu.tpl":
/*!*************************!*\
  !*** ./js/tpl/menu.tpl ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var template=__webpack_require__(/*! tmodjs-loader/runtime */ \"./node_modules/.1.0.1@tmodjs-loader/runtime.js\");\nmodule.exports=template('js/tpl/menu','<div class=\"table\"> <div class=\"col\"> <span class=\"botton\" data-srcid=\"2\">图书馆简介</span> <span class=\"botton\" data-srcid=\"2\">馆藏数据库</span> <span class=\"botton\" data-srcid=\"2\">图书馆简介</span> <span class=\"botton\" data-srcid=\"2\">馆藏数据库</span> <span class=\"botton\" data-srcid=\"2\">图书馆简介</span> <span class=\"botton\" data-srcid=\"2\">馆藏数据库</span> </div> </div>');\n\n//# sourceURL=webpack:///./js/tpl/menu.tpl?");

/***/ }),

/***/ "./js/tpl/nav.tpl":
/*!************************!*\
  !*** ./js/tpl/nav.tpl ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var template=__webpack_require__(/*! tmodjs-loader/runtime */ \"./node_modules/.1.0.1@tmodjs-loader/runtime.js\");\nmodule.exports=template('js/tpl/nav',' <div class=\"table\"> <div class=\"col\"> <span class=\"botton\" data-srcid=\"0\">功能菜单1</span> <span class=\"botton\" data-srcid=\"0\">功能菜单2</span> <span class=\"botton\" data-srcid=\"0\">功能菜单3</span> </div> </div>');\n\n//# sourceURL=webpack:///./js/tpl/nav.tpl?");

/***/ }),

/***/ "./js/tpl/video.tpl":
/*!**************************!*\
  !*** ./js/tpl/video.tpl ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var template=__webpack_require__(/*! tmodjs-loader/runtime */ \"./node_modules/.1.0.1@tmodjs-loader/runtime.js\");\nmodule.exports=template('js/tpl/video',function($data,$filename\n) {\n'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,v=$data.v,i=$data.i,$out='';$each(data.list,function(v,i){\n$out+=' <div class=\"item\" data-status=\"false\"> <div class=\"item-video\"> <video width=\"100%\" height=\"100%\" src=\"http://localhost:3000/swf/1.mp4\" type=\"video/mp4\" poster=\"/img/1.jpg\"> </video> <div class=\"content-b content-z\">点赞</div> <div class=\"content-b content-c\">收藏</div> </div> </div> ';\n});\n$out+=' ';\nreturn new String($out);\n});\n\n//# sourceURL=webpack:///./js/tpl/video.tpl?");

/***/ }),

/***/ "./js/video.js":
/*!*********************!*\
  !*** ./js/video.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction init(cb) {\n\n\tvar dv = $(\".item\");\n\n\tvar m = null;\n\tvar mv = null;\n\tvar ms = null;\n\tvar mz = null;\n\tvar mc = null;\n\tvar vi = null;\n\n\tvar x = 0;\n\tvar y = 0;\n\tvar l = 0;\n\tvar t = 0;\n\t//var zc = false;\n\tvar isDown = false;\n\tvar isClick = false;\n\t\n\n\t// $(\".content-z\").click(function(e){\n\t// \te.preventDefault();\n\t// \te.stopPropagation()\n\t// \talert(\"dd\");\n\t// });\n\t// $(\".content-z\").unbind(\"mousedown\");\n //    $(\".content-z\").click(function(){\n //    \talert(\"d\");\n //    });\n\n\t//按下\n\tdv.on(\"mousedown\",function(e){\n        \n        m = $(this);\n        ms = String(m.data(\"status\"));\n        mv = m.find(\".item-video\");\n        mz = m.find(\".content-z\");\n        mc = m.find(\".content-c\");\n        vi = m.find(\"video\");\n        //zc = m.hasClass(\"content-b\");\n\n\n        //获取x坐标和y坐标\n\t    x = e.clientX;\n\t    y = e.clientY; \n\t    console.log(x,y)\n\t    \n\n\t    //获取左部和顶部的偏移量\n\t    l = m.offset().left;\n\t    t = m.offset().top;\n\n\t    isClick = true;\n\n\t //    mz.on(\"mousedown\",function(e){\n  //   \t\tvar me = $(this);\n  //   \t\tzc = me.hasClass(\"content-b\");\n\t\t// \tmz.html(\"已点赞\");\n\t\t// });\n\n    });\n\n\t//移动\n\tdv.on(\"mousemove\",function(e){\n\n\t\tif (isClick == false) {\n\t        return;\n\t    }\n\t    \n\t    //获取x和y\n\t    var nx = e.clientX;\n\t    var ny = e.clientY;\n\n\t    // 计算是否移动\n\t    if (x !== nx || y !== ny) {\n\t    \t\n\t    \t//计算移动后的左偏移量和顶部的偏移量\n\t\t    var nl = nx - (x - l);\n\t\t    var nt = ny - (y - t);\n\n\t    \t//设置样式  \n    \t\tm.css(\"cursor\",\"move\");\n\t\t    m.css(\"position\", \"absolute\");\n\t\t    m.css(\"left\", nl + 'px');\n\t\t    m.css(\"top\", nt + 'px');\n\n\t\t    //开关打开\n\t\t    isDown = true;\n\t\t}\n\t});\n\n\t//抬起\n    dv.on(\"mouseup\",function(e){\n    \t// console.log(iszc);\n    \t// if (iszc) {\n    \t// \t//开关关闭\n\t\t   //  m.css(\"cursor\",\"default\");\n\t\t   //  isDown = false;\n\t\t   //  isClick = false;\n     //    \treturn;\n     //    }\n\n\t    //判断是否放大\n\t\tif ( ms === \"false\" &&  isDown === false) {\n\n\t\t\t//放大\n\t\t\tm.css(\"position\", \"absolute\");\n\t\t    m.css(\"left\", x + 'px');\n\t\t    m.css(\"top\", y + 'px');\n\n\t\t\tmv.addClass(\"item-video-b\");\n\t\t\tm.data(\"status\",\"true\");\n\n\t\t\tvi.trigger('play');\n\t\t\t//vi.play();//播放\n\n\t\t\tmz.show();\n\t\t\tmc.show();\n\n\t\t\t\n\t\t} else if ( ms === \"true\" &&  isDown === false ){\n\n\t\t\t//缩小\n\t\t\tmv.removeClass(\"item-video-b\");\n\t\t\tm.data(\"status\",\"false\");\n\n\t\t\t//回到原处\n\t\t\tm.css(\"position\", \"static\");\n\t\t\tvi.trigger('pause');\n\n\t\t\tmz.hide();\n\t\t\tmc.hide();\n\n\t\t} else {\n\n\t\t    //开关关闭\n\t\t    m.css(\"cursor\",\"default\");\n\t\t    isDown = false;\n\n\t\t}\n\n\t\tisClick = false;\n\t});\n\n}\nmodule.exports = {\n    init: init\n};\n\n//# sourceURL=webpack:///./js/video.js?");

/***/ }),

/***/ "./node_modules/.1.0.1@tmodjs-loader/runtime.js":
/*!******************************************************!*\
  !*** ./node_modules/.1.0.1@tmodjs-loader/runtime.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*TMODJS:{}*/\r\n!function () {\r\n\tfunction a(a, b) {\r\n\t\treturn (/string|function/.test(typeof b) ? h : g)(a, b)\r\n\t}\r\n\r\n\tfunction b(a, c) {\r\n\t\treturn \"string\" != typeof a && (c = typeof a, \"number\" === c ? a += \"\" : a = \"function\" === c ? b(a.call(a)) : \"\"), a\r\n\t}\r\n\r\n\tfunction c(a) {\r\n\t\treturn l[a]\r\n\t}\r\n\r\n\tfunction d(a) {\r\n\t\treturn b(a).replace(/&(?![\\w#]+;)|[<>\"']/g, c)\r\n\t}\r\n\r\n\tfunction e(a, b) {\r\n\t\tif (m(a))for (var c = 0, d = a.length; d > c; c++)b.call(a, a[c], c, a); else for (c in a)b.call(a, a[c], c)\r\n\t}\r\n\r\n\tfunction f(a, b) {\r\n\t\tvar c = /(\\/)[^\\/]+\\1\\.\\.\\1/, d = (\"./\" + a).replace(/[^\\/]+$/, \"\"), e = d + b;\r\n\t\tfor (e = e.replace(/\\/\\.\\//g, \"/\"); e.match(c);)e = e.replace(c, \"/\");\r\n\t\treturn e\r\n\t}\r\n\r\n\tfunction g(b, c) {\r\n\t\tvar d = a.get(b) || i({filename: b, name: \"Render Error\", message: \"Template not found\"});\r\n\t\treturn c ? d(c) : d\r\n\t}\r\n\r\n\tfunction h(a, b) {\r\n\t\tif (\"string\" == typeof b) {\r\n\t\t\tvar c = b;\r\n\t\t\tb = function () {\r\n\t\t\t\treturn new k(c)\r\n\t\t\t}\r\n\t\t}\r\n\t\tvar d = j[a] = function (c) {\r\n\t\t\ttry {\r\n\t\t\t\treturn new b(c, a) + \"\"\r\n\t\t\t} catch (d) {\r\n\t\t\t\treturn i(d)()\r\n\t\t\t}\r\n\t\t};\r\n\t\treturn d.prototype = b.prototype = n, d.toString = function () {\r\n\t\t\treturn b + \"\"\r\n\t\t}, d\r\n\t}\r\n\r\n\tfunction i(a) {\r\n\t\tvar b = \"{Template Error}\", c = a.stack || \"\";\r\n\t\tif (c)c = c.split(\"\\n\").slice(0, 2).join(\"\\n\"); else for (var d in a)c += \"<\" + d + \">\\n\" + a[d] + \"\\n\\n\";\r\n\t\treturn function () {\r\n\t\t\treturn \"object\" == typeof console && console.error(b + \"\\n\\n\" + c), b\r\n\t\t}\r\n\t}\r\n\r\n\tvar j = a.cache = {}, k = this.String, l = {\r\n\t\t\"<\": \"&#60;\",\r\n\t\t\">\": \"&#62;\",\r\n\t\t'\"': \"&#34;\",\r\n\t\t\"'\": \"&#39;\",\r\n\t\t\"&\": \"&#38;\"\r\n\t}, m = Array.isArray || function (a) {\r\n\t\t\treturn \"[object Array]\" === {}.toString.call(a)\r\n\t\t}, n = a.utils = {\r\n\t\t$helpers: {}, $include: function (a, b, c) {\r\n\t\t\treturn a = f(c, a), g(a, b)\r\n\t\t}, $string: b, $escape: d, $each: e\r\n\t}, o = a.helpers = n.$helpers;\r\n\ta.get = function (a) {\r\n\t\treturn j[a.replace(/^\\.\\//, \"\")]\r\n\t}, a.helper = function (a, b) {\r\n\t\to[a] = b\r\n\t}, module.exports = a\r\n}();\n\n//# sourceURL=webpack:///./node_modules/.1.0.1@tmodjs-loader/runtime.js?");

/***/ })

/******/ });