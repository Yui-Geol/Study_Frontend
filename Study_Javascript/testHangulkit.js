const hangulkit = require('hangulkit');
const ntk = require('num-to-korean');
const { josa } = require("auto-josa")

const number = 1234;

console.log(`저는 ${hangulkit.eunneun(number)} 좋아합니다`);

console.log(ntk.numToKorean(1234));

let hello = josa`${number}이라는 놈이다.`;

console.log(hello);




