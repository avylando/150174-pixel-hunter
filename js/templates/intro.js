import {createContentFromString} from '../utils.js';

const template = `<div id="intro" class="intro">
<h1 class="intro__asterisk">*</h1>
<p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>`;

const page = createContentFromString(template);

export default () => {
  const clone = page.cloneNode(true);
  return clone;
};
