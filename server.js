var express = require ('express')
var app = express()


app.get('/', function (req, res){
    res.send('hello world!')
})


app.listen(3000, () => 
    console.log('Example app is tuning in to port 3000, yo'));