const scale = [ 0, 2, 4, 5, 7, 9, 11 ];

var osc;

function getNote(baseNote, index)
{
    return baseNote + scale[index];
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

beat(getNote(60, 0));
quiet();
beat(getNote(60, 1));
beat(getNote(60, 0));

quiet(); 

beat(getNote(60, 0));
quiet();
beat(getNote(60, 1));
beat(getNote(60, 0));

quiet(); 

beat(getNote(60, 2));
quiet();
beat(getNote(60, 3));
beat(getNote(60, 2)); 

quiet(); 

beat(getNote(60, 2));
quiet();
beat(getNote(60, 3));
beat(getNote(60, 2)); 

quiet(); 

beat(getNote(72, 0));
quiet();
beat(getNote(72, 1));
beat(getNote(72, 0));

quiet(); 

beat(getNote(72, 0));
quiet();
beat(getNote(72, 1));
beat(getNote(72, 0));

quiet(); 

beat(getNote(60, 2));
quiet();
beat(getNote(60, 1));
beat(getNote(60, 0));

quiet(); 

beat(getNote(60, 2));
quiet();
beat(getNote(60, 1));
beat(getNote(60, 0));

System.Sleep(1500);

Stk.Stop();
Stk.Shutdown();


