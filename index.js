'use strict';

// Parse input.txt into an array of strings each containing one line of the file:
var fs = require('fs');
var text = fs.readFileSync("./input.txt").toString("utf-8");
var textByLine = text.split("\r\n");
textByLine.pop();

var hooverInput = [];
var subArray

// Split each "line" into an array of its own:
var i;
for (i = 0; i < textByLine.length; i++) {
  if (i === textByLine.length - 1) {
    subArray = textByLine[i].split("");
    hooverInput.push(subArray);
    } else {
    subArray = textByLine[i].split(" ");
    hooverInput.push(subArray);
  };
};

// Convert all number strings in the arrays to integers using nested loops:
var j;
for (i = 0; i < hooverInput.length - 1; i++) {
  for (j = 0; j < 2; j++) {
    hooverInput[i][j] = parseInt(hooverInput[i][j])
  };
};

var Room = require('./src/room.js');
var room = new Room();

// Input room dimensions, hoover starting position and dirt patch positions:
var last = hooverInput.length - 1;
room.inputSize(hooverInput[0][0], hooverInput[0][1]);
room.inputHooverPosition(hooverInput[1][0], hooverInput[1][1]);
for (i = 2; i < last; i++) {
  room.inputDirtPatch(hooverInput[i][0], hooverInput[i][1]);
};
// Move hoover around the room:
var direction = "";
for (i = 0; i < hooverInput[last].length; i++) {
  direction = hooverInput[last][i];
  room.moveHoover(direction);
};

// Output final hoover position and number of dirt patches hoovered:
console.log(`${room.hooverPosition()[0]} ${room.hooverPosition()[1]}`);
console.log(`${room.dirtPatchesHoovered()}`);
