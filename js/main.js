'use strict';

// Ajoute le CSS à la page (se fait à l'étape de build)
/* jshint -W064 */
GM_addStyle('__BETTER_NEWS_CSS__');

window.BetterNews = {
  version: '__BETTER_NEWS_VERSION__',

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
