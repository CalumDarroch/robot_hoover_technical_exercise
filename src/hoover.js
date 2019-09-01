'use strict';

function Hoover() {
  this._startPosition = [];
};

Hoover.prototype.inputStartPosition = function(x, y) {
  this._startPosition[0] = x;
  this._startPosition[1] = y;
  return [x, y];
};

Hoover.prototype.startPosition = function() {
  return this._startPosition;
};
