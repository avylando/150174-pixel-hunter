import {changeDisplay} from './utils.js';
import introPage from './templates/intro.js';
import greetingPage from './templates/greeting.js';
import rulesPage from './templates/rules.js';
import gameOnePage from './templates/game-1.js';
import gameTwoPage from './templates/game-2.js';
import gameThreePage from './templates/game-3.js';
import statsPage from './templates/stats.js';

function showIntroHandler() {
  const introBtn = document.querySelector(`.intro__asterisk`);
  introBtn.addEventListener(`click`, () => {
    changeDisplay(greetingPage);
    showGreetingHandler();
  });
}

function showGreetingHandler() {
  const continueBtn = document.querySelector(`.greeting__continue`);
  continueBtn.addEventListener(`click`, () => {
    changeDisplay(rulesPage);
    showRulesHandler();
  });
}

function showRulesHandler() {
  const backBtn = document.querySelector(`.back`);
  const form = document.querySelector(`.rules__form`);
  const nameInput = form.querySelector(`.rules__input`);
  const goBtn = form.querySelector(`.rules__button`);

  form.reset();

  nameInput.addEventListener(`input`, () => {
    if (nameInput.value === ``) {
      goBtn.disabled = true;
    } else {
      goBtn.disabled = false;
    }
  });

  form.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    console.dir(gameOnePage);
    changeDisplay(gameOnePage);
    gameOneShowHandler();
  });

  backBtn.addEventListener(`click`, () => {
    changeDisplay(introPage);
    showIntroHandler();
  });
}

function gameOneShowHandler() {
  const backBtn = document.querySelector(`.back`);
  const form = document.querySelector(`.game__content`);
  const inputs = form.querySelectorAll(`input[type='radio']`);
  const q1Inputs = form.querySelectorAll(`input[name='question1']`);
  const q2Inputs = form.querySelectorAll(`input[name='question2']`);

  let answer1 = false;
  let answer2 = false;

  inputs.forEach((input) => {
    input.checked = false;

    input.addEventListener(`change`, () => {
      q1Inputs.forEach((el) => {
        if (el.checked) {
          answer1 = true;
        }
      });

      q2Inputs.forEach((el) => {
        if (el.checked) {
          answer2 = true;
        }
      });

      if (answer1 && answer2) {
        changeDisplay(gameTwoPage);
        gameTwoShowHandler();
      }
    });
  });

  backBtn.addEventListener(`click`, () => {
    changeDisplay(introPage);
    showIntroHandler();
  });


}

function gameTwoShowHandler() {
  const backBtn = document.querySelector(`.back`);
  const inputs = document.querySelectorAll(`input[type='radio']`);

  inputs.forEach((input) => {
    input.checked = false;

    input.addEventListener(`change`, () => {
      if (input.checked) {
        changeDisplay(gameThreePage);
        gameThreeShowHandler();
      }
    });
  });

  backBtn.addEventListener(`click`, () => {
    changeDisplay(introPage);
    showIntroHandler();
  });
}

function gameThreeShowHandler() {
  const backBtn = document.querySelector(`.back`);
  const options = document.querySelectorAll(`.game__option`);

  options.forEach((option) => {
    option.addEventListener(`click`, () => {
      changeDisplay(statsPage);
      statsShowHandler();
    });
  });

  backBtn.addEventListener(`click`, () => {
    changeDisplay(introPage);
    showIntroHandler();
  });
}

function statsShowHandler() {
  const backBtn = document.querySelector(`.back`);

  backBtn.addEventListener(`click`, () => {
    changeDisplay(introPage);
    showIntroHandler();
  });
}

changeDisplay(introPage);
showIntroHandler();
