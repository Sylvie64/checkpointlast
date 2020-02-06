const connection = require('./config/conf');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // npm install cors
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors())

// TEST
app.get('/', (req, res) => {
  res.send('Bienvenue sur Express');
});



app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
	}
	console.log(`Server is listening on ${port}`);
});