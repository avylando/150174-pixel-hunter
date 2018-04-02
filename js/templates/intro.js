import {renderPageFromTemplate} from '../utils.js';

const template = `<div id="main" class="central__content">
<div id="intro" class="intro">
<h1 class="intro__asterisk">*</h1>
<p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>
</div>`;

const page = renderPageFromTemplate(template);

export default page;