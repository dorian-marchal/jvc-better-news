(function() {
  'use strict';

  window.modules.News = function() {
  };

  /**
   * Génère un objet news à partir des infos sur la page courante
   */
  window.modules.News.loadFromCurrentPage = function() {
    var news = new window.modules.News();
    news.url = location.href;
    news.el = document.getElementsByTagName('article')[0];
    return news;
  };

  window.modules.News.prototype = {
      constructor: window.modules.News,

      url: null,
      el: null,
  };
})();
