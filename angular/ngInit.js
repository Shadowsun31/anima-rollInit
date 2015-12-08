// BROECKX WENDY
// 2015
// Initiative Generator for Anima Beyond Fantasy RPG
//
"use strict";
let pjs;

let app = angular.module("app",[]);

app.controller("initCtrl", ["$scope", function($scope){
  $scope.init = function(){
    pjs = {
      "pjs" : [
        {
          "name" : "test",
          "natura" : 0,
          "base_init" : 50
        },
        {
          "name" : "bob",
          "natura" : 15,
          "base_init" : 75
        }
      ]};

    for (let i in pjs.pjs) {
      let pj = pjs.pjs[i];

      console.log(rollInit(pj.base_init, 0, pj.natura, true));
    };

    rollInitFromJSON(pjs.pjs);
    console.log(pjs);
  }
}]);


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
      log += base_init + " !01 Fumble! -125 ";
      break;
    case 2: // if 2 is rolled => Fumble
      init += -100;
      log += base_init + " !02 Fumble! -100 ";
      break;
    case 3: // if 3 is rolled => Little Fumble
      init += -75;
      log += base_init + " !03 Fumble! -75 ";
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

  let initWithLog = {
    "log" : log,
    "init": init
  };

  // return a JSON Obj with init details and init result
  if(logEnabled) return initWithLog;
  // return init result
  return init;
}

function rollInitFromJSON(json){
  for (let i in json) {
    let char = json[i];
    let temp = rollInit(char.base_init, 0, char.natura, true);

    char.detail_init = temp.log;
    char.final_init = temp.init;
  }
}
