import express from 'express';
import api from './routes/Api';
import morgan from 'morgan';

const env = process.env.ENVIRONMENT || 'dev';
const port = env === 'production' ? 80 : 4000;

const server = express();
server.use(morgan('dev'));
server.use('/api', api);

server.listen(port, function() {
    console.log(`listening on ${port}`);
})
