var audioContext = new AudioContext();

var whiteGain = new GainNode(audioContext, { gain: 0 });
var pinkGain = new GainNode(audioContext, { gain: 0 });
var brownGain = new GainNode(audioContext, { gain: 0 });

function addModule(moduleUrl) {
    return fetch(moduleUrl)
        .then(response => response.text())
        .then(text => {
            const blob = new Blob([text], { type: "application/javascript; charset=utf-8" });
            const url = URL.createObjectURL(blob);
            return audioContext.audioWorklet.addModule(url)
                .finally(() => URL.revokeObjectURL(url));
        });
}

addModule("js/white-noise.js").then(() => {
    var whiteNoise = new AudioWorkletNode(audioContext, 'white-noise');
    whiteNoise.connect(whiteGain);
    whiteGain.connect(audioContext.destination);
});

addModule("js/pink-noise.js").then(() => {
    var pinkNoise = new AudioWorkletNode(audioContext, 'pink-noise');
    pinkNoise.connect(pinkGain);
    pinkGain.connect(audioContext.destination);
});

addModule("js/brown-noise.js").then(() => {
    var brownNoise = new AudioWorkletNode(audioContext, 'brown-noise');
    brownNoise.connect(brownGain);
    brownGain.connect(audioContext.destination);
});
