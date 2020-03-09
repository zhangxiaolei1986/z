/**
 * 新版的左侧边栏和右边流内容的新布局
 */
var Pubsub = require('pubsub-js');
var leftNav = require('components/left-nav/');
var flowList = require('components/flow-list/');

leftNav.init();
flowList.init();

Pubsub.subscribe('components.leftNav.changeState', flowList.update);

