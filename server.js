import express from 'express';
import routes from './routes/routes.js';
import connectdb from './src/dbconnect.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', routes);

connectdb();
app.listen(3000, (req, res) => {
    console.log('Listening on port 3000 ...');
});




