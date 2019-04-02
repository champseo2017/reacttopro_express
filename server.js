const express = require('express');
const app = express();

app.use('/order',(req, res, next) =>{

    console.log("middle ware for order");
    next();

});

app.get('/member',(req, res)=>{

    console.log("memnber Page");
    res.send("Member Page");

});

app.get('/order', (req, res)=>{

    console.log("Order Page");
    res.send("Order Page");

});

app.listen(8000, () =>{
    console.log("rady on http://localhost:8000");
});