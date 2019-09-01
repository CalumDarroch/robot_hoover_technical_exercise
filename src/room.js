'use strict';

function Room() {
  this._size = [];
  this._hooverPosition = [];
  this._dirtPatches = [];
  this._dirtPatchesHoovered = 0;
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
    this.hitDirtPatch(this._hooverPosition);
  } else if (direction === "S" && this._hooverPosition[1] > 0) {
    this._hooverPosition[1] -= 1;
    this.hitDirtPatch(this._hooverPosition);
  } else if (direction === "E" && this._hooverPosition[0] < this._size[0]) {
    this._hooverPosition[0] += 1;
    this.hitDirtPatch(this._hooverPosition);
  } else if (direction === "W" && this._hooverPosition[0] > 0) {
    this._hooverPosition[0] -= 1;
    this.hitDirtPatch(this._hooverPosition);
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
};

Room.prototype.hitDirtPatch = function(hooverPosition) {
  var i;
  var length = this._dirtPatches.length;
  var result;
  for(i = 0; i < length; i++) {
    if (hooverPosition[0] === this._dirtPatches[i][0] && hooverPosition[1] === this._dirtPatches[i][1]) {
      result = true;
      this._dirtPatchesHoovered += 1;
      this._dirtPatches.splice(i, 1);
      break;
    } else {
      result = false;
    }
  }
  return result;
};

Room.prototype.dirtPatchesHoovered = function() {
  return this._dirtPatchesHoovered;
}
