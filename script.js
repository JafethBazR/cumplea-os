document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audio");
    var playpauseBtn = document.getElementById("playpause-btn");

    playpauseBtn.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            playpauseBtn.innerHTML = "&#10074;&#10074;"; // Cambiar el ícono a pausa
        } else {
            audio.pause();
            playpauseBtn.innerHTML = "&#9658;"; // Cambiar el ícono a reproducir
        }
    });
});
