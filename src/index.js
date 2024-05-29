const express=require('express');
const bodyParser=require('body-parser');

const connect =require('./config/database');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const {TweetRepository}=require('./repository/index');
const  TweetService=require('./services/tweet-service')


app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
    let service=new TweetService();
    let tweet=await service.create({
        content:'this is #exploring #life , #fun'
    });
    console.log(tweet);
});