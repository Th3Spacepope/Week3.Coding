
# Coding 3 | MUST 4707

## JavaScript Class Creation: MIDIengine

In this assignment, you will develop a JavaScript class named `MIDIengine`. This class will represent a fictional MIDI engine with input and output functionalities. Your task is to define the class in the `script.js` file and ensure it meets the specified requirements.


### Accessing the Assignment Materials
1. Navigate to the assignment repository in the course [GitHub organization](https://github.com/MUST4707)
2. Click on the green `Use this template` button in the top right corner.
3. Choose 'Create a new repository'
4. Set up the repo name under your account.
5. Click `Create repository`

*You should now be at your own personal repository with the assignment materials.*
6. Click on the green `<> Code` button and select `Open with GitHub Desktop

*You should now be in your GitHub Desktop application that has a pop up window called 'Clone a Repository'*

7. Make sure the local path is where you would like to save this repo.
8. Hit `Clone`
9. You should be able to now click the `Open in Visual Studio Code ` button or navigate to your files and open the folder in Visual Studio Code.
10. After you finish working on your project please return to GitHub Desktop and
    1. Commit your changes to the `master` (don't to add a summary description)
    2. Click on the `Push Orgin` to sync your commit with the GitHub cloud.


### Objectives
Define a new class prototype called `MIDIengine`

Your `MIDIengine` class should include:

1. **Constructor**:
   - The constructor should take two parameters:
        1. `input`
        2. `output`.
   - Initialize three properties:
        1. `MIDIin` (set to `input`)
        2. `MIDIout` (set to `output`)
        3. `running` (initially set to `false`).

2. **Methods**:
   1. `enable(on_off)`: A method to turn the MIDI engine on or off.
      - This method takes a boolean parameter `on_off`.
      - It sets the `this.running` property to the value of `on_off`.
      - It logs to the console a message indicating whether the MIDI Engine is on or off.
        - The message needs to say exactly `The MIDI Engine is now on.` When `this.running` is `true`.
        - or the message needs to say exactly `The MIDI Engine is now off.` When `this.running` is `false`.
   2. `printInfo()`: A method to print information about the MIDI engine.
      - It logs the input and output of the MIDIEngine. The message needs to say exactly: 
      - `The MIDIEngine has an input of ` (whatever this.MIDIin is) `and an output of` (whatever this.MIDIout is)`.`
      - `The MIDIEngine has an input of Sensel Morph and an output of Digital Performer.`

3. Save your changes and commit your changes in GitHub Desktop.

### Testing (Using VS Code and your Browser)
1. Make sure you have saved all of your files, then click on the `index.html` file.
2. Click on "Go Live"
3. Once the browser window opens with the assignment webpage, open the Javascript Console
4. Run the following test to make sure there are no errors.
    1. Test 1: `testMIDI instanceof MIDIengine`
        - the result should be `true`
    2. Test 2:`testMIDI2 instanceof MIDIengine`
        - result: `true`
    3. Test 3:`MIDIengine.length`
        - result: `'2'` (this is the number of parameters MIDIengine should take to make a new instance)
    4. Test 4:`testMIDI.hasOwnProperty("MIDIin")`
        - result: `true`
    5. Test 5:`testMIDI.hasOwnProperty("MIDIout")`
        - result: `true`
    6. Test 6:`testMIDI.hasOwnProperty("running")`
        - result: `true`
    7. Test 7: `typeof testMIDI.enable`
       - result: `function`
    8. Test 8: `testMIDI.enable(true)`
       - result: `The MIDI Engine is now on.`
    9. Test 9: `testMIDI !== testMIDI2`
        - result: `true.` 



### Submission Steps
1. Upload your `script.js` to the Canvas assignment.
