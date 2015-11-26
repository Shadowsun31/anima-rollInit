// BROECKX WENDY
// 2015
// Initiative Generator for Anima Beyond Fantasy RPG
//
// let initiative = require('path/initiative');
// let init = initiative();

// init.rollInit(base_init,modif,natura[,logEnabled]);
// base_init Integer
// modif Integer
// natura Integer
// logEnabled boolean


// init.rollInit(50, 15, 0);
// init.rollInit(50, 15, 0, true);

"use strict";

function initiative(){

  function randomIntInc (low, high) {
      return Math.floor(Math.random() * (high - low + 1) + low);
  }

  function rollInit(base_init, modif, natura, logEnabled){
    // base_init  -> Int      | base init value for the roll
    // modif      -> Int      | bonus and malus
    // natura     -> Int      | serve for limitation of roll or additional open roll
    // logEnabled -> boolean  | enable to log every details of rolls

    let init = base_init;   // set init to base init
    let openDice = 90;      // first value for open dices
    let log = "";           // var to print the complete roll
    let temp_init = randomIntInc(1, 100); // set the first roll
    let third_dice = randomIntInc(1, 10); // set the roll for Additional open roll

    switch (temp_init) {
      case 1: // if 1 is rolled => Great Fumble
        init += -125;
        log += base_init + " !Fumble! -125 ";
        break;
      case 2: // if 2 is rolled => Fumble
        init += -100;
        log += base_init + " !Fumble! -100 ";
        break;
      case 3: // if 3 is rolled => Little Fumble
        init += -75;
        log += base_init + " !Fumble! -75 ";
        break;
      default: // else normal init
        init += temp_init;
        log += base_init + " + " + temp_init;
        if((temp_init % 11 == 0 && natura >= 15)) log += "(" + third_dice + ")"; // print the third_dice if natura allow additional open roll
        // if open dice let's reroll or additional open roll (if natura allow it)
        while (temp_init >= openDice || (temp_init / third_dice === 11 && natura >= 15)){
          if(natura == 0) openDice = 100; // if limitation of rolls then only 1 open roll is allowed
          else if(openDice < 100) openDice++; // increment openDice

          temp_init = randomIntInc(1, 100); // reroll
          third_dice = randomIntInc(1, 10); // reroll third_dice

          init += temp_init;
          log += " + " + temp_init;
          if((temp_init % 11 == 0 && natura >= 15)) log += "(" + third_dice + ")"; // print the third_dice if natura allow additional open roll
        }
    }

    init += modif; // apply bonus/malus

    log += " + " + modif + " = " + init;
    if(logEnabled) console.log(log);

    return init;
  }

  var that = {};
  that.rollInit = rollInit;
  return that;
}

module.exports = initiative;
