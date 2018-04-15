var Header = (function() {

	var modal, content, close
	;

	function clickHeaderLink(event) {
		if ($modal.is(':visible')) {
			closeModal(event);
			return false;
		}

		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();

		var url = $(event.target).attr('href');

		$.ajax(url,{ dataType: 'text' })
		.then(function(contents){
			$content.html(contents);
			$modal.show();
		});
	}

	function closeModal(event) {
		event.preventDefault();

		$content.empty();
		$modal.hide();
	}

	function init() {
		$modal = $('[rel="js-modal"]');
		$close = $modal.children('[rel="js-close"]');
		$content = $modal.children('[rel="js-content"]');

		$('[rel=js-header]').on('click','> [rel^=js]', clickHeaderLink);

		$close.on('click', closeModal);
	}

	return {
		init: init
	};

})();