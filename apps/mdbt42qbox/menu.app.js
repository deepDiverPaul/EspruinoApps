pinMode(D16, 'input_pullup');
pinMode(D17, 'input_pullup');
I2C1.setup({scl:D19,sda:D18});
var g = require("SSD1306").connect(I2C1);
var bme = require("BME280").connect(I2C1);

var menu = require("graphical_menu");
var m;

var boolean = false;
var number = 50;

function blank() {
  g.clear();
  g.flip();
}

// First menu
var mainmenu = {
  "" : {
    "title" : "-- MDBT42Q Box --",
  },
  "Clock " : function() { blank(); load('clock.app.js'); },
  "Red LED" : function() { LED1.toggle(); },
  "Green LED" : function() { LED2.toggle(); },
  "Settings" : function() { blank(); m=menu.list(g, submenu); },
  "Sleep" : function (){ blank(); load('sleep.js'); },
};

// Submenu
var submenu = {
  "" : {
    "title" : "-- Settings --",
  },
  "A Boolean" : {
    value : boolean,
    format : v => v?"On":"Off",
    onchange : v => { boolean=v; }
  },
  "A Number" : {
    value : number,
    min:0,max:100,step:10,
    onchange : v => { number=v; }
  },
  "< Back" : function() { blank(); m=menu.list(g, mainmenu); },
};

setWatch(function() {
  m.move(-1); // up
}, D16, {repeat:true,debounce:50,edge:"falling"});

setWatch(function() {
  m.move(1); // down
}, D17, {repeat:true,debounce:50,edge:"falling"});

setWatch(function() {
  m.select(); // select
}, BTN, {repeat:true,debounce:50,edge:"rising"});

function onInit(){
  m = menu.list(g, mainmenu);
}
onInit();

