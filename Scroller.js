// adapted from https://stackoverflow.com/questions/27496465/how-can-i-play-sound-in-a-chrome-extension#27496510

let url = chrome.runtime.getURL('generator.mp3');
let audioElement = new Audio(url);

// while (True) {
	window.addEventListener('scroll', function() {
		audioElement.volume = 1;
		audioElement.play();
	});
// }
