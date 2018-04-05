import {assert} from 'chai';
import {countPoints, setTimer} from './utils.js';

describe(`Points Counter`, () => {
  let lives = 3;

  it(`should return 1150 when all 10 answers is correct with middle time and restLives = 3`, () => {
    const answers = [
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15}
    ];

    assert.equal(1150, countPoints(answers, lives));
  });

  it(`should return 850 when 8 answers is correct with middle time and restLives = 1`, () => {
    const answers = [
      {correct: false, time: 15},
      {correct: false, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15}
    ];

    lives = 1;
    assert.equal(850, countPoints(answers, lives));
  });

  it(`should return -1 when 9 answers is correct with middle time and restLives = 0`, () => {
    const answers = [
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: false, time: 15}
    ];

    lives = 0;
    assert.equal(-1, countPoints(answers, lives));
  });

  it(`should return 950 when 7 answers is correct with middle time and one fast and restLives = 2`, () => {
    const answers = [
      {correct: false, time: 15},
      {correct: false, time: 15},
      {correct: true, time: 8},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15}
    ];

    lives = 2;
    assert.equal(950, countPoints(answers, lives));
  });

  it(`should return 1000 when 7 answers is correct with middle time, one fast, two slow and restLives = 1`, () => {
    const answers = [
      {correct: true, time: 30},
      {correct: true, time: 30},
      {correct: true, time: 8},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15},
      {correct: true, time: 15}
    ];

    lives = 1;
    assert.equal(1000, countPoints(answers, lives));
  });
});

describe(`Timer`, () => {

  it(`should return object with time property`, () => {
    const Timer = setTimer(50);
    assert.equal(50, Timer.time);
  });
});
