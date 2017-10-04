var express = require('express'),
	router  = express.Router(),
	Alert   = require('../models/Alert'),
	global  = require('../global');

router.get('/', function(req, res, next){

	Alert.getAlert(function(warning){
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(warning));
	})
});

module.exports = router;
