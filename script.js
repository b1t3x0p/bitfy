let songs = ["songs/song1.mp3", "songs/song2.mp3", "songs/song3.mp3"];
let currentSongIndex = 0;
let audio = document.getElementById("audioPlayer");

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    document.getElementById("audioSource").src = songs[currentSongIndex];
    audio.load();
    audio.play();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    document.getElementById("audioSource").src = songs[currentSongIndex];
    audio.load();
    audio.play();
}
