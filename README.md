# Robot Hoover Technical Exercise

This is a technical exercise written in JavaScript. The aim is to write a program that will simulate a robot hoover navigating a room and hoovering up piles of dirt.

## Requirements

- The program can be run either from the terminal or a webpage.

- The room dimensions will be input as cartesian coordinates (positive integers only). E.g. A room with coordinates X: 5 and Y: 5 would consist of 5 columns and 5 rows, for a total of 25 different positions that the Roomba could occupy.

- Patches of dirt will be input using the same X/Y coordinate format.

- The hoover's starting position will be input in the same format.

- The hoover's driving instructions will be formatted as cardinal directions, i.e. North, South, East and West.

### Input:

The program's input will be a `.txt` file containing all of the above information. Here is an example:

```
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW
```
- Line 1 is the room dimensions.
- Line 2 is the hoover's starting position.
- Subsequent lines are the locations of dirt patches.
- The final line is the driving instructions for the hoover.

### Output

The program will then return a simple 2-line output, for example:

```
1 3
1
```
- Line 1 is the final position of the hoover after it has completed all of its instructions.
- Line 2 is the number of patches of dirt it successfully hoovered up (i.e. occupied the same space as at some point on its journey).

## Approach

The first thing I will do with this program is break down the problem into specific user stories based upon the requirements, tackling the smallest issue first and using TDD to drive the increasing complexity of the program.

```
As a user,
So that my hoover can navigate a room,
I want to be able to input the size of the room.
```
```
As a user,
So that my hoover can complete its journey as planned,
I need the room size to be saved after being set.
```
```
As a user,
So that my hoover can navigate successfully,
I need it to record its initial position.
```
At this point I reached my first edge case: what if the start position is not within the bounds of the room? This will need to be tackled. So:
```
As a user,
So that my hoover doesn't get confused,
I will need to make sure that it can't start outside the room.
```
This will now return an error if the user tries to place the hoover outside of the room. Further down the line I may refactor it so that the start position is moved to the nearest position to that which the user specified.
```
As a user,
So that I can know if the hoover has hit a dirt patch,
I will need to record the locations of the dirt patches in the room.
```
```
As a user,
So that the hoover can go on its journey,
I will need its location to change when it is given an instruction.
```
The hoover can now move North, South, East or West when given a single-character string of "N", "S", "E" or "W" as an argument for the function `moveHoover`.

This raises the next edge case: what happens when the hoover is instructed to move outside the bounds of the room, similar to before with its starting position? For now, I will tackle it in a similar way by raising an error if it is instructed to do so.
