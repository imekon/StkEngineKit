const STK_OSC_TYPE_NONE = 0;
const STK_OSC_TYPE_SAW = 1;
const STK_OSC_TYPE_SQUARE = 2;
const STK_OSC_TYPE_SINE = 3;
const STK_OSC_TYPE_NOISE = 4;

const STK_GLOBAL_REVERB_MIX = 1;
const STK_GLOBAL_REVERB_ROOMSIZE = 2;
const STK_GLOBAL_REVERB_DAMPING = 3;
const STK_GLOBAL_REVERB_WIDTH = 4;
const STK_GLOBAL_REVERB_MODE = 5;

var osc;

const baseNote = 60;
const scale = [ 0, 2, 4, 5, 7, 9, 11 ];

function getNote(index)
{
    return baseNote + scale[index];
}

function bar(note)
{
    osc.NoteOn(note, 0.7);
    System.WaitTick();
    System.WaitTick();

    osc.NoteOff(note, 0.3);
    System.WaitTick();
}

function quiet()
{
    System.WaitTick();
    System.WaitTick();
    System.WaitTick();
}

Stk.Initialise();
Stk.Start();
Stk.SetTempo(120.0, 12);

System.SetGlobal(2, 0.9);

osc = new Stk.MultiOsc();

osc.Osc1Type = STK_OSC_TYPE_SAW;
osc.Osc1Gain = 0.4;
osc.Osc1Fine = -20;

osc.Osc2Type = STK_OSC_TYPE_SAW;
osc.Osc2Gain = 0.4;
osc.Osc2Fine = 0;

osc.Osc3Type = STK_OSC_TYPE_SAW;
osc.Osc3Gain = 0.4;
osc.Osc3Fine = 20;

osc.FilterCutoff = 0.5;
osc.FilterQ = 0.55;

osc.EnvAttack = 0.05;
osc.EndDecay = 0.3;
osc.EnvSustain = 0.3;
osc.EnvRelease = 0.1;

osc.Panning = 0.5;
osc.ReverbMix = 0.5; 

bar(getNote(0));
bar(getNote(1));
bar(getNote(0));
bar(getNote(1));

quiet();

bar(getNote(2));
bar(getNote(3));
bar(getNote(2));
bar(getNote(3));

quiet();

bar(getNote(0));
bar(getNote(1));
bar(getNote(0));
bar(getNote(1));

quiet();

while(Controls.GetFlag(0))
{
bar(getNote(2));
bar(getNote(3));
bar(getNote(2));
bar(getNote(3));

bar(getNote(4));
bar(getNote(5));
bar(getNote(4));
bar(getNote(5));

bar(getNote(2));
bar(getNote(3));
bar(getNote(2));
bar(getNote(3));

bar(getNote(0));
bar(getNote(1));
bar(getNote(0));
bar(getNote(1));
}

System.Sleep(2000);

Stk.Stop();
Stk.Shutdown();


