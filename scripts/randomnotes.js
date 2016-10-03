const scale = [ 0, 2, 4, 5, 7, 9, 11 ];

var osc;

function getRandomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNote(baseNote, index)
{
    return baseNote + scale[index];
}

function getRandomNote(baseNote)
{
    return getNote(baseNote, getRandomInt(0, 6));
}

function beat(note)
{
    osc.NoteOn(note, 0.7);
    System.WaitTick();
    osc.NoteOff(note, 0.3);
    System.WaitTick();
    System.WaitTick();
}

function quiet()
{
    System.WaitTick();
    System.WaitTick();
    System.WaitTick();
}

Stk.Initialise();
Stk.SetTempo(100, 12);
Stk.Start();

osc = new Stk.DuoSynth();
osc.SawGain = 0.5;
osc.SawFine = 10;
osc.SquareGain = 0.5;
osc.SquareFine = -10;
osc.FilterCutoff = 0.7;
osc.FilterQ = 0.55;
osc.EnvSustain = 0.1;
osc.EnvRelease = 0.1;
osc.ReverbMix = 0.2;

for (i = 0; i < 16; i++)
{
    beat(getRandomNote(60));
    if (i >= 12)
       beat(getRandomNote(60));
    else    
       quiet();
    if (i >= 8)
       beat(getRandomNote(60));
    else
        quiet();
    if (i >= 4)
        beat(getRandomNote(60));
    else
        quiet();

    quiet();
} 

System.Sleep(1500);

Stk.Stop();
Stk.Shutdown();


