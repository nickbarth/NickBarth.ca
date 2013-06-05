var fs = require('fs'),
    http = require('http'),
    jade = require('jade'),
    stylus = require('stylus'),
    currentTime = Date.now();

http.createServer(function (req, res) {

  var pages = {
    '/': function () {
      renderPage('index');
    },
    '/portfolio': function () {
      renderPage('portfolio');
    },
    '/resume': function () {
      renderPage('resume');
    },
    '/stylesheets/application.css': function () {
      renderStyle('application');
    }
  };

  function renderPage (page) {
    fs.readFile('templates/'+page+'.jade', 'utf8', function (err, data) {
      if (err) throw err;
      var template = jade.compile(data),
          html = template();
      res.setHeader('Content-Type', 'text/html');
      res.end(html);
    });
  }

  function renderStyle (style) {
    fs.readFile('templates/'+style+'.styl', 'utf8', function (err, data) {
      if (err) throw err;
      res.setHeader('Content-Type', 'text/css');
      res.end(data);
    });
  }

  function renderNotFound() {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('File Not Found.');
  }

  if (pages.hasOwnProperty(req.url)) {
    res.statusCode = 200;
    pages[req.url]();
  } else {
    renderNotFound();
  }
}).listen(5000);
