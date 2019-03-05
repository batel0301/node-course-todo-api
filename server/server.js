var express = require('express');
var bodyParser = require('body-parser');


//local 
var {mongoose} = require('./db/mongoose.js');
var {Todo}  = require('./modules/todo.js');
var {User}  = require('./modules/user.js');


var app =express();
app.use(bodyParser.json());


app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.status(200).send(doc);

    }
    , (e)=>{
    res.status(400).send(e);
    });
});

app.listen(3000,()=>{
    console.log('Started on port 3000');
});




module.exports = {app};