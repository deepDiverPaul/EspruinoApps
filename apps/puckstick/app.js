Pin.prototype.glow = function(repeat) {
  repeat = repeat || 1;
  var pin = this;
  var pos = 0.001;
  var interval = setInterval(function() {
    analogWrite(pin, Math.abs(Math.sin(pos*Math.PI))*0.5); // up to 20ms
    pos += 0.01;
    if (pos>=repeat) {clearInterval(interval);pin.reset();}
  }, 20); // 50Hz
};
pinMode(D30, 'input_pullup');
setWatch(function(e) {
  FET.set();
  digitalWrite(D2, 1);
  setTimeout(() => {FET.reset();digitalWrite(D2, 0);}, 500);
}, D30, { repeat: true, edge: 'rising' });

pinMode(D29, 'input_pullup');
setWatch(function(e) {
  FET.set();
  digitalWrite(D2, 1);
  setTimeout(() => {FET.reset();digitalWrite(D2, 0);}, 50);
}, D29, { repeat: true, edge: 'rising' });

pinMode(D28, 'input_pullup');
setWatch(function(e) {
  analogWrite(D31, 0.5, {freq:800});
  setTimeout(() => {digitalWrite(D31, 0);}, 200);
  setTimeout(() => {analogWrite(D31, 0.5, {freq:1600});}, 400);
  setTimeout(() => {digitalWrite(D31, 0);}, 450);
}, D28, { repeat: true, edge: 'rising' });
