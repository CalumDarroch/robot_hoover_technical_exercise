'use strict';

function Roomba() {
  this._startPosition = [];
};

Roomba.prototype.inputStartPosition = function(x, y) {
  this._startPosition[0] = x;
  this._startPosition[1] = y;
  return [x, y];
};
