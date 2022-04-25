
require("dotenv").config();
const connectDB = require('./config/db');
connectDB();
const PORT = process.env.PORT || 5000;

const express = require('express');
const app = express();
app.use(express.json());

app.use(require('./router/auth'));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));