

    var CONF        = require('common/common-define');

    

    //获取字符串在php里面计算出来的长度
    function getStrLengthInPhp(str){
        /**
         * php里面把双字节的字符认为是两个字符
         * 而js认为是一个字符
         * 校验以后端为准
         * 所以此处匹配所有双字节字符转换为两个*号，这样js再判断长度就和php一致了
         */
        var phpVal = str.replace(/[^\x00-\xff]/g, "**");
        return phpVal.length;
    }
    //飞云验证QQ号码
    function checkQQ(input){
        var REG_CODE = /^[0-9]{6,16}$/g,
            val      = $.trim(input.val()),
            st       = true,
            errMsg   = '';
        if (val.length === 0) {
            st     = false;
            errMsg = 'QQ号不能为空';
        }
        if (st === true && val.length < 6) {
            st     = false;
            errMsg = 'QQ号长度不能小于6';
        }
        if (st === true && val.length > 16) {
            st     = false;
            errMsg = 'QQ号太长了';
        }
        if (st === true && !REG_CODE.test(val)) {
            st     = false;
            errMsg = 'QQ号格式不对';
        }
        return {
            st     : st,
            errMsg : errMsg
        };
    }

    //飞云验证身份证
    function checkID(input){
        var REG_CODE      = /^[0-9]{6,16}$/g,
            val           = $.trim(input.val()),
            st            = true,
            errMsg        = '';

        var Validator     = new IDValidator(GB2260);
        var status        = Validator.isValid(val);

        if (val.length === 0) {
            st     = false;
            errMsg = '证件号码不能为空';
        }else if (!status) {
            st     = false;
            errMsg = '证件号码格式不正确';
        }
        return {
            st     : st,
            errMsg : errMsg
        };
    }

    //飞云判断证件号码是否已绑定其他账号
    function isHasID(type,input,callback){
        var val     = $.trim(input.val());
        $.ajax({
            url      : CONF.PHP_PATH + 'api/register/check/mobile',
            data     : {
                "identity_card_type" : type,
                "identity_card_id"   : val
            },
            dataType : 'json',
            cache    : false,
            type     : 'GET',
            success  : function(data){
                callback(data);    
            }
        });
    }

    //飞云验证手机号格式
    function checkreg(input){
        var val     = $.trim(input.val()),
            st      = true,
            errMsg  = '';
        if (val.length === 0) {
            st      = false;
            errMsg  = '请输入手机号';
        }
        if (val.length != 11 && val.length != 0) {
            st      = false;
            errMsg  = '手机格式错误';
        }
        return {
            st      : st,
            errMsg  : errMsg
        };
    }
    
    //飞云判断手机号码是否已经注册
    function isHasReg(input,callback){
        var val     = $.trim(input.val()),
            url = '/api/register/check/mobile';

        if (LOCAL) {
            url = '/json/is-has-phone.json';
        }
        $.ajax({
            url      : url,
            data     : {
                "mobile" : val
            },
            dataType : 'json',
            cache: false,
            type     : 'GET',
            success  : function(data){
                callback(data);    
            }
        });
    }

    //飞云获取验证码
    function getCode(phoneNumber,imgCode,callback){
        var url = '/api/register/send_mobile_code';

        if (LOCAL) {
            url = '/json/send-mobile-code.json';
        }

        $.ajax({
            url      : url,
            data     : {
                "mobile"   : phoneNumber,
                "img_code" : imgCode
            },
            dataType : 'json',
            type     : 'GET',
            success  : function(data){
                callback(data);
            }
        });
    }

    //飞云手机验证码格式
    function checkCode(input){
        var REG_CODE     = /^[a-zA-Z0-9]{4}$/g,
            val          = $.trim(input.val()),
            st           = true,
            errMsg       = '';
        if (val.length === 0) {
            st           = false;
            errMsg       = '请输入验证码';
        }
        if (st === true && val.length !== 6) {
            st           = false;
            errMsg       = '验证码不正确';
        }
        return {
            st     : st,
            errMsg : errMsg
        };
    }

    //飞云验证码是否正确
    function isHasCode(input,inputTel,callback){
        var val     = $.trim(input.val()),
            url     = '/api/register/check_mobile_code';

        $.ajax({
            url      : url,
            data : {
                "mobile" : inputTel.val(),
                "code"   : val
            },
            dataType : 'json',
            cache: false,
            type     : 'GET',
            success  : function(data){
                callback(data);  
            }
        });
    }

    //飞云图形验证码格式
    function checkImgCode(input){
        var REG_CODE     = /^[a-zA-Z0-9]{4}$/g,
            val          = $.trim(input.val()),
            st           = true,
            errMsg       = '';
        if (val.length === 0) {
            st           = false;
            errMsg       = '验证码不能为空';
        }
        if (st === true && val.length !== 4) {
            st           = false;
            errMsg       = '验证码不正确，请仔细检查';
        }
        return {
            st     : st,
            errMsg : errMsg
        };
    }


    

    //飞云验证昵称
    function checkNick(input){
        var me           = input,
            val          = $.trim(me.val()),
            nameReg      = /^c:\\con\\con|[%,\*\"\s\<\>\&]|\xA1\xA1|\xAC\xA3|^Guest|^\xD3\xCE\xBF\xCD|\xB9\x43\xAB\xC8/i,
            phpValLength = getStrLengthInPhp(val),
            errMsg       = '',
            st           = true;
        if (val.length === 0) {
            st     = false;
            errMsg = '请输入昵称';
        }
        if (st === true && phpValLength < 2) {
            st     = false;
            errMsg = '不能少于两个字符';
        }
        if (st === true && phpValLength > 16) {
            st     = false;
            errMsg = '昵称长度超出限制16位字符';
        }
        if (st === true && val.match(nameReg) !== null) {
            st     = false;
            errMsg = '昵称包括非法字符';
        }
        return {
            st: st,
            errMsg: errMsg
        };
    }

    //飞云验证昵称是否已经注册
    function isHasNick(input,inputTel,callback){
        var val     = $.trim(input.val());
        $.ajax({
            url: CONF.PHP_PATH + 'api/register/check/mobile',
            data: {
                "mobile" : inputTel.val(),
                "nick"   : val
            },
            dataType: 'json',
            cache: false,
            type: 'GET',
            success: function(data){
                callback(data); 
            }
        });
    }
    
    //飞云验证密码格式-登录页面
    function checkPwd(input){
        var me      = input,
            val     = me.val(), // dz允许空格作为密码，所以不能trim
            errMsg  = '',
            st      = true;
        if (val.length === 0){
            st      = false;
            errMsg  = '密码为空';
        }
        if (val.length < 6 && val.length != 0){
            st      = false;
            errMsg  = '密码少于6个字符';
        }
        return {
            st      : st,
            errMsg  : errMsg
        };
    }

    //飞云验证密码格式-注册页面
    function checkPwd2(input){
        var me      = input,
            val     = me.val(), // dz允许空格作为密码，所以不能trim
            errMsg  = '',
            st      = true;
        if (val.length === 0){
            st      = false;
            errMsg  = '密码为空';
        }
        if (val.length < 6 && val.length != 0){
            st      = false;
            errMsg  = '请输入6-24位的密码';
        }
        return {
            st      : st,
            errMsg  : errMsg
        };
    }

    //飞云验证确认密码
    function recheckPwd(pass,repass){
        var passVal     = pass.val(),
            repassVal   = repass.val(),
            errMsg      = '',
            st          = true;
        if (passVal !== repassVal){
            st          = false;
            errMsg      = '密码不一致';
        }
        return {
            st      : st,
            errMsg  : errMsg
        };
    }
    

    module.exports = {
        getStrLengthInPhp   :getStrLengthInPhp,     //方法计算字符串在php环境中的长度
        checkQQ             :checkQQ,               //飞云验证qq号
        checkID             :checkID,               //飞云验证身份证
        isHasID             :isHasID,               //飞云判断证件号码是否已绑定其他账号
        
        checkreg            :checkreg,              //飞云验证手机号格式
        isHasReg            :isHasReg,              //飞云判断手机号码是否已经注册

        getCode             :getCode,               //飞云获取验证码
        checkCode           :checkCode,             //飞云手机，验证码格式
        checkImgCode        :checkImgCode,          //飞云图形，验证码格式
        isHasCode           :isHasCode,             //飞云验证码是否正确

        checkNick           :checkNick,             //飞云验证昵称格式
        isHasNick           :isHasNick,             //飞云验证昵称是否已经注册

        checkPwd            :checkPwd,              //飞云验证密码格式-登录页面
        checkPwd2           :checkPwd2,             //飞云验证密码格式-注册页面
        recheckPwd          :recheckPwd             //飞云验证确认密码 
    };

