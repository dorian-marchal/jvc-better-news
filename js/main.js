'use strict';

window.BetterNews = {
  version: '<better-news-version>',

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
