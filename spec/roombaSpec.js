'use strict';

describe('Roomba tests:', function() {
  var roomba;

  beforeEach(function() {
    roomba = new Roomba();
  });

  it('roomba can be assigned a starting coordinate', function() {
    expect(roomba.inputStartPosition(4, 5)).toEqual([4, 5]);
  });
});
