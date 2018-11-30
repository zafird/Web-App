// https://expressjs.com/en/guide/routing.html


// REQUIRES
const lists = require('./core/data.js');
const express = require('express');
// as of Express 4, you need this:
// https://www.npmjs.com/package/body-parser
const bodyParser = require('body-parser');
const app = express();
// https://www.npmjs.com/package/jsdom
const { JSDOM } = require('jsdom');
const fs = require("fs");

app.get('/', function (req, res) {
    let doc = fs.readFileSync('./static/html/index.html', "utf8");
    //console.log(JSDOM);
    let dom = new JSDOM(doc);
    let $ = require("jquery")(dom.window);


    res.send(dom.serialize());
});

app.use('/js', express.static('static/js'))
app.use('/css', express.static('static/css'))

app.get('/ajax-GET', function (req, res) {

    // set the type of response:
    res.setHeader('Content-Type', 'application/json');
    let d = new Date();

    res.send({ msg: d });

})

app.get('/ajax-GET-list', function (req, res) {

    //res.setHeader('Content-Type', 'application/json');
    //console.log(req.query['format']);
    let formatOfResponse = req.query['format'];
    let dataList = null;

    if (formatOfResponse == 'html-list') {

        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getHTML();
        res.send(dataList);
    } else if (formatOfResponse == 'html-list2') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getHTML2();
        res.send(dataList);
    } else if (formatOfResponse == 'html-list3') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getHTML3();
        res.send(dataList);
    } else if (formatOfResponse == 'html-list4') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getHTML4();
        res.send(dataList);
    } else if (formatOfResponse == 'html-list5') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getHTML5();
        res.send(dataList);
    } else if (formatOfResponse == 'html-list6') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getHTML6();
        res.send(dataList);
    } else if (formatOfResponse == 'html-list7') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getHTML7();
        res.send(dataList);
    } else if (formatOfResponse == 'html-list8') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getHTML8();
        res.send(dataList);
    } else if (formatOfResponse == 'html-list9') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getHTML9();
        res.send(dataList);
    } else if (formatOfResponse == 'html-list10') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getHTML10();
        res.send(dataList);

    } else if (formatOfResponse == 'json-list') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getJSON();
        res.send(dataList);
    } else if (formatOfResponse == 'json-list2') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getJSON2();
        res.send(dataList);
    } else if (formatOfResponse == 'json-list3') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getJSON3();
        res.send(dataList);
    } else if (formatOfResponse == 'json-list4') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getJSON4();
        res.send(dataList);
    } else if (formatOfResponse == 'json-list5') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getJSON5();
        res.send(dataList);
    } else if (formatOfResponse == 'json-list6') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getJSON6();
        res.send(dataList);
    } else if (formatOfResponse == 'json-list7') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getJSON7();
        res.send(dataList);
    } else if (formatOfResponse == 'json-list8') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getJSON8();
        res.send(dataList);
    } else if (formatOfResponse == 'json-list9') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getJSON9();
        res.send(dataList);
    } else if (formatOfResponse == 'json-list10') {
        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getJSON10();
        res.send(dataList);

    } else {
        res.send({ msg: 'Wrong format!' });
    }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Notice that this is a 'POST'
app.post('/post-form', function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    console.log("Stuff sent to server", req.body);

    res.send(["You sent me:", req.body]);

});

// for page not found (i.e., 404)
app.use(function (req, res, next) {
    res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
})

// RUN SERVER
let port = 8000;
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
})
