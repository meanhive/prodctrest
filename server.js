const express = require('express');
const app = express();
const config = require('./config/DB');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = Number(process.env.PORT || 3000);

// body parser will receive post data from front end
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set global promise for mongoose
mongoose.Promise = global.Promise;

// db connection
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  res => {
    console.log('Database successfully connected');
  },
  err => {
    console.log(err);
  }
);
app.use(cors());

const routeController  = require('./router/router.controller');
app.use('/product/api/', routeController);

app.listen(PORT, function() {
  console.log(`Server is running on url http://localhost:${PORT}`);
});
