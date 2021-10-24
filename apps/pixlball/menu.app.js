// Two variables to update
var boolean = false;
var number = 50;
// First menu
var mainmenu = {
    "" : {
        "title" : "-- Main Menu --"
    },
    "Clock" : function() { load('clock.app.js') },
    "Backlight On" : function() { LED1.set(); },
    "Backlight Off" : function() { LED1.reset(); },
    "Submenu" : function() { Pixl.menu(submenu); },
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
    // "Exit" : function() { Pixl.menu(); },
};
// Submenu
var submenu = {
    "" : {
        "title" : "-- SubMenu --"
    },
    "One" : undefined, // do nothing
    "Two" : undefined, // do nothing
    "< Back" : function() { Pixl.menu(mainmenu); },
};
// Actually display the menu
Pixl.menu(mainmenu);
