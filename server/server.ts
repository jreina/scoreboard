import express from 'express';
import api from './routes/Api';
import morgan from 'morgan';
import dotenv from 'dotenv';

const env = process.env.ENVIRONMENT || 'dev';
const port = env === 'production' ? 80 : 4000;

if(env === 'dev') dotenv.config();

const server = express();
server.use(morgan('dev'));
server.use('/api', api);

server.listen(port, function() {
    console.log(`listening on ${port}`);
})
