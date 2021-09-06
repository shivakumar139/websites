let pauseBtn = document.getElementById("pauseBtn");
let playBtn = document.getElementById("playBtn");
let audioPlayer = document.getElementById("audioPlayer");
// ;
//play button
let i = 1;
audioPlayer.currentTime = i++;
playBtn.onclick = ()=>{
    audioPlayer.play();
}
// pause btn 
pauseBtn.onclick = () =>{
    audioPlayer.pause();
}
// on volume change
audioPlayer.onvolumechange = ()=>{
    console.log("volume changed");
}

// on duration changed
audioPlayer.ondurationchange = ()=>{
    console.log("duration changed");
}

//display current time
console.log(audioPlayer.currentTime);

//on time update
audioPlayer.timeupdate = ()=>{
    audioPlayer.currentTime = i++;
}

//on seeking  seeking means
audioPlayer.onseeking = ()=>{
    console.log(audioPlayer.duration);
}
audioPlayer.onratechange = ()=>{
    console.log("1");
}
