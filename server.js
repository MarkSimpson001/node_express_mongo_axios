import express from 'express';
import webRoutes from './routes/webRoutes.js'
import path from 'path';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// The following code was added for us to create a frontend request
app.use('/', webRoutes);
app.set('views', path.join('./views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(3001, () => {
  console.log("Listening on port 3001 ...");
});