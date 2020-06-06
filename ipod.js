// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];
var play_button = document.getElementById("play-button");
let curSong = 6;

function init() {
	for (let i = 0; i < 6; i++) 
    volLevels[i] = document.getElementById("vl"+i.toString());
  for (let i = 0; i < 3; i++) 
    volLevels[i].style.backgroundColor = "#9f5cc4";
  for (let i = 0; i < 10; i++)
    if (tracklist[i] == document.getElementById("player-song-name").innerHTML)
      curSong = i;
};

function volUp() {
  if (volLevels[5].style.backgroundColor)
    return;
    
  for (let i = 0; i < 6; i++)
    if (!volLevels[i].style.backgroundColor) {
      volLevels[i].style.backgroundColor = "#9f5cc4";
      break;
    }
}

function volDown() {
	if (!volLevels[0].style.backgroundColor)
    return;
    
  for (let i = 5; i >= 0; i--)
    if (volLevels[i].style.backgroundColor) {
      volLevels[i].style.backgroundColor = null;
      break;
    }
}

function switchPlay() {
  if (play_button.innerHTML == `<i class="material-icons">play_arrow</i>`)
    play_button.innerHTML = `<i class="material-icons">pause</i>`;
  else
    play_button.innerHTML = `<i class="material-icons">play_arrow</i>`;
}

function nextSong() {
  curSong = (curSong + 1) % 10;
  time = 0;
  document.getElementById("time-elapsed").innerHTML = secondsToMs(time);
  document.getElementById("player-song-name").innerHTML = tracklist[curSong];
}

function prevSong() {
	curSong = (curSong + 9) % 10;
  time = 0;
  document.getElementById("time-elapsed").innerHTML = secondsToMs(time);
  document.getElementById("player-song-name").innerHTML = tracklist[curSong];
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

let time = 0;
setInterval(calculateTime, 1000);
function calculateTime() {
  if (time == 180) {
    nextSong();
  } else if (play_button.innerHTML == `<i class="material-icons">pause</i>`) {
    time++;
    document.getElementById("time-elapsed").innerHTML = secondsToMs(time);
  }
}


init();