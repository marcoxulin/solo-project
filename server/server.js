require("dotenv").config();

const express = require("express");
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const path = require('path');

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Mongoose connected');
    })
    .catch((error) => {
        console.log(error);
    })

const itemRoutes = require('./routes/itemRouter.js')
app.use(express.json());

app.use('/api/items', itemRoutes)

//route handler to respond with main app
// app.get('/', (req, res) => {
//     return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
//   });

app.use((req, res) => {
    res.sendStatus(404);
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' } , 
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
  
module.exports = app;
