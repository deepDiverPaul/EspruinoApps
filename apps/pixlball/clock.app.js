function sP(r,g,b) {
  //require("neopixel").write(D3, [g,r,b,g,r,b,g,r,b,g,r,b]);
}

var rgb = new Uint8ClampedArray(4 * 3);
var neoOn = false;
var neoStop = false;
var pos = 0;
function getPattern() {
  if(neoStop === false) pos++;
  for (var i=0;i<rgb.length;) {
    rgb[i++] = (1 + Math.sin((pos)*0.1324)) * 10;
    rgb[i++] = (1 + Math.sin((pos)*0.1654)) * 10;
    rgb[i++] = (1 + Math.sin((pos)*0.1)) * 10;
  }
  return rgb;
}


Graphics.prototype.setFontLato = function(scale) {
  // Actual height 32 (33 - 2)
  g.setFontCustom(atob("AAAAAAAAAAAAAAAAAB4AAAAAPwAAAAA/AAAAAD8AAAAAPwAAAAAeAAAAAAAAAAAAA8AAAAAPwAAAAH/AAAAB/4AAAA//AAAAP/gAAAH/4AAAD/8AAAA/+AAAAf/gAAAH/wAAAB/8AAAAP+AAAAA/AAAAADwAAAAAAAAAAAAAH/8AAAB//8AAAf//8AAD///4AAf///wAD/wH/gAPwAB+AB+AAD8AHwAAHwAfAAAfAB4AAA8AHgAAHwAfAAAfAB+AAD8AD8AAfgAP+AP+AAf///wAA///+AAB///wAAD//+AAAB//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAHgAAAAA+AAPAAH4AA8AA/gADwAD8AAPAAfgAA8AD8AADwAf////AB////8AH////wAf////AB////8AAAAADwAAAAAPAAAAAA8AAAAADwAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAADwAB8AAfAAPwAD8AB/AAfwAP8AD/AA/gAf8AH4AD/wAfAAf/AB8AD/8AHwAf3wAeAD+fAB8Afx8AHwD+HwAfg/wfAA//+B8AD//wHwAH/8AfAAP/gB8AAf4AHwAAEAAPAAAAAAAAAAAAAAAAAAAAAAAAAOAAAOAB8AAD8AH8AAfwAfwAD/AA/gAP4AB+AB+AAD8AHwAAHwAfAeAfAB8B4A8AHgHgHwAfA+AfAB8D4B8AH4fwPwAf//z+AA////4AB/9//AAH/j/4AAH8P/AAAAAPwAAAAAAAAAAAAAAAAAAPgAAAAB+AAAAAf4AAAAD/gAAAAf+AAAAH/4AAAA/ngAAAH8eAAAB/B4AAAP4HgAAB/AeAAAfwB4AAD+AHgAAfwAeAAB////8AH////wAf////AB////8AAAAHgAAAAAeAAAAAB4AAAAAHgAAAAAAAAAAAAAgAAACAPAAAP4A+AA//wD4AH//APwAf/8AfAB//wB8AHweAHwAfB4APAB8HgA8AHweAHwAfB8AfAB8HwD8AHwfgfgAfA//+AB8D//wAHwH/+AAeAP/wABgAf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf+AAAAH/8AAAA//8AAAH//wAAB///gAAP+A+AAB/wB8AAf/AHwAD/4APAAf3gA8AH+eADwAfx8AfAB+HwB8AHgfgPwAcA/j+ABgD//4AEAH//AAAAf/4AAAAf/AAAAA/wAAAAAAAAAAAAAAAAAAAAAAeAAAAAB8AAAAAHwAAAQAfAAAHAB8AAB8AHwAAfwAfAAH/AB8AB/8AHwAf/gAfAH/4AB8B/+AAHwP/gAAfD/4AAB8/+AAAH//gAAAf/4AAAB/+AAAAH/AAAAAfwAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAP4AAB/B/4AAP+P/wAB/9//gAP///+AA///H8AHwfwHwAfA/AfAB4B4A8AHgHgDwAeAeAPAB4D4A8AHwPwHwAfh/AfAA///v4AD////gAH/3/8AAP+P/wAAPwf+AAAAAfgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAB/4AAAAf/wAAAB//gAwAP//AHAA/D8A8AHwHwPwAfAPB/AB4A8P8AHgDz/gAeAPf8AB8A//AAHwH/4AAfg/+AAA///wAAD//+AAAH//gAAAP/8AAAAP/AAAAACAAAAAAAAAAAAAAAAAAAB4AeAAAPwD8AAA/APwAAD8A/AAAPwD8AAAeAHgAAAAAAAAAAAAAAAAAAAAA="), 46, atob("CQ8XFxcXFxcXFxcXCw=="), 40+(scale<<8)+(1<<16));
};
Graphics.prototype.setFontLatoSmall = function(scale) {
  // Actual height 15 (14 - 0)
  g.setFontCustom(atob("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"), 32, atob("AwYHCQkNCwQFBQYJBAYEBgkJCQkJCQkJCQkEBAkJCQcNCwoLDAkJDAwFBwsIDwwNCg0KCQoMCxELCgoFBgUJBgUICQgJCQYICQQECQQNCQkJCQcHBgkJDQkJCAUFBQkM"), 16+(scale<<8)+(1<<16));
};
require("FontTeletext10x18Mode7").add(Graphics);
require("Font8x12").add(Graphics);
var i2c = new I2C();
i2c.setup({ scl : D7, sda: D0 });
var bme = require("BME280").connect(i2c,{addr: 0x77});
var rtc = require("DS3231").connect(i2c, { DST : true });

function getDate(){
  var d = (rtc.readDateTime()).replace(' ','/').replace(':','/').replace(':','/').split('/');
  var date = new Date(
    Number(d[2]),
    Number(d[1]-1),
    Number(d[0]),
    Number(d[3]),
    Number(d[4]),
    Number(d[5]),
    0
  );
  return date;
}

const pad = n => `0${n}`.slice(-2);

setWatch(function(e) {
  LED.toggle();
}, BTN1, { repeat: true, edge: 'rising', debounce: 50 });

//setWatch(function(e) {
//  neoOn = !neoOn;
//}, BTN2, { repeat: true, edge: 'rising', debounce: 50 });

//setWatch(function(e) {
//  neoStop = !neoStop;
//}, BTN3, { repeat: true, edge: 'rising', debounce: 50 });

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
  g.drawString(time,64 - (g.stringWidth(time)/2),14);
  //g.setFontVector(20);
  //g.drawString(seconds,95,20);

  g.setFontLatoSmall();

  climate = bme.getData();
  var temperature = climate.temp.toFixed(1) +' C';
  g.drawString(temperature,0,64-13);

  var humidity = climate.humidity.toFixed(0) +' rF';
  g.drawString(humidity,128 - g.stringWidth(humidity),64-13);

  // Draw the date
  // Get the date as a string by removing the time from the end of it
  var date = `${pad(t.getDate())}.${pad(t.getMonth()+1)}.${t.getFullYear()}`;
  //g.setFontBitmap();
  g.drawString(date,64 - (g.stringWidth(date)/2),0);

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

//setInterval(function() {
//  if(neoOn){
//    require("neopixel").write(D3, getPattern());
//  }else {
//    sP(0,0,0);
//  }
//}, 1000);

// Call onSecond every second
setInterval(onSecond, 60000);
onSecond();
