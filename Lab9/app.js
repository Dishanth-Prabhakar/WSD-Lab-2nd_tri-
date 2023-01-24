// defining the essential variables and modules//

const http = require('http');
const {load}= require('./data.js');
const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');
app.use(cors(
    {
        origin: "*"
    }
));
var path = require('path');
var data = load();

app.use(express.static(__dirname + '/'));
// get request//
app.get('/',(req,res)=>
{
    res.sendFile(__dirname+'/index.html');
});
app.get('/data',(req,res)=>
{
    res.send(data.data);
});


// listen to PORT//
app.listen(PORT,()=>
{
    console.log(`Hello World! Server is listening at ${PORT}`);
});


