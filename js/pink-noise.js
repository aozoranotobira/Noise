class PinkNoise extends AudioWorkletProcessor {
  constructor() {
    super();
  }
  process(inputs, outputs) {
    let output = outputs[0];
    let outputChannel0 = output[0];
    for (let channel = 0; channel < outputChannel0.length; channel++) {
      var b0, b1, b2, b3, b4, b5, b6;
      b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0;
      var white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      outputChannel0[channel] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      outputChannel0[channel] *= 0.11; // (roughly) compensate for gain
      b6 = white * 0.115926;
    }
    return true;
  }
}
registerProcessor('pink-noise', PinkNoise);
