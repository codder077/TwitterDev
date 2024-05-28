const express=require('express');
const bodyParser=require('body-parser');

const connect =require('./config/database');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
});