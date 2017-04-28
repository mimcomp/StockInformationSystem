var express = require('express');
var IndexData = require('../models/indexData');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render('index');
});
router.get('/info/:indexid', function(req, res, next) {
    IndexData.getIndexInfor(req.params.indexid, function (err, result) {
        if( err ){
            console.log(err)
            res.json()
        }else{
            res.json(result)
        }
    })
});

module.exports = router;