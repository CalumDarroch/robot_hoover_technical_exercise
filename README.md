# Roomba Technical Exercise

This is a technical exercise written in JavaScript. The aim is to write a program that will simulate a Roomba (robot vacuum cleaner) navigating a room and hoovering up piles of dirt.

## Requirements

- The program can be run either from the terminal or a webpage.

- The room dimensions will be input as cartesian coordinates (positive integers only). E.g. A room with coordinates X: 5 and Y: 5 would consist of 5 columns and 5 rows, for a total of 25 different positions that the Roomba could occupy.

- Patches of dirt will be input using the same X/Y coordinate format.

- The Roomba's starting position will be input in the same format.

- The Roomba's driving instructions will be formatted as cardinal directions, i.e. North, South, East and West.

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
- Line 2 is the Roomba's starting position.
- Subsequent lines are the locations of dirt patches.
- The final line is the driving instructions for the Roomba.

### Output

The program will then return a simple 2-line output, for example:

```
1 3
1
```
- Line 1 is the final position of the Roomba after it has completed all of its instructions.
- Line 2 is the number of patches of dirt it successfully hoovered up (i.e. occupied the same space as at some point on its journey).

## Execution

The first thing I will do with this program is break down the problem into specific user stories based upon the requirements, tackling the smallest issue first and using TDD to drive the increasing complexity of the program.

```
As a user,
So that my Roomba can navigate a room,
I want to be able to input the size of the room.
```
```
As a user,
So that my Roomba can complete its journey as planned,
I need the room size to be saved after being set.
```
