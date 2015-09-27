(function () {
  var app = document.querySelector('#app');
  document.addEventListener('emoji-ready', function () {
    var view = document.querySelector('#emojiView').start();
  });
})(document);
