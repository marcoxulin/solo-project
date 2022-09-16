require('dotenv').config()

const express = require("express");
const app = express();
const PORT = 3000;
const path = require('path');

const itemRoutes = require('./routes/items.js')
app.use(express.json());

app.use('/', itemRoutes)

//route handler to respond with main app
// app.get('/', (req, res) => {
//     return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
//   });

app.use((req, res) => {
    res.sendStatus(404);
  });



app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
  
module.exports = app;