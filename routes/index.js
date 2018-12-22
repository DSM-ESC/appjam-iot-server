const express = require('express');
const Serial = require('serialport');
const router = express.Router();

const ser = new Serial('/dev/ttyACM0', {
  baudrate: 9600,
  parser: Serial.parsers.readline('\n')
});

router.post("/iot", function (req, res, next) {
  const {type, power} = req.body;
  ser.write(`${type} ${power}`, function (err) {
    if (err) {
      console.error(err);
      res.json({success: false});
    } else {
      console.log(`${type} ${power}`);
      res.json({success: true});
    }
  });
});

router.post('/test', function (req, res, next) {
  console.log(req.body.message);
  res.json({success: true});
});

module.exports = router;
