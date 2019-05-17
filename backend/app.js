const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const constants = require('./util/constants');

app.use(bodyParser.urlencoded({ limit: '50mb', extended : true}));
app.use(bodyParser.json({limit : '50mb'}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//conexao mongoose
var mongoose = require('mongoose');
mongoose.connect(constants.URL_MONGO, constants.MONGO_OPTIONS);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const routerCarro = require('./routes/Carro');

app.use(routerCarro);

app.listen(5000);