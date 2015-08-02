// ==UserScript==
// @name        JVC Better News
// @description JVC Better News est une extension permettant de noter et masquer les news inutiles sur jeuxvideo.com
// @author      Spixel_
// @namespace   http://spawnkill.fr
// @include     http://*.jeuxvideo.com/*
// @include     https://*.jeuxvideo.com/*
// @version     0.1.0
// @grant       GM_xmlhttpRequest
// @grant       GM_addStyle
// @run-at document-start
// ==/UserScript==

'use strict';

window.BetterNews = {
  version: '0.1.0',

  init: function() {
    console.log('Initialisation de Better News...');
  },

  initWhenReady: function() {
    var runInIframe = window.top !== window.self;

    // On ne charge pas le script dans les iframes
    if (!runInIframe) {

      // document.ready ne fonctionne pas sur GM at document-start
      // Pour vérifier que le DOM est chargé, on vérifie que la fiv .stats est présente.
      var checkDomReady = setInterval(function() {

        if (document.getElementsByClassName('stats').length > 0) {
          clearInterval(checkDomReady);
          window.BetterNews.init();
        }
      }, 300);
    }
  },
};

window.BetterNews.initWhenReady();
