const createContentFromString = (stringTemplate) => {
  const element = document.createElement(`template`);
  element.innerHTML = stringTemplate;
  return element.content;
};

const changeDisplay = (content) => {
  const display = document.querySelector(`#main`);
  display.innerHTML = ``;
  display.appendChild(content);
};

const countPoints = (answers, restLives) => {
  if (restLives === 0) {
    return -1;
  }

  let points = 0;

  answers.forEach((answer) => {
    if (answer.correct) {
      points += 100;

      if (answer.time < 10) {
        points += 50;
      } else if (answer.time > 20) {
        points -= 50;
      }
    }
  });

  points += (50 * restLives);

  return points;
};

const setTimer = (time) => {
  if (typeof time !== `number` || time < 1) {
    throw new Error(`invalid time value`);
  }

  class Timer {
    constructor() {
      this.time = time;
    }

    tick() {
      if (this.time === 0) {
        return `Time is up!`;
      }

      this.time--;
      return this.time;
    }
  }

  return new Timer();
};


export {createContentFromString, changeDisplay, countPoints, setTimer};
