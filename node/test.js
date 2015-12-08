// BROECKX WENDY
// 2015
// Initiative Generator for Anima Beyond Fantasy RPG
//

"use strict";

let initiative = require(__dirname + '/nodeInit');
let init = initiative();

console.log(init.rollInit(50, 0, 0));
console.log(init.rollInit(50, 0, 0, true));

for (var i = 0; i < 500; i++) {
  console.log(init.rollInit(50, 0, 15, true));
}
