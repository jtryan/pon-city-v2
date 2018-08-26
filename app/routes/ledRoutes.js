const leds = require('./../models/leds');
const relayPower = require('./../utils/initLeds');

module.exports = app => {

  app.post('/leds/allon', function(req, res, next) {
    relayPower.ledArray.forEach( value => {
      value.writeSync(1);
    })
  });

  app.post('/leds/alloff', function(req, res, next) {
    relayPower.ledArray.forEach( value => {
      value.writeSync(1);
    })
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
    selectedLed.value = req.body.value;
    res.send(selectedLed);
    next();
  });

  

}