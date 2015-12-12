// BROECKX WENDY
// 2015
// Initiative Generator for Anima Beyond Fantasy RPG
//

var pjs;

var app = angular.module("app",[]);

app.controller("initCtrl", ["$scope", function($scope){
  $scope.addPJ = function(){

    if($scope.newName != null && $scope.newBaseInit != null){
      if($scope.newNatura == null) $scope.newNatura = 5;
      if($scope.newModif == null) $scope.newModif = 0;
      $scope.newPJ = {
        "name" : $scope.newName,
        "natura" : $scope.newNatura,
        "base_init" : $scope.newBaseInit,
        "modif" : $scope.newModif
      };
      $scope.pjs.push($scope.newPJ);

      $scope.newName = "";
      $scope.newNatura = "";
      $scope.newBaseInit = "";
      $scope.newModif = "";
      $scope.pjs.sort(sortByProperty('name'));
    }
  }

  $scope.generateInit = function(){
    $scope.chars = JSON.parse(JSON.stringify($scope.pjs));
    rollInitFromJSON($scope.chars);

    $scope.chars.sort(sortByProperty('final_init')).reverse();
    angular.forEach($scope.chars, function (char) {
        char.Selected = false;
    });

  }
  $scope.switchSelected = function(val){
    val = !val;

  }
  $scope.changeName = function(pj, val){
    pj.name = val;
  }
  $scope.changeNatura = function(pj, val){
    pj.natura = val;
  }
  $scope.changeBaseInit = function(pj, val){
    pj.base_init = val;
  }
  $scope.changeModif = function(pj, val){
    pj.modif = val;
  }
  $scope.removePJ = function(i){
    $scope.pjs = $scope.pjs.slice(i, 1);
  }

  $scope.init = function(){

    $scope.pjs = [];
    $scope.chars = [];

    pjs = {
      "pjs" : [
        {
          "name" : "Torako",
          "natura" : 15,
          "base_init" : 150,
          "modif" : 0
        },
        {
          "name" : "Bob",
          "natura" : 15,
          "base_init" : 75,
          "modif" : 0
        },
        {
          "name" : "Damon",
          "natura" : 15,
          "base_init" : 100,
          "modif" : 0
        },
        {
          "name" : "Elias",
          "natura" : 15,
          "base_init" : 100,
          "modif" : 0
        },
        {
          "name" : "Hendrix",
          "natura" : 15,
          "base_init" : 100,
          "modif" : 0
        }
      ]};

    $scope.pjs = pjs.pjs.sort(sortByProperty('name'));
    $scope.chars = $scope.pjs;


  }


}]);


function sortByProperty(property) {
    return function (x, y) {
        return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
    };
}

function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

function rollInit(base_init, modif, natura, logEnabled){
  // base_init  -> Int      | base init value for the roll
  // modif      -> Int      | bonus and malus
  // natura     -> Int      | serve for limitation of roll or additional open roll
  // logEnabled -> boolean  | enable to log every details of rolls

  var init = base_init;   // set init to base init
  var openDice = 90;      // first value for open dices
  var log = "";           // var to print the complete roll
  var temp_init = randomIntInc(1, 100); // set the first roll
  var third_dice = randomIntInc(1, 10); // set the roll for Additional open roll

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

  var initWithLog = {
    "log" : log,
    "init": init
  };

  // return a JSON Obj with init details and init result
  if(logEnabled) return initWithLog;
  // return init result
  return init;
}

function rollInitFromJSON(json){
  for (var i in json) {
    var char = json[i];
    var temp = rollInit(char.base_init, char.modif, char.natura, true);

    char.detail_init = temp.log;
    char.final_init = temp.init;
  }
}
