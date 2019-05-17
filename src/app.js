const express = require('express');
const app = express();



const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));


const placeRouter = require('./places.js')

app.use('/places', placeRouter)


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});