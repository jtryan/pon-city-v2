const express = require('express');
const createError = require('http-errors');
const initSwitch = re

const app = express();

// app.set('view engine', 'pug');

// need any of this?
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./app/utils/initLeds')(app);
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

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT);