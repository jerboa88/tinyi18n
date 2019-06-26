let tinyl18n = {
	translate: function(language) {
		for (let i = 0; i < translate_elements.length; i++) {
			key = translate_elements[i].getAttribute('data-translatekey')
			translate_elements[i].innerHTML = data.translations[key][language]
		}

		document.documentElement.lang = language
	},

	loadTranslations: function(filename) {
		let request = new XMLHttpRequest()

		request.overrideMimeType('application/json')
		request.open('GET', filename, true)
		request.onreadystatechange = function() {
			if (request.readyState == 4 && request.status == '200') {
				data = JSON.parse(request.responseText)
				language = data.default_language || 'en'
				translate_elements = document.querySelectorAll('[' + 'data-translatekey' + ']') // Get all elements with a translate key

				tinyl18n.translate(language)
			}
		}

		request.send(null)
	}
}
