var MyMathMin = (function () {

    function myMathMin(arr) {
        var challenger = arr[0];
        for (var i = 0, j = 1; i < arr.length; i++, j++) {
            if (challenger > arr[j])
                challenger = arr[j];
        }

        PrintResult.printResult(challenger);
    }

    return {
        myMathMin: myMathMin
    };

})();