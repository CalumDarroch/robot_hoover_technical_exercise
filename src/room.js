'use strict';

function Room() {
  this._size = [];
  this._hooverPosition = [];
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
  this._hooverPosition[0] = x;
  this._hooverPosition[1] = y;
  return [x, y];
};

Room.prototype.hooverPosition = function() {
  return this._hooverPosition;
};
