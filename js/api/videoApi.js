"use strict";
function init(cb) {
    var url = '../js/json/index.json';
    var dataType = 'json';
    $.ajax({
        url: url,
        dataType: dataType,
        data: {},
        type:'GET',
        success: function(data) {
            if ($.isFunction(cb)) {
                cb(data);
            }
        }
    });
}
module.exports = {
    init: init
};
