const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

app.use(helmet()); 
app.use(cors());   
app.use(morgan('dev')); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Backend Engine is Purring' });
});

app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = app;