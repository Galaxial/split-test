import http from 'http';
import httpProxy from 'http-proxy';
import express from "express";
let app = express();
import session from 'express-session';

app.use(session({ secret: 'Secret5555', resave: false, saveUninitialized: true, }));
// Define the port to run on
app.set('port', process.env.PORT || parseInt(process.argv.pop()) || 8080);
let apiProxy = httpProxy.createProxy({
    changeOrigin: true
});

app.use("/test1", express.static(__dirname + "/test1"));
app.use("/test2", express.static(__dirname + "/test2"));


let aUrls = [
    "https://api-rhildred.selab.ca/test1/",
    "https://api-rhildred.selab.ca/test2/"
];

app.all("/*", function(req, res) {
    let nServer = req.session.nServer;
    if(!nServer || nServer < 1 || nServer > aUrls.length){
        nServer = Math.ceil(Math.random() *aUrls.length);
        req.session.nServer =  nServer;
    }
    apiProxy.web(req, res, {target: aUrls[nServer - 1]});
});

// Create http server that leverages reverse proxy instance
// and proxy rules to proxy requests to different targets
http.createServer(app)
.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port') + "! Go to https://localhost:" + app.get('port') + "/")
});
