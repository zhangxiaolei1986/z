/**
 * 记录本地存储用到的相关key 方便管理
 */
require('jquery');

// 此处放置使用过并且需要废弃的keys
var keysShouldMove = [
    'user_history'
];

if (keysShouldMove.length && window.localStorage) {
    $.each(keysShouldMove, function(i, n){
        window.localStorage.removeItem(n);
    });
}

module.exports = {

    /**
     * 用途: 用于记录用户在跳转到第三方登录或者注册页之前的页面, 方便登录注册成功之后的回跳
     * 是否作为长期使用: 是
     * 添加时间: 20160419
     */
    UTILS_JUMP_TO_ORIGIN_PAGE: 'feiyun-utils-jump-to-origin-page', // 记录用户跳转注册前访问的页面
    STORE_TASK_POP_OPEN_TIME: 'feiyun-store-task-pop-open-time', // 记录每日任务打开的时间
    VIEW_MENU_ZHIBO_POP: 'feiyun-view-menu-zhibo-pop',
    VIEW_NAV_TASK_POP: 'feiyun-view-nav-task-pop',
    VIEW_PAY_TASK_POP: 'feiyun-view-pay-task-pop',
    OBS_PROMPT_OPT_CHECK:'obs-prompt-opt-check',
    VIEW_UNLOG_STOP_STREAM_TIME: 'feiyun-view-unlog-stop-stream-time', // 因为未登录而中断直播流的时间
    USER_LOGIN_ACCOUNT: 'user-login-account',
    USER_BROWSE_HISTORY: 'user-browse-history',
    STORE_HONGBAO_POP: 'feiyun-view-hongbao-pop', // 记录播放页红包展开的时间
    STORE_NANGUA_POP: 'feiyun-view-nangua-pop', // 记录播放页红包展开的时间
    VIEW_FIRST_PAY: 'feiyun-view-first-pay', // 记录直播间首充弹窗

    /**
     * [cookie] 记录用户是否被禁止发言
     * 后端会在用户从第三方渠道登录的时候判断并设置此cookie
     * 前端这边需要在用户退出登录和绑定手机号成功的时候移除此cookie
     */
    COOKIE_IS_BAN_TALK: 'is_bantalk' 
};
