var PrintResult = (function () {

    var $output;

    function printResult(result) {
        $output.html(result);
    }

    function init() {
        $output = $('[rel="js-output"]');
    }

    return {
        init: init,
        printResult: printResult
    };

})();