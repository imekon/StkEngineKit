Stk.Initialise();
Stk.SetRawPath('D:/samples/Music/STKEngine3/rawwaves/');
Stk.SetTempo(120, 12);
Stk.Start();

var osc = new Stk.BeeThreeOsc();
osc.FilterCutoff = 0.9;
osc.FilterQ = 0.55;

osc.EnvAttack = 0.05;
osc.EndDecay = 0.3;
osc.EnvSustain = 0.3;
osc.EnvRelease = 0.1;

osc.Panning = 0.5;
osc.ReverbMix = 0.7;

osc.NoteOn(36, 0.7);
System.WaitTick();
osc.NoteOff(36, 0.3);
System.WaitTick();

System.Sleep(1500);

Stk.Stop();
Stk.Shutdown();


