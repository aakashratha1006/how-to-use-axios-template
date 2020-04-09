var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var axios = require('axios');
app.set('view engine','ejs');

var request = require('request');

app.get('/',function(req, res){
    res.render('search');
})

app.get('/results',function(req, res){
    console.log(req.query);
    var query = req.query.Search;
    
    var url = "http://www.omdbapi.com/?i=tt3896198&apikey=51841ff&s=" + query;
    console.log(url);
    
    axios.get(url).then((response)=>{
        res.render('results',response)
    })
    .catch((err)=>{
        console.log(err);
    })

});

app.listen(3000,function(){
    console.log("Movie App has started");
});

