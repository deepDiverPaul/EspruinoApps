pinMode(D16, 'input_pullup');
pinMode(D17, 'input_pullup');
I2C1.setup({scl:D19,sda:D18});
var g = require("SSD1306").connect(I2C1);
// var bme = require("BME280").connect(I2C1);

g.clear();
g.flip();
g.off();
setWatch(function() {
  g.on();
  load('menu.app.js');
}, D16, {repeat:true,debounce:50,edge:"rising"});

