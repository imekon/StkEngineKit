const STK_OSC_TYPE_NONE = 0;
const STK_OSC_TYPE_SAW = 1;
const STK_OSC_TYPE_SQUARE = 2;
const STK_OSC_TYPE_SINE = 3;
const STK_OSC_TYPE_NOISE = 4;

const baseNote = 48;
const scale = [ 0, 2, 4, 5, 7, 9, 11 ];

const tune = [  0,  2,  5, 1, -1,  3, -1, 1 ];
const bass = [ -1,  0, -1, 0, -1,  0, -1, 0 ];
const chords = [ 0, 1, 3, 4 ];

function getNote(note)
{
    octave = Math.floor(note / 7);
    note = note % 7;
    return scale[note] + octave * 12;    
}

Stk.Initialise();
Stk.Start();
Stk.SetTempo(100.0, 8);

var osc = new Stk.MultiOsc();

osc.Osc1Type = STK_OSC_TYPE_SQUARE;
osc.Osc1Gain = 0.4;
osc.Osc1Fine = -10;

osc.Osc2Type = STK_OSC_TYPE_SQUARE;
osc.Osc2Gain = 0.4;
osc.Osc2Fine = 0;

osc.Osc3Type = STK_OSC_TYPE_SQUARE;
osc.Osc3Gain = 0.4;
osc.Osc3Fine = 10;

osc.FilterCutoff = 0.9;
osc.FilterQ = 0.55;

osc.EnvAttack = 0.05;
osc.EndDecay = 0.3;
osc.EnvSustain = 0.3;
osc.EnvRelease = 0.1;

osc.Panning = 0.1;
osc.ReverbMix = 0.7;

var osc2 = new Stk.MultiOsc();
osc2.Osc1Type = STK_OSC_TYPE_SAW;
osc2.Osc2Type = STK_OSC_TYPE_NONE;
osc2.Osc3Type = STK_OSC_TYPE_NONE;
osc2.EnvAttack = 0.05;
osc2.EndDecay = 0.3;
osc2.EnvSustain = 0.3;
osc2.EnvRelease = 0.1;
osc2.FilterCutoff = 0.1;
osc2.Panning = 0.9; 
osc2.ReverbMix = 0.3;

var chorus = new Stk.ChorusEffect();
chorus.Mix = 0.75;
chorus.ModDepth = 0.5;
chorus.ModFreq = 0.1;

osc.AddEffect(chorus);

Controls.SetFlag(0, true);

while(Controls.GetFlag(0))
{
    for(var bar = 0; bar < 4; bar++)
    {
        var chord = chords[bar];
        for(var i = 0; i < 8; i++)
        {
            var note = tune[i];
    
            if (note != -1)
                note = baseNote + getNote(note + chord);
    
            var note2 = bass[i];
    
            if (note2 != -1)
                note2 = baseNote + getNote(note2 + chord) - 12;

            if (note != -1)        
                osc.NoteOn(note, 0.7);
        
            if (note2 != -1)
                osc2.NoteOn(note2, 0.7);
        
            System.WaitTick();

            if (note != -1)
                osc.NoteOff(note, 0.3);
    
            if (note2 != -1)
                osc2.NoteOff(note2, 0.3);

            System.WaitTick(); 
        }
    }
}

System.Sleep(2000);

Stk.Stop();
Stk.Shutdown();


