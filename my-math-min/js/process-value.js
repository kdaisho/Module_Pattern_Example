var ProcessValue = (function () {

    var $button;

    function processValue(val) {
        var valueArray = val.split(',');
        valueArray = valueArray.map(function (x) {
            return Number(x);
        });
        MyMathMin.myMathMin(valueArray);
    }

    function init() {}

    return {
        init: init,
        processValue: processValue
    };

})();