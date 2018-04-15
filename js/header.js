var Header = (function() {

	var modal;

	function clickHeaderLink(event) {
		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();

		var url = $(event.target).attr("href");

		$.ajax(url,{ dataType: "text" })
		.then(function(contents){
			$modal.html(contents).show();
		});
	}

	function init() {
		$modal = $("[rel=js-modal]");
		$("[rel=js-header]").on("click","> [rel^=js]", clickHeaderLink);
	}

	return {
		init: init
	};

})();