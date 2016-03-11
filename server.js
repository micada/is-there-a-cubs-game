var express = require('express');
var morgan = require('morgan');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var path = require('path');

// web app middleware
var app = express();
// console logger for server
app.use(morgan('short'));

// for serving json api (stub included below)
app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(bodyParser.json());

// bootstrap public/index.html
app.use(serveStatic(__dirname + '/public'));

// server-side router
var router = express.Router();

// some doc data to serve via REST api
var events = [{
    eventDate: "2016-03-10",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-03-10",
    eventTime: "06:30 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-04-11",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-04-13",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-04-14",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-04-15",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-04-16",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-04-17",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-04-26",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-04-27",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-04-28",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-04-29",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-04-30",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-05-01",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-05-05",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-05-06",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-05-07",
    eventTime: "03:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-05-08",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-05-09",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-05-10",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-05-11",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-05-13",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-05-14",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-05-15",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-05-27",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-05-28",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-05-29",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-05-30",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-05-31",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-06-01",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-06-02",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-06-03",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-06-04",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-06-05",
    eventTime: "",
    eventType: "game"
  },
  {
    eventDate: "2016-06-17",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-06-18",
    eventTime: "07:15 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-06-19",
    eventTime: "",
    eventType: ""
  },
  {
    eventDate: "2016-06-20",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-06-21",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-06-22",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-07-04",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-07-05",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-07-06",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-07-15",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-07-16",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-07-17",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-07-18",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-07-19",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-07-20",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-07-27",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-07-28",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-07-29",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-07-30",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-07-31",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-08-01",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-08-02",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-08-03",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-08-09",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-08-10",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-08-11",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-08-12",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-08-13",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-08-14",
    eventTime: "",
    eventType: "game",
  },
  {
    eventDate: "2016-08-16",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-08-17",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-08-18",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-08-29",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-08-30",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-08-31",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-09-01",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-09-02",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-09-03",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-09-04",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-09-15",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-09-16",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-09-17",
    eventTime: "03:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-09-18",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-09-19",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-09-20",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-09-21",
    eventTime: "07:05 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-09-23",
    eventTime: "01:20 PM",
    eventType: "game",
  },
  {
    eventDate: "2016-09-24",
    eventTime: "",
    eventType: "game",
  },
  {
    eventDate: "2016-09-25",
    eventTime: "",
    eventType: "game",
  }];

// GET ./api/docs
router.get('/events', function(req, res) {
	res.send(events);
})

// GET ./api/doc/:id
router.get('/events/:date', function(req, res) {
  var date = req.params.date;
  var check = events.filter(function(event) { 
    return event.eventDate === date
  });
  console.log('check: ', check);
  console.log('date: ', date);
  if (check.length > 0) {
    res.send(check)
  } else {
    res.sendStatus(418);
  }
})
    

app.use('/api', router);

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

var url = process.env.IP || '0.0.0.0'
var port = 3000;
app.set('port', process.env.PORT || port)

var server = app.listen(app.get('port'), url, function() {
	console.log('Static server listening url %s on port %s', url, server
			.address().port);
})