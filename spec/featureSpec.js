'use strict';

describe('Feature test:', function(){
  var room;

  beforeEach(function(){
    room = new Room();
  });

  it('rooms can be assigned X and Y coordinates sizes', function(){
    expect(room.inputSize(4, 5)).toEqual([4, 5]);
    expect(room.inputSize(7, 3)).toEqual([7, 3]);
    expect(room.inputSize(19, 2)).toEqual([19, 2]);
    expect(room.inputSize(154, 896746)).toEqual([154, 896746]);
  });
});
