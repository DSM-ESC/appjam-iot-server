const express = require('express');
const Serial = require('serialport');
const router = express.Router();

const ser = new Serial('/dev/ttyACM0', {
  baudRate: 9600,
});

router.post("/iot", function (req, res, next) {
  const {type, power} = req.body;
  const p = power ? 1 : 0;
  ser.write(`${type} ${p}`, function (err) {
    if (err) {
      console.error(err);
      res.json({success: false});
    } else {
      console.log(`${type} ${p}`);
      res.json({success: true});
    }
  });
});

router.post('/test', function (req, res, next) {
  console.log(req.body.message);
  res.json({success: true});
});
module.exports = router;
