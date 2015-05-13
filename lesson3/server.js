// server params
var http = require('http'),
	url = require('url'),
	port = 3000,
	urlPath = 'localhost',
	server = new http.Server(),
	actionUrl = '/action',
	fileAction = require('module-by-yafim-dziuko').actionWithFile,
	fs = require('fs');

server.listen(port, urlPath);

server.on('request', function(req, res){
	console.log(req.method, req.url);
	var parsedUrl = url.parse(req.url, true);

	switch(parsedUrl.pathname) {
		case actionUrl:

			var method = parsedUrl.query.method;
			var filename  = parsedUrl.query.filename;

			fileAction(method, filename);

			res.end('SUCCESS');
			break;

		case '/':
			var a = fileAction('index', './');
			res.end('SUCCESS');

		default:
			res.end('Page no found');
			break;
	}
})