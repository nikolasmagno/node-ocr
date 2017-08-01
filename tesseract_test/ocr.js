var tesseract = require('tesseract.js');
var filename = 'pic.jpg';

tesseract.recognize(filename)
	 .progress(function(p) { console.log('progress', p)})
	 .catch(err => console.error(err))
	 .then(function (result)
		 { 
			 console.log(result.text);
			 process.exit(0);
		 })

