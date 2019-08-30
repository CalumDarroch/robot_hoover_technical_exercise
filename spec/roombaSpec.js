'use strict';

describe('Roomba tests:', function() {
  var roomba;

  beforeEach(function() {
    roomba = new Roomba();
  });

  it('roomba can be assigned a starting coordinate', function() {
    expect(roomba.inputStartPosition(4, 5)).toEqual([4, 5]);
    expect(roomba.inputStartPosition(7, 3)).toEqual([7, 3]);
    expect(roomba.inputStartPosition(19, 0)).toEqual([19, 0]);
    expect(roomba.inputStartPosition(154, 896746)).toEqual([154, 896746]);
  });
});
