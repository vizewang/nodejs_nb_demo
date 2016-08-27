/**
 * Created by vizewang on 16/8/27.
 */
var express=require('express');
var app=express();
app.get('/',function (req,res) {
    res.send('hello world!');
})

app.listen(3000,function () {
    console.log("demo app listening on port 3000!");
})