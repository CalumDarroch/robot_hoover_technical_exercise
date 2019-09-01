'use strict';

function Room() {
  this._size = [];
  this._hooverPosition = [];
  this._dirtPatches = [];
};

Room.prototype.inputSize = function(x, y) {
  this._size[0] = x;
  this._size[1] = y;
  return [x, y];
};

Room.prototype.size = function() {
  return this._size;
};

Room.prototype.inputHooverPosition = function(x, y) {
  if (x <= this._size[0] && y <= this._size[1]) {
    this._hooverPosition[0] = x;
    this._hooverPosition[1] = y;
    return [x, y];
  } else {
  throw "Hoover cannot be placed outside of the room";
  }
};

Room.prototype.hooverPosition = function() {
  return this._hooverPosition;
};

Room.prototype.moveHoover = function(direction) {
  if (direction === "N" && this._hooverPosition[1] < this._size[1]) {
    this._hooverPosition[1] += 1;
  } else if (direction === "S" && this._hooverPosition[1] > 0) {
    this._hooverPosition[1] -= 1;
  } else if (direction === "E" && this._hooverPosition[0] < this._size[0]) {
    this._hooverPosition[0] += 1;
  } else if (direction === "W" && this._hooverPosition[0] > 0) {
    this._hooverPosition[0] -= 1;
  } else {
    throw "Hoover cannot move outside of the room";
  }
  return this._hooverPosition;
}

Room.prototype.inputDirtPatch = function(x, y) {
  var dirtPatch = [x, y];
  this._dirtPatches.push(dirtPatch);
  return dirtPatch;
};

Room.prototype.dirtPatches = function() {
  return this._dirtPatches;
}
