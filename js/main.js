import {changeDisplay} from './utils.js';
import renderIntro from './templates/intro.js';
import renderGreeting from './templates/greeting.js';
import renderRules from './templates/rules.js';
import renderGameOne from './templates/game-1.js';
import renderGameTwo from './templates/game-2.js';
import renderGameThree from './templates/game-3.js';
import renderStats from './templates/stats.js';

function backBtnListener() {
  const backBtn = document.querySelector(`.back`);

  backBtn.addEventListener(`click`, function () {
    changeDisplay(renderIntro());
    introPreset();
  });
}


function introPreset() {
  const introBtn = document.querySelector(`.intro__asterisk`);

  introBtn.addEventListener(`click`, function () {
    changeDisplay(renderGreeting());
    greetingPreset();
  });
}


function greetingPreset() {
  const continueBtn = document.querySelector(`.greeting__continue`);

  continueBtn.addEventListener(`click`, function () {
    changeDisplay(renderRules());
    rulesPreset();
  });
}


function rulesPreset() {
  const form = document.querySelector(`.rules__form`);
  const nameInput = form.querySelector(`.rules__input`);
  const goBtn = form.querySelector(`.rules__button`);

  form.reset();

  nameInput.addEventListener(`input`, function () {
    goBtn.disabled = nameInput.value === `` ? true : false;
  });

  form.addEventListener(`submit`, function (evt) {
    evt.preventDefault();
    changeDisplay(renderGameOne());
    gameOnePreset();
  });

  backBtnListener();
}


function gameOnePreset() {
  const form = document.querySelector(`.game__content`);
  const inputs = Array.from(form.querySelectorAll(`input[type='radio']`));
  const q1Inputs = Array.from(form.querySelectorAll(`input[name='question1']`));
  const q2Inputs = Array.from(form.querySelectorAll(`input[name='question2']`));

  let answer1 = false;
  let answer2 = false;

  inputs.map((input) => {
    input.checked = false;
  });

  q1Inputs.forEach((el) => {
    el.addEventListener(`change`, function q1Handler() {
      if (el.checked) {
        answer1 = true;

        if (answer2) {
          changeDisplay(renderGameTwo());
          gameTwoPreset();
        }
      }
    });
  });

  q2Inputs.forEach((el) => {
    el.addEventListener(`change`, function q2Handler() {
      if (el.checked) {
        answer2 = true;

        if (answer1) {
          changeDisplay(renderGameTwo());
          gameTwoPreset();
        }
      }
    });
  });

  backBtnListener();
}


function gameTwoPreset() {
  const inputs = document.querySelectorAll(`input[type='radio']`);

  inputs.forEach((input) => {
    input.checked = false;

    input.addEventListener(`change`, function () {
      if (input.checked) {
        changeDisplay(renderGameThree());
        gameThreePreset();
      }
    });
  });

  backBtnListener();
}


function gameThreePreset() {
  const options = document.querySelectorAll(`.game__option`);

  options.forEach((option) => {
    option.addEventListener(`click`, function handler() {
      changeDisplay(renderStats());
      backBtnListener();
    });
  });

  backBtnListener();
}

changeDisplay(renderIntro());
introPreset();
