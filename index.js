const express = require('express'),
    app = express(),
    path = require('path'),
    cors = require('cors'),
    http = require('http').Server(app);
    
app.use(express.static('static', {
	setHeaders: function(res, path, stat){
		res.setHeader("Access-Control-Allow-Origin", "*");
	}
}));
app.use(cors());

http.listen(3003, function() {
    console.log('OSS服务启动端口号: 3003');
});
