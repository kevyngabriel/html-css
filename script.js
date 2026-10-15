/* Convite Mathias 3 Anos — script.js
   Só melhora a experiência: sem JS o vídeo usa os controles nativos
   e todo o conteúdo continua visível. */
(function () {
  var video = document.getElementById('video');
  var play = document.getElementById('play');
  var label = document.getElementById('playLabel');

  if (video && play) {
    // troca os controles nativos pelo botão grande de play (estilo VSL)
    video.controls = false;
    play.hidden = false;

    play.addEventListener('click', function () {
      play.hidden = true;
      video.controls = true;
      video.muted = false;
      var p = video.play();
      if (p && p.catch) {
        p.catch(function () {
          // alguns navegadores só liberam o play com som após interação; tenta sem som
          video.muted = true;
          video.play().catch(function () { play.hidden = false; });
        });
      }
    });

    video.addEventListener('ended', function () {
      video.controls = false;
      play.hidden = false;
      if (label) label.textContent = 'Assistir de novo';
      try { video.currentTime = 0; } catch (e) {}
    });
  }

})();
