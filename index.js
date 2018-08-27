const express = require('express');
const createError = require('http-errors');

const app = express();


// need any of this?
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


require('./app/routes/ledRoutes')(app);

// if (process.env.NODE_ENV === 'production') {
//   // Express will serve up production assets
//   // like our main.js file, or main.css file!
//   app.use(express.static('client/build'));

//   // Express will serve up the index.html file
//   // if it doesn't recognize the route
//   const path = require('path');
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }


//TODO : add clean shutdown

const PORT = process.env.PORT || 3000;
app.listen(PORT);