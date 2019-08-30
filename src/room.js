'use strict';

function Room() {
  this._size = [];
};

Room.prototype.inputSize = function(x, y) {
  this._size[0] = x;
  this._size[1] = y;
  return [x, y];
};

Room.prototype.size = function() {
  return this._size;
};
