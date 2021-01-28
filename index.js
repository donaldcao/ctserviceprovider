const http = require('http');
const PORT = process.env.PORT || 5000;

const requestListener = function (req, res) {
    res.writeHead(200);
    var sn = req.getQueryStringValue("sn");
    var obj = {name:"CT02", sn : sn, description : "this is a test CT", };
    res.end(obj);
}

const server = http.createServer(requestListener);
server.listen(PORT);