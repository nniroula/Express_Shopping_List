const express = require("express");

// import fakeDb
const db = require("./fakeDb");

// initialize the app
const app = express();

// json and form data
app.use(express.json());
app.use(express.urlencoded({ extends: true }));

// app.get('/name', (req, res) => {
//     res.send("Hello, Good luck")
// })

// get rid of this one later
// let firstItem = {name: "dark chocolate", price: 20};
// let second = {name: "hard chocolate", price: 0.00};

// db.push(firstItem);
// db.push(second);

// get rid of above later on


app.get('/items', (req, res) => {
    res.send(db);
})

// post request
app.post('/items', (req, res) => {
    // get items via html form submission

    let item_name = req.body.userInput;
    let item_price = req.body.get_price;
    let dataToDb = {name: item_name, price: item_price};
    // db.push(req.body);
    db.push(dataToDb);
    let data = {"added": {name: item_name, price: item_price}};

    res.json(data);
    // res.send(data);
})

// GET/items/:name
app.get('/items/:name', (req, res) => {
    // in browser to run this->  http://localhost:3000/items?skitle
    let item_data = req.params.userInput;
    // let retrieve_from_db = db[item_data];

    for(let item in db){
        res.send(db.filter(val => val === item_data))
    }
    // res.send(retrieve_from_db);
})

// PATCH route: use it to modify the name or price of an item
// populate html form with original data
app.patch('/items/;name', (req, res) => {
    
})



app.listen(3000, function(){
    console.log("app  is running in the port 3000")
})