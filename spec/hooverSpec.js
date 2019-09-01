'use strict';

describe('Hoover tests:', function() {
  var hoover;

  beforeEach(function() {
    hoover = new Hoover();
  });

  it('hoover can be assigned a starting coordinate', function() {
    expect(hoover.inputStartPosition(4, 5)).toEqual([4, 5]);
    expect(hoover.inputStartPosition(7, 3)).toEqual([7, 3]);
    expect(hoover.inputStartPosition(19, 0)).toEqual([19, 0]);
    expect(hoover.inputStartPosition(154, 896746)).toEqual([154, 896746]);
  });

  it('hoover cannot be assigned a starting coordinate outside of the room', function() {

  })
});
