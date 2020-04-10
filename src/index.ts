
import { createServer } from 'http';
import express from 'express';

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '2mb' }))
app.use('/', express.static('public'));
app.use('/static', express.static('bower_components'));

const server = createServer(app);

server.listen(3000, '0.0.0.0', function () {
  console.log('listening server')
});