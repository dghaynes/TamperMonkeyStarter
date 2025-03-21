// ==UserScript==
// @name         Boilerplate
// @description    A script to install all browser scripts for TOC
// @downloadURL    https://github.com/dghaynes/TamperMonkeyStarter/blob/main/Boilerplate.js?raw=1
// @updateURL      https://github.com/dghaynes/TamperMonkeyStarter/blob/main/Boilerplate.js?raw=1
// @version      0.1.00
// @description  Starter code ...
// @author       @dghaynes
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.xmlHttpRequest
// @include      *localhost*
// ==/UserScript==

(function() {

    'use strict';

    // Your code here...
    const h1 = document.querySelector('h1');
    h1.textContent = 'Goodnight derek and world!';

})();