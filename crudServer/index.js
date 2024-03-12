const express = require('express');
const app = express();


 const db = require('./DBconnection')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors())

const routes = require('./router/Router');
app.use('/',routes)

const PORT = 4000;
app.listen(PORT,()=>{
    console.log("port creat successfully");
})
