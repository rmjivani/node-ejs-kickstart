//include Express
const express = require('express');

//server will listen on this port
const port = 3000;

//create instance of Express app
const app = express();

//ejs is templating engine
app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname + '/public'));

//index/home URL
app.get('/',(req,res)=>{
    let title = "Home";
    res.render('pages/index',{'title': title});
});

//badminton URL
app.get('/badminton',(req,res)=>{
    let title = "Badminton";
    res.render('pages/badminton',{'title': title});
});

//coffee URL
app.get('/coffee',(req,res)=>{
    let title = "Coffee Spots";
    res.render('pages/coffee',{'title': title});
});

//daily grind URL
app.get('/daily-grind',(req,res)=>{
    let title = "Daily Grind";
    res.render('pages/daily-grind',{'title': title});
});

//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});

