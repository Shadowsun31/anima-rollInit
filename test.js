"use strict";

let initiative = require(__dirname + '/initiative');
let init = initiative();

// console.log(init.rollInit(50, 0, 0));
// console.log(init.rollInit(50, 0, 0, true));

for (var i = 0; i < 500; i++) {
  init.rollInit(50, 0, 15, true);
}
