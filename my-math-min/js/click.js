var Click = (function () {

    var $button, $input;

    function buttonClicked(event) {
        event.preventDefault();
        var value = $input.val();

        ProcessValue.processValue(value);
    }

    function init() {
        $button = $('[rel="js-click"]');
        $button.on('click', buttonClicked);
        $input = $('[rel="js-input"]');
    }

    return {
        init: init
    };

})();