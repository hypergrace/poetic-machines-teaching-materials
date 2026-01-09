---
layout: tutorial.njk
weekNum: 0
title: Arturia BeatStep 
draft: true
---

# Arturia Beatstep

![picture of arturia beatstep](/assets/img/beatstep.png)

## Using the BeatStep with p5\*js

You should use [Chrome browser](https://www.google.com/chrome/)for these assignments. When you hit play on your sketch, you will need to allow the MIDI controller to work with your browser.

Here is a [template](https://editor.p5js.org/garrett.laroy.johnson/sketches/5Hxx54Eg1) you can use. It contains additional code that allows p5 to communicate with the Beatstep. You need to duplicate this template to make your own work.

When successfully connect, you will receive these messages in the console:

`"" Arturia BeatStep`
`WebMidi enabled!`
`---`

`Inputs Ports:`  
`0: Arturia BeatStep`
`connected to Arturia BeatStep`

If you don't see this message, make sure the controller is plugged in, you are using Chrome, and you have opened from the template mentioned earlier.

If you see this message but you do not seem to have any input to the sketch, make sure your Beatstep is in CNTRL mode: On your Controller, click "CNTRL/SEQ" until the button is red. Now turn the knobs on the controller; the changes should appear in the Canvas.

You will find other demo files here: [p5.beatstep repository](https://github.com/garrett-laroy-johnson/p5.beatstep).
