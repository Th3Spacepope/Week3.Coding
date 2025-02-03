//↓↓↓↓↓↓↓↓↓↓↓↓YOUR CODE goes below here↓↓↓↓↓↓↓↓↓↓↓↓
class MIDIengine {
  constructor(input, output) {
    MIDIin = input;
    MIDIout = output;
    running = false;
  }
  enable(on_off) {
    this.running = on_off;
    console.log(`The MIDI Engine is now on`);
  }
}

//↑↑↑↑↑↑↑↑↑↑YOUR CODE goes above here↑↑↑↑↑↑↑↑↑↑
//Do not edit below this comment!
const testMIDI = new MIDIengine("MAudio", "PreSonus Interface");
const testMIDI2 = new MIDIengine("OP-1", "MOTU");
