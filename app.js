const express = require ('express'); // framework
const dotenv = require ('dotenv'); // to have config & variables
const connectDB = require ('./config/db');

// Load config
dotenv.config ({ path: './config/config.env'});

connectDB()

const app = express()

const PORT = process.env.PORT || 5000

app.listen (PORT, console.log (`Server running in ${process.env.NODE_ENV} mode on ${PORT}`));