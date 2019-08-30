'use strict';

describe('Feature test:', function(){
  var room;

  beforeEach(function(){
    room = new Room();
  });

  it('rooms can be assigned X and Y coordinates sizes', function(){
    expect(room.inputSize(4, 5)).toEqual([4, 5]);
  });
});
