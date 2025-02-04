//↓↓↓↓↓↓↓↓↓↓↓↓YOUR CODE goes below here↓↓↓↓↓↓↓↓↓↓↓↓
class MIDIengine {
  constructor(input, output) {
    this.MIDIin = input;
    this.MIDIout = output;
    this.running = false;
  }
  enable(on_off) {
    this.running = on_off;
    if ((this.running = true)) {
      console.log(`The MIDI Engine is now on`);
    } else {
      console.log("The MIDIengine is now off");
    }
  }
  printInfo() {
    console.log(
      `The MIDIengine has an input of ${this.MIDIin}, and an output of ${this.MIDIout}.`
    );
  }
}

//↑↑↑↑↑↑↑↑↑↑YOUR CODE goes above here↑↑↑↑↑↑↑↑↑↑
//Do not edit below this comment!
const testMIDI = new MIDIengine("MAudio", "PreSonus Interface");
const testMIDI2 = new MIDIengine("OP-1", "MOTU");
