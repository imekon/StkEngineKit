Stk.Initialise();
Stk.SetTempo(120, 12);
Stk.Start();

var osc = new Stk.MultiOsc();
osc.Osc1Gain = 0.7;
osc.Osc1Fine = 10;
osc.Osc2Gain = 0.7;
osc.Osc2Fine = -10;
osc.FilterCutoff = 0.7;
osc.FilterQ = 0.55;
//osc.EnvSustain = 0.1;
//osc.EnvRelease = 0.1;
osc.ReverbMix = 0.2;

osc.NoteOn(60, 0.7);
System.WaitTick();
osc.NoteOff(60, 0.3);
Stk.WaitTick();

Stk.Stop();
Stk.Shutdown();


