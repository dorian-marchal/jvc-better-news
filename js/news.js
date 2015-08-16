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

      addVoteButtons: function() {
        var imgWrapper = this.el.querySelector('.mask-img');

        var buttonsWrapper = document.createElement('div');
        buttonsWrapper.classList.add('news-vote-wrapper');

        var createVoteButton = function(specificClass) {
          var voteButton = document.createElement('button');
          voteButton.classList.add('news-vote', specificClass);
          buttonsWrapper.appendChild(voteButton);
          return voteButton;
        };

        createVoteButton('vote-less');
        createVoteButton('vote-more');

        imgWrapper.appendChild(buttonsWrapper);
      },
  };
})();
