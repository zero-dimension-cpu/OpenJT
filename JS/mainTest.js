'use strict'
let s = require('./api.js');

let data = '你是谁';
let r = '';
s.getResponse(data, r);
console.log(r);