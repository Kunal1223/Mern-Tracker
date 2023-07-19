const express = require('express');
const app = express();
const env = require('dotenv');
const cors = require("cors") 
env.config();
app.use(cors());
app.use(express.json());
require('./db/conn')

const PORT = process.env.PORT;

app.get('/' , (req, res)=>{
    res.send("This is the home page for the expense tracker");
})

const server = () =>{
    app.listen(PORT , () =>{
        console.log('app is listing on PORT', PORT);
    })
}

server();