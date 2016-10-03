Stk.Initialise();
Stk.SetRawPath('D:/samples/Music/STKEngine3/rawwaves/');
Stk.SetTempo(120, 12);
Stk.Start();

var osc = new Stk.MoogOsc();
osc.FilterCutoff = 0.7;
osc.FilterQ = 0.55;
osc.ReverbMix = 0.2;

osc.NoteOn(60, 0.7);
System.WaitTick();
osc.NoteOff(60, 0.3);
System.WaitTick();

System.Sleep(1500);

Stk.Stop();
Stk.Shutdown();


