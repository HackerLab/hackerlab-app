// this is the entry point to run the built application in production.
'use strict';
var express = require('express');
var mongoose = require( 'mongoose' );
var app = express();

var options = {
    port: process.env.VCAP_APP_PORT || 8080,
    hostname: process.env.VCAP_APP_HOST
};

app.configure(function () {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/app'));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.listen(options.port, options.hostname, function() {
    console.log('Web server started on ' + options.hostname + ':' + options.port + ' using the built app in "app"');
});

var serviceRequestSchema = new mongoose.Schema({
    contactEmail: String,
    content: String
});
var ServiceRequest = mongoose.model('ServiceRequest', serviceRequestSchema);

mongoose.connect( 'mongodb://localhost/hackerlabapp' );

app.post('/servicerequest', function (req, res) {

    console.log("This request body", req.body);

    var serviceRequest = new ServiceRequest({
        contactEmail:req.body.contactEmail,
        content:req.body.content
    });
    serviceRequest.save(function (err) {
        if (err) {
            return console.log(err);
        }
    });
    return res.send(serviceRequest);
});