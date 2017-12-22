'use strict';

const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


describe('fizzBuzzer', function() {
  // testing normal cases
  it('should return fizzbuzz,fizz, buzz or number', function() {
    const normalCases = [
      { a: 15, expected: 'fizz-buzz' },
      { a: 5, expected: 'buzz' },
      { a: 3, expected: 'fizz' },
      { a: 8, expected: 8 }
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('input is not a number', function() {
    const badCases = [
      { a: true, expected: '`num` must be a number' },
      { a: false, expected: '`num` must be a number' },
      { a: 'xyz', expected: '`num` must be a number' }
    ];
    badCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      console.log(`hey the log should say: ${answer}`);
      answer.should.Throw(Error);
    });
  });
});