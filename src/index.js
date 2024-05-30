import express from 'express';
import bodyParser from 'body-parser';

import {connect} from './config/database.js';

import apiRoutes from './routes/index.js';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api',apiRoutes);
import { UserRepository, TweetRepository} from './repository/index.js';

// import  CommentService from './services/like-service.js'


app.listen(3000, async () => {
    console.log('server started');
    await connect();


});