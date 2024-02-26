const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth')

dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 5000

//console.log(MONGODB_URI)
const app = express();
app.use(express.json());
app.use('/auth', authRoutes)

mongoose.connect('mongodb://localhost:27017/nour', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Error connecting to MongoDB', err));

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})