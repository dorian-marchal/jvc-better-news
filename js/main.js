(function() {
  'use strict';

  // Ajoute le CSS à la page (se fait au build avec gulp)
  /* jshint -W064 */
  GM_addStyle('__BETTER_NEWS_CSS__');

  // Inclut les scripts annexes
  window.modules = {};
  // __BETTER_NEWS_INCLUDE__ js/utils.js
  var Utils = window.modules.Utils;
  // __BETTER_NEWS_INCLUDE__ js/news.js
  var News = window.modules.News;

  window.BetterNews = {
    version: '__BETTER_NEWS_VERSION__',

    init: function() {
      this.detectPage();
      console.log('Initialisation de Better News...');

      // On ne lance le script que sur la page des news
      if(!this.onNewsPage && !this.onNewsListPage) {
        return;
      }

      if (this.onNewsPage) {
        var news = News.loadFromCurrentPage();
        news.addVoteButtons();
      }
    },

    onNewsPage: false,
    onNewsListPage: false,

    detectPage: function() {
      this.onNewsListPage = location.href.match(/^https?:\/\/www\.jeuxvideo\.com\/toutes-les-news/);
      this.onNewsPage = location.href.match(/^https?:\/\/www\.jeuxvideo\.com\/news\/\d+/);
    },

    initWhenReady: function() {
      var that = this;
      var runInIframe = window.top !== window.self;

      // On ne charge pas le script dans les iframes
      if (!runInIframe) {

        // document.ready ne fonctionne pas sur GM at document-start
        // Pour vérifier que le DOM est chargé, on vérifie que la fiv .stats est présente.
        var checkDomReady = setInterval(function() {

          if (document.getElementsByClassName('stats').length > 0) {
            clearInterval(checkDomReady);
            that.init();
          }
        }, 300);
      }
    },
  };

  window.BetterNews.initWhenReady();

})();
