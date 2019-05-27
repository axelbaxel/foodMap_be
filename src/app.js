const express = require('express');
const app = express();



const PORT = process.env.PORT || 4001;

// Use static server to serve the Express Yourself Website
//app.use(express.static('public'));


const placeRouter = require('./places.js')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/places', placeRouter)


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});