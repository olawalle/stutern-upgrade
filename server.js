// server.js
var express = require("express");
var path = require("path");
var serveStatic = require("serve-static");
app = express();

var history = require("connect-history-api-fallback");
app.use(
  history({
    // verbose: true
  })
);

app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 3000;
app.listen(port);
console.log("server started " + port);
