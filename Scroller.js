// adapted from https://stackoverflow.com/questions/27496465/how-can-i-play-sound-in-a-chrome-extension#27496510
// audio credits to WrathfulBeatz, 2kw Diesel Generator Sound *1 Hour* [Whitenoise / Background], https://www.youtube.com/watch?v=t8UYI1QqjxQ
let url = chrome.runtime.getURL('generator.mp3');
let audioElement = new Audio(url);

window.addEventListener('scroll', function() {
	audioElement.volume = 1;
	audioElement.play();
});
