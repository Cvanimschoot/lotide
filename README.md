# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cvanimschoot/lotide`

**Require it:**

`const _ = require('@cvanimschoot/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: Grabs the first entry within an array. (index 0)
* `function2(tail)`: Grabs the entries after the first entry within an array (index > 0)
* `function3(middle)`: Grabs the middle entries of an array. If the array is even it will grab two entries to make it the "middle".