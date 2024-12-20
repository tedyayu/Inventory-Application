const express=require("express");
const app=express();
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const catagoryRoute=require('./routes/catagoryRoutes');
const itemRoute=require('./routes/itemRoutes');
const catagory = require('./models/catagoryModel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/catagories', catagoryRoute);
app.use('/items', itemRoute);
app.get('/', async (req, res) => {
    try {
        const catagories = await catagory.getAllCatagory(); 
        res.render('index.ejs', { catagories });
    } catch (error) {
        console.error('Error fetching categories for index page:', error);
        res.status(500).send('Server Error');
    }
});


app.listen(7000,()=>{
    console.log("app is running at port 7000")
});