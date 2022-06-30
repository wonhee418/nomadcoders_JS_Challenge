const music = document.querySelector("#music");
const playBtn = document.querySelector(".playBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const preBtn = document.querySelector(".preBtn");
const nextBtn = document.querySelector(".nextBtn");
const musicArtist = document.querySelector(".musicDesc p:first-child");
const musicName = document.querySelector(".musicDesc p:last-child");
const musicThum = document.querySelector(".album");

const musicArr = ["music01.mp4", "music02.mp4", "music03.mp4"];
const musicNameArr = ["Born Singer", "Left and Right(feat.JungKook)", "드라마"];
const musicArtistArr = ["BTS", "Charlie Puth", "IU"];
const musicThumArr = ["thum01.jpg", "thum02.jpg", "thum03.jpg"];

// 음악 영역 초기셋팅
let i = 0;
const musicTotal = musicArr.length - 1;
const audio = new Audio(`../mp4/${musicArr[i]}`);
audio.autoplay = true;
handleMusicDesc();

// 타임체크
let time = 0;
let timerId;

function handleMusicDesc() {
  musicThum.src = `../img/${musicThumArr[i]}`;
  musicArtist.innerText = `${musicArtistArr[i]}`;
  musicName.innerText = `${musicNameArr[i]}`;
}

function musicPlay(e) {
  audio.play();
  handleMusicDesc();
}

function musicStop() {
  audio.pause();
}

function nextMusic() {
  time = 0;
  if (i < musicTotal) {
    i++;
  } else {
    i = 0;
  }
  audio.src = `../mp4/${musicArr[i]}`;
  handleMusicDesc();
  audio.play();
}

function prevMusic() {
  time = 0;
  if (i - 1 < 0) {
    i = musicTotal;
  } else {
    i--;
  }
  audio.src = `../mp4/${musicArr[i]}`;
  handleMusicDesc();
  audio.play();
}

function progressBar() {
  const progressbar = document.querySelector(".musicProgressBar");
  const duration = document.querySelector(".musicTime span:last-child");
  let currentSeconds = parseInt(audio.currentTime);
  const musicDuration = parseInt(audio.duration);
  let currentTimeBar = (currentSeconds / musicDuration) * 100;
  currentTimeBar = currentTimeBar.toFixed(2);
  progressbar.style.width = `${currentTimeBar}%`;

  let hours = Math.floor(musicDuration / 3600); // get hours
  let minutes = String(
    Math.floor((musicDuration - hours * 3600) / 60)
  ).padStart(2, "0"); // get minutes
  let seconds = String(musicDuration - hours * 3600 - minutes * 60).padStart(
    2,
    "0"
  ); //  get seconds
  // duration.innerText = `${minutes} : ${seconds}`;
  // currentTime();
}

// function currentTime() {
//   const currentTime = document.querySelector(".musicTime span:first-child");
//   time++;
//   let hour = parseInt(String(time / (60 * 60)));
//   let min = parseInt(String((time - hour * 60 * 60) / 60));
//   let sec = time % 60;
//   console.log(sec);
//   currentTime.innerText = `${String(min).padStart(2, "0")} : ${String(
//     sec
//   ).padStart(2, "0")}`;
// }

// //시계 시작 - 재귀호출로 반복실행
// function startClock() {
//   progressBar();
//   musicStop();
//   timerId = setTimeout(startClock, 1000);
// }

playBtn.addEventListener("click", musicPlay);
pauseBtn.addEventListener("click", musicStop);
preBtn.addEventListener("click", prevMusic);
nextBtn.addEventListener("click", nextMusic);
audio.addEventListener("ended", nextMusic);
setInterval(progressBar, 1000);
