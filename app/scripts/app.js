(function (document) {
  var emoji = window.setInterval(function () {
    if (window.getMeAnEmoji) {
      window.clearInterval(emoji);
      document.querySelector('#emojiView').start();
    }
  }, 200);
})(document);
