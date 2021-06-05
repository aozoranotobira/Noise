class WhiteNoise extends AudioWorkletProcessor {
  constructor(options) {
    super(options);
  }
  process(inputs, outputs) {
    let output = outputs[0];
    let outputChannel0 = output[0];
    for (let channel = 0; channel < outputChannel0.length; channel++) {
      outputChannel0[channel] = (Math.random() * 2 - 1);
    }
    return true;
  }
}
registerProcessor('white-noise', WhiteNoise);
