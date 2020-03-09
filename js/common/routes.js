"use strict";

/**
 * 放置所有页面的链接
 * 方便js内的调用
 * 使得相关链接调整的时候能够统一修改
 */

module.exports = {

    /**
     * 用来根据提供的数据和地址模板生成动态地址
     */
    generateUrl: function(originUrl, o){
        var url = originUrl;
        if (!$.isPlainObject(o)) {
            o = {};
        }
        $.each(o, function(k, v){
            var reg = new RegExp('{{'+k+'}}', 'gi');
            url = url.replace(reg, v); 
        });

        return url;
    },
    /**
     * 个人中心的path根路径
     * 在非个人中心的页面中，访问个人中心的某个页面时
     * 设定的地址需要是此根路径加上相对应的页面地址
     */
    PAGE_PERSONAL: LOCAL ? '/html/myself-info-basic.html' : '/profile', 
    PAGE_INFO: '#/info', // 个人中心-hash根路径
    PAGE_INFO_BASIC: '#/info/basic', // 个人中心-基本资料
    PAGE_INFO_PWD: '#/info/pwd', // 个人中心-修改密码
    PAGE_INFO_BANK: '#/info/bank', // 个人中心-银行卡认证
    PAGE_INFO_REALNAME: '#/info/realname', // 个人中心-实名认证
    PAGE_INFO_MOBILE: '#/info/mobile', // 个人中心-手机绑定
    PAGE_APPLY: '#/apply', // 个人中心-我要做主播
    PAGE_MONEY: '#/money', // 个人中心-我的收入
    PAGE_TOP: '#/top', // 个人中心-主播排行
    PAGE_PAY: '#/pay', // 个人中心-充值
    PAGE_PAY_SUCCESS: '#/pay/success', // 个人中心-充值成功

    PAGE_OBS: '/profile/obs', // OBS直播设置
    PAGE_FOCUS: '/follow', // 我的关注

    PAGE_HELP_PC: '/help', // 帮助中心-电脑直播教程
    PAGE_HELP_MOBILE: '/help', // 帮助中心-手机直播教程
    PAGE_HELP_TO_BE_ANCHOR: '/help', // 帮助中心-我要做主播

    PAGE_INDEX: '/', // 网站首页
    PAGE_ROOM_LIST: '/room', // 直播列表页
    PAGE_RESET_PWD: '/resetpwd', // 忘记密码
    PAGE_REGISTER: '/register', // 注册页
    
    PAGE_LOGIN_WX: 'http://www.feiyun.tv/user/toLogin?source=wx', // 微信登录
    PAGE_LOGIN_WB: 'http://www.feiyun.tv/user/toLogin?source=sina', // 微博登录
    PAGE_LOGIN_QQ: 'http://www.feiyun.tv/user/toLogin?source=qq', // QQ登录

    PAGE_SPECIAL: '/special/', // 游戏专区首页
    PAGE_SPECIAL_DETAIL: '/special/{{id}}',

    PAGE_PARTY_PC: 'http://hd.feiyun.tv/pc/2018/shujia-cj', //派对活动 活动地址 (根据派对活动的不同会变化)
    PAGE_PARTY_H5: 'http://hd.feiyun.tv/m/2018/shujia-cj'

};

