// ==UserScript==
// @name         Boilerplate
// @description    A script to install all browser scripts for TOC
// @downloadURL    https://github.com/dghaynes/TamperMonkeyStarter/blob/main/Boilerplate.js?raw=1
// @updateURL      https://github.com/dghaynes/TamperMonkeyStarter/blob/main/Boilerplate.js?raw=1
// @version      2025-03-20
// @description  Starter code ...
// @author       @dghaynes
// @grant        none
// @include      *localhost*
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const h1 = document.querySelector('h1');
    h1.textContent = 'Goodnight derek and world!';

})();