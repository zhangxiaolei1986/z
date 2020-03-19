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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/enter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/enter.js":
/*!*********************!*\
  !*** ./js/enter.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n/**\n * 思路\n * ru问题：不是单个入场\n * 移动问题：不是改变每个像素的样式，而是一个大容器\n * 定位问题：绝对定位，还是浮动？\n */\n\n\nvar e = e || window.event;\nvar h = document.documentElement.clientHeight;\nvar dvm = $(\".wrap\");\nvar dvc = $(\"#content\");\n\ndvm.css(\"height\",h+'px');\n\n\n/**\n * 请求接口\n * 定义模版\n * 显示数据\n */\nvar etpl = __webpack_require__(/*! ./tpl/enter.tpl */ \"./js/tpl/enter.tpl\");\nvar eurl = '../js/json/enter.json';\n$.ajax({\n    url: eurl,\n    dataType: \"json\",\n    data: {},\n    type:'GET',\n    success: function(data) {\n\n    \tdata.data.j = 0;\n    \tdvc.html( etpl(data) );\n\t\tscroll();\n    }\n});\n\n\n\n/**\n * 默认每帧5像素\n * 默认500毫秒\n */\nvar d = 10;\nvar t = 10; \nvar r = null;\nvar t1 = null;\n\nfunction scroll() {\n\t\n\tif (!t) {\n\t\tt = 500;\n\t}\n\t// 如果t是空值，则直接使用默认值\n\t\n\tif (!d) {\n\t\td = 5;\n\t}\n\n\tr = parseInt(dvc.css('right'),10);\n\n\tt1 = setInterval(function(){\n\n\t\tif ( r < d ) {\n\t\t\t//清除定时器\n\t\t\tclearInterval(t1);\n\t\t}\n\n\t\tr = r-d;\n\n\t\tdvc.css(\"right\", -r + 'px');\n\n\t\tcompare();\n\n\t},t);\n}\n\n/**\n * 控制台\n * 比较\n * 获取左部和顶部的偏移量\n * 获取的元素上边框相对于html上边界的偏移量\n * var cleft = c.clientX;\n * var ctop = c.clientY;\n */\nvar o,\n\towidth,\n\toheight,\n\toleft,\n\totop,\n\toright,\n\tobottom;\n\n\to = $(\"#console\");\n\towidth = o.width();\n\toheight = o.height();\n\n\toleft = o.offset().left + 60; \n\totop = o.offset().top;\n\n\toright = oleft + owidth + 60;\n\tobottom = otop + oheight;\n\n\nvar i,\n\tiwidth,\n\tiheight,\n\tileft,\n\titop,\n\tiright,\n\tibottom;\n\nfunction compare() {\n\t\n\t$(\".item\").each(function(index){\n\n\t\ti = $(this);\n\n\t\tiwidth = i.width();\n\t\tiheight = i.height();\n\n\t\tileft = i.offset().left + 60;\n\t\tiright = ileft + iwidth + 60;\n\n\t\titop = i.offset().top; \n\t\tibottom = itop + iheight;\n\n\t\t/**\n\t\t * 在控制台-上方活动\n\t\t * 在控制台-左边活动\n\t\t * 在控制台-右边活动\n\t\t * 在控制台-下方活动\n\t\t */\n\n\t\tif (otop > ibottom || oleft > iright || oright < ileft || obottom < itop) {\n\t\t\t\n\n\t\t} else {\n\t\t\t/**\n\t\t\t * 绝对定位\n\t\t\t * 一:上边碰撞\n\t\t\t * 二:下边碰撞\n\t\t\t * 三:中间碰撞\n\t\t\t */\n\t\t\tconsole.log(\"发生碰撞\");\n\n\t\t\tif ( ibottom > otop) {\n\n\t\t\t\tconsole.log(\"上方发生碰撞\");\n\t\t\t}\n\t\t\tif ( obottom > itop ) {\n\n\t\t\t\tconsole.log(\"下方发生碰撞\");\n\t\t\t}\n\t\t}\n\t});\n}\n\n\n\n//# sourceURL=webpack:///./js/enter.js?");

/***/ }),

/***/ "./js/tpl/enter.tpl":
/*!**************************!*\
  !*** ./js/tpl/enter.tpl ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var template=__webpack_require__(/*! tmodjs-loader/runtime */ \"./node_modules/.1.0.1@tmodjs-loader/runtime.js\");\nmodule.exports=template('js/tpl/enter',function($data,$filename\n) {\n'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data=$data.data,v=$data.v,i=$data.i,$escape=$utils.$escape,$out='';$out+=' ';\n$each(data.list,function(v,i){\n$out+=' <div class=\"item\"> <img src=\"';\n$out+=$escape(v.img);\n$out+='\"> </div> ';\n});\n$out+=' ';\nreturn new String($out);\n});\n\n//# sourceURL=webpack:///./js/tpl/enter.tpl?");

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