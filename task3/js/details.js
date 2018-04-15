var Details = (function() {

	function loadPerson(ID) {
		$.ajax('details/' + ID + '.html', {
			dataType: 'text'
		}).then(function(content) {
			$('[rel="js-details"]').html(content);
		});
	}

	function init() {		
		$content = $("[rel=js-details]");
	}

	var $content;

	return {
		init: init,
		loadPerson: loadPerson
	};

})();