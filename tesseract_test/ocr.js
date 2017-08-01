var argv = require('minimisty');
var tesseract = require('tesseract.js');
var filename = argv['f'];

if(filename == '' || filename == undefined)
{
  console.log('parameter  -f file not found');
  throw new Error('Parameter  -f (file) not found');
}

tesseract.recognize(filename)
	 .progress(function(p) { console.log('progress', p)})
	 .catch(err => console.error(err))
	 .then(function (result)
		 { 
			 console.log(result.text);
			 process.exit(0);
		 })

