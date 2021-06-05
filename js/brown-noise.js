class BrownNoise extends AudioWorkletProcessor {
  constructor() {
    super();
  }
  process(inputs, outputs) {
    let output = outputs[0];
    let outputChannel0 = output[0];
    let lastOut = 0.0;
    for (let channel = 0; channel < outputChannel0.length; channel++) {
      var white = Math.random() * 2 - 1;
      outputChannel0[channel] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = outputChannel0[channel];
      outputChannel0[channel] *= 3.5; // (roughly) compensate for gain
    }
    return true;
  }
}
registerProcessor('brown-noise', BrownNoise);
