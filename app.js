const { sequelize } = require ('./models')

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const port = 5000

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.listen(port, () => {
  console.log(`listening on port:${port}`)
})