'use strict';

var fs = require('fs');
var text = fs.readFileSync("./input.txt").toString("utf-8");
var textByLine = text.split("\r\n");
textByLine.pop();

var hooverInput = [];
var subArray

var i;
for(i = 0; i < textByLine.length; i++) {
  if (i === textByLine.length - 1) {
    subArray = textByLine[i].split("");
    hooverInput.push(subArray);
    } else {
    subArray = textByLine[i].split(" ");
    hooverInput.push(subArray);
  };
};

console.log(hooverInput);
