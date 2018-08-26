const leds = require('./../models/leds');
const ledArray = require('./../utils/relay');

module.exports = app => {

  app.post('/leds/allon', function(req, res, next) {
    ledArray.forEach( value => {
      value.writeSync(1);
    })
    res.send("Ok");
    next();
  });

  app.post('/leds/alloff', function(req, res, next) {
    ledArray.forEach( value => {
      value.writeSync(0);
    });
    res.send("Ok");
    next();
  });

  app.get('/leds', function(req, res, next) {
    console.log(leds)
    res.send(leds);
    next();
  });

  app.get('/leds/:id', function(req, res, next) {
    res.send(leds[req.params.id]);
    next();
  });

  // value 0 or 1
  app.put('/leds/:id', function(req, res, next) {
    var selectedLed = leds[req.params.id];
    ledArray[selectedLed].writeSync(req.body.value);
    // selectedLed.value = req.body.value;
    res.send(selectedLed);
    next();
  });

  

}