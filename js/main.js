import { changeDisplay } from './utils.js';
import introPage from './templates/intro.js';
import greetingPage from './templates/greeting.js';
import rulesPage from './templates/rules.js';
import gameOnePage from './templates/game-1.js';
import gameTwoPage from './templates/game-2.js';
import gameThreePage from './templates/game-3.js';
import statsPage from './templates/stats.js';

function showIntroHandler() {
  const introBtn = document.querySelector(`.intro__asterisk`);

  introBtn.addEventListener(`click`, function handler() {
    changeDisplay(greetingPage);
    showGreetingHandler();
    this.removeEventListener(`click`, handler);
  });
}

function showGreetingHandler() {
  const continueBtn = document.querySelector(`.greeting__continue`);

  continueBtn.addEventListener(`click`, function continueClickHandler() {
    changeDisplay(rulesPage);
    showRulesHandler();
    this.removeEventListener(`click`, continueClickHandler);
  });
}

function showRulesHandler() {
  const form = document.querySelector(`.rules__form`);
  const nameInput = form.querySelector(`.rules__input`);
  const goBtn = form.querySelector(`.rules__button`);

  form.reset();

  nameInput.addEventListener(`input`, function nameInputHandler() {
    goBtn.disabled = nameInput.value === `` ? true : false;
    this.removeEventListener(`input`, nameInputHandler);
  });

  form.addEventListener(`submit`, function formSubmitHandler(evt) {
    evt.preventDefault();
    changeDisplay(gameOnePage);
    gameOneShowHandler();
    this.removeEventListener(`submit`, formSubmitHandler);
  });

  backBtnListener();
}

function gameOneShowHandler() {
  const form = document.querySelector(`.game__content`);
  const inputs = Array.from(form.querySelectorAll(`input[type='radio']`));
  const q1Inputs = Array.from(form.querySelectorAll(`input[name='question1']`));
  const q2Inputs = Array.from(form.querySelectorAll(`input[name='question2']`));

  let answer1 = false;
  let answer2 = false;
  console.log(answer1);
  console.log(answer2);
  inputs.map((input) => {
    input.checked = false;
  });

  q1Inputs.forEach((el) => {
    el.addEventListener(`change`, function q1Handler() {
      if (el.checked) {
        answer1 = true;

        if (answer2) {
          changeDisplay(gameTwoPage);
          gameTwoShowHandler();
          this.removeEventListener(`change`, q1Handler);
        }
      }
    });
  });

  q2Inputs.forEach((el) => {
    el.addEventListener(`change`, function q2Handler() {
      if (el.checked) {
        answer2 = true;

        if (answer1) {
          changeDisplay(gameTwoPage);
          gameTwoShowHandler();
          this.removeEventListener(`change`, q2Handler);
        }
      }
    });
  });

  backBtnListener();
}

function gameTwoShowHandler() {
  const inputs = document.querySelectorAll(`input[type='radio']`);

  inputs.forEach((input) => {
    input.checked = false;

    input.addEventListener(`change`, function handler() {
      if (input.checked) {
        changeDisplay(gameThreePage);
        gameThreeShowHandler();
        this.removeEventListener(`change`, handler);
      }
    });
  });

  backBtnListener();
}

function gameThreeShowHandler() {
  const options = document.querySelectorAll(`.game__option`);

  options.forEach((option) => {
    option.addEventListener(`click`, function handler() {
      changeDisplay(statsPage);
      backBtnListener();
      this.removeEventListener(`click`, handler);
    });
  });

  backBtnListener();
}

function backBtnListener() {
  const backBtn = document.querySelector(`.back`);

  backBtn.addEventListener(`click`, function btnClickHandler() {
    changeDisplay(introPage);
    showIntroHandler();
    this.removeEventListener(`click`, btnClickHandler);
  });
}

changeDisplay(introPage);
showIntroHandler();
