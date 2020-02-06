const connection = require('./config/conf');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors'); // npm install cors
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors())




app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
	}
	console.log(`Server is listening on ${port}`);
});