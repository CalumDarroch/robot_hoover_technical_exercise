'use strict';

describe('Feature tests:', function() {
  var room;

  beforeEach(function() {
    room = new Room();
  });

  it('rooms can be assigned X and Y coordinates sizes', function() {
    expect(room.inputSize(4, 5)).toEqual([4, 5]);
    expect(room.inputSize(7, 3)).toEqual([7, 3]);
    expect(room.inputSize(19, 0)).toEqual([19, 0]);
    expect(room.inputSize(154, 896746)).toEqual([154, 896746]);
  });

  it('size of the room can be recorded after input', function() {
    room.inputSize(12, 6);
    expect(room.size()).toEqual([12, 6]);
    room.inputSize(0, 2095234);
    expect(room.size()).toEqual([0, 2095234]);
  });

  it('hoover can be assigned a starting coordinate', function() {
    room.inputSize(1000, 1000000);
    expect(room.inputHooverPosition(4, 5)).toEqual([4, 5]);
    expect(room.inputHooverPosition(7, 3)).toEqual([7, 3]);
    expect(room.inputHooverPosition(19, 0)).toEqual([19, 0]);
    expect(room.inputHooverPosition(154, 896746)).toEqual([154, 896746]);
  });

  it('hoover cannot be assigned a starting position outside of the room', function() {
    var error = "Hoover cannot be placed outside of the room";
    room.inputSize(5, 5);
    expect(function() { room.inputHooverPosition(5, 6) }).toThrow(error);
  });

  it('coordinates of patches of dirt can be input', function () {
    expect(room.inputDirtPatch(1, 3)).toEqual([1, 3]);
  });

});
