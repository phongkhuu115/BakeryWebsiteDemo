const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectToDatabase = require('./src/configs/database').connectToDatabase;
const routes = require('./src/routes/routes');
const bodyParser = require('body-parser');

const app = express();

//server-s config
connectToDatabase();
dotenv.config();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use('/v1/api', routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('Server is running and listen on port ' + process.env.PORT);
});
