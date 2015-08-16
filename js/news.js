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

      /**
       * Ajoute les différents boutons de vote à la news
       */
      addVoteButtons: function() {
        var imgWrapper = this.el.querySelector('.mask-img');

        var buttonsWrapper = document.createElement('div');
        buttonsWrapper.classList.add('news-vote-wrapper');

        var createVoteButton = function(specificClass, buttonText, clickListener) {
          var voteButton = document.createElement('button');
          voteButton.classList.add('news-vote', specificClass);
          voteButton.textContent = buttonText;
          voteButton.addEventListener('click', clickListener, false);

          buttonsWrapper.appendChild(voteButton);
          return voteButton;
        };

        createVoteButton('vote-more', '+1', function() {
          console.log('+1');
        });
        createVoteButton('vote-less', '-1', function() {
          console.log('-1');
        });

        imgWrapper.appendChild(buttonsWrapper);
      },
  };
})();
