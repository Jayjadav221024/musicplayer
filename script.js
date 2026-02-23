let progess = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlicon = document.getElementById('ctrlicon');

song.onloadedmetadata = function () {
    progess.max = song.duration;
    progess.value = song.currentTime;

    console.log("Duration:", song.duration);
    console.log("Range Max:", progess.max);
};
function playpause() {
   if(ctrlicon.classList.contains("fa-pause")){
    song.pause();
    ctrlicon.classList.remove("fa-pause")
    ctrlicon.classList.add("fa-play")
   }else{
    song.play();
     ctrlicon.classList.add("fa-pause")
    ctrlicon.classList.remove("fa-play")
   } 
}
function leftplay() {
    song.currentTime -= 2.5;   // move audio
    progess.value = song.currentTime; // update slider
}
function rightplay() {
    song.currentTime += 2.5;   // move audio
    progess.value = song.currentTime; // update slider
}
if(song.play()){
    setInterval(() => {
        progess.value = song.currentTime;
    },500);
}

progess.onchange = function () {
    song.play();
    song.currentTime = progess.value;
    ctrlicon.classList.add("fa-pause")
    ctrlicon.classList.remove("fa-play")
}