Graphics.prototype.setFontLato = function(scale) {
  // Actual height 25 (25 - 1)
  g.setFontCustom(atob("AAAAAAAAGAAAAPAAAAPAAAAPAAAAAAAAABwAAAPwAAA/gAAH8AAAfwAAD+AAAfwAAB/AAAP4AAAfgAAAcAAAAAAAAAAf/gAB//4AD//8AHwA+AHAAOAOAAHAOAAHAOAAHAOAAHAOAAHAPAAPAHgAeAD//8AB//4AA//wAAD8AAAAAAAAAAAAAAAAAAYAAAA4ADAB4ADADwADAHgADAHAADAP///AP///AP///AAAADAAAADAAAADAAAADAAAAAAAAAAAAAADAA4AHAD4APAHwAfAHAA/AOAB/AOAD3AOAHnAOAPHAOAeHAPB8HAH/4HAH/gHAD/AHAA8AHAAAAAAAAAAAAAAAAAwB4ADwB8AHwA+AHgAPAOAAHAOAAHAOBgHAOBgHAODwHAODwHAPn4eAH+/+AD8f8AB4PwAAAAAAAACAAAAHAAAAfAAAA/AAAB7AAAHzAAAPDAAA+DAAB4DAADwDAAPgDAAP///AP///AP///AAADAAAADAAAADAAAAAAAAAAAAAAAOAA/gOAP/gPAP/gHAODAHAODAHAOHAHAODAHAODgHAODwOAOB/+AOB/8AMAfwAAAGAAAAAAAAAAAAAAHAAAAf4AAB/8AAH8+AAPwPAAfgHAB/gHADzAHAHjAHAPDgHAODgHAMDweAAB/+AAA/8AAAfwAAAAAAAAAAAMAAAAOAAAAOAAAAOAADAOAAPAOAA/AOAD+AOAPwAOA/AAOD8AAOPwAAO/AAAP8AAAPwAAAPAAAAIAAAAAAAAAAADwAB8P8AD+f+AH/++APH4PAODwHAOBwHAMBwDAMBwHAODwHAODwHAH/8eAH+f+AB8f8AAAHwAAAAAAAAAAAAAAAAA+AAAB/gAAH/wAAHh4DAOA4HAOA4PAOAY/AOAZ8AOA74AOA/gAPB/AAH/8AAD/4AAB/gAAAAAAAAAAAAAAAAAAPAPAAPAPAAPAPAAGAGAAAAAAAAAAA="), 46, atob("BgsRERERERERERERCA=="), 30+(scale<<8)+(1<<16));
};
require("Font8x12").add(Graphics);
var i2c = new I2C();
i2c.setup({ scl : D7, sda: D0 });
var bme = require("BME280").connect(i2c,{addr: 0x77});
var rtc = require("DS3231").connect(i2c, { DST : true });

LED.set();

function getDate(){
  var d = (rtc.readDateTime()).replace(' ','/').replace(':','/').replace(':','/').split('/');
  return new Date(
    Number(d[2]),
    Number(d[1]-1),
    Number(d[0]),
    Number(d[3]),
    Number(d[4]),
    Number(d[5]),
    0
  );
}

setWatch(function(e) {
  LED.toggle();
}, BTN1, { repeat: true, edge: 'rising', debounce: 50 });

setWatch(function(e) {
  load('menu.app.js');
}, BTN4, { repeat: true, edge: 'rising', debounce: 50 });


function onSecond() {
  // Called every second
  var t = getDate(); // get the current date and time
  g.clear();

  // Draw the time
  //g.setFontVector(30);
  g.setFontLato();
  var time = t.getHours()+":"+("0"+t.getMinutes()).substr(-2);
  var seconds = ("0"+t.getSeconds()).substr(-2);
  g.drawString(time,85 - g.stringWidth(time),10);
  //g.setFontVector(20);
  //g.drawString(seconds,95,20);

  g.setFont8x12();
  var batteryVoltage = NRF.getBattery().toFixed(2);
  var battery = batteryVoltage +' V';
  g.drawString(battery,128 - g.stringWidth(battery),0);

  climate = bme.getData();
  var temperature = climate.temp.toFixed(1) +' C';
  g.drawString(temperature,128 - g.stringWidth(temperature),14);

  var humidity = climate.humidity.toFixed(0) +' rF';
  g.drawString(humidity,128 - g.stringWidth(humidity),28);

  // Draw the date
  // Get the date as a string by removing the time from the end of it
  var date = t.toString().replace(/\d\d:.*/,"");
  g.setFontBitmap();
  g.drawString(date,0,0);

  // NRF.findDevices(function(devs) {
  //   var idx = 0;
  //   devs.forEach(function(dev) {
  //     if (dev.manufacturer!=0x590) return;
  //     var d = new DataView(dev.manufacturerData);
  //     g.drawString(`${dev.name}: ${d.getInt8(1)}'C (${d.getUint8(0)}% bat)`,0,(idx*6)+45);
  //     idx++;
  //   });
  //   if (!idx) g.drawString("(no devices found)", 0, 45);
  //   g.flip();
  // }, 2000);
  g.flip();
}

// Call onSecond every second
setInterval(onSecond, 60000);
onSecond();
