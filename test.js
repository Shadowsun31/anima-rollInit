"use strict";

let initiative = require(__dirname + '/initiative');
let init = initiative();

console.log(init.rollInit(50, 0, 0));
console.log(init.rollInit(50, 0, 0, true));
