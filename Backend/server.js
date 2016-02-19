//dependencies
var querystring = require('querystring');
var fs = require('fs');
var http = require('http');

http.createServer(function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var url = req.url;
    var start, end

    // generate substring
    for (x = 0; x<url.length;x++){
      if (url[x] == '[')
        start = x + 1;
      if (url[x] == ']')
        end = x;
    }

    // get the string in correct format for parsing
    jsonObj = url.substring(start, end);
    jsonObj = jsonObj.replace(new RegExp("%20", 'g'), " ");

    // create a JSON object from string
    jsonObj = JSON.parse("[" + jsonObj + "]");

    // sort the JSON array using a simple selection sort
    var smallest;
    var length = jsonObj.length;
    for (x = 0; x < length - 1; x++){
      smallest = x;
      for (y = x + 1; y < length; y++){
        if (jsonObj[y] < jsonObj[smallest]){
          smallest = y;
        }
      }
      smallestNumber = jsonObj[smallest];
      jsonObj[smallest] = jsonObj[x];
      jsonObj[x] = smallestNumber;
    }

    var callback = function(err, result) {
        res.writeHead(200, {
            'Content-Type' : 'x-application/json'
        });
        res.end(result);
    };

    callback(null, JSON.stringify(jsonObj));

}).listen(3000);
