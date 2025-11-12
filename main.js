import Reveal from './node_modules/reveal.js/dist/reveal.esm.js';
import Markdown from './node_modules/reveal.js/plugin/markdown/markdown.esm.js';

import './node_modules/reveal.js/dist/reveal.css';
import './node_modules/reveal.js/dist/theme/black.css';

let deck = new Reveal({
   plugins: [ Markdown ]
});

deck.initialize({ hash: true });
