var osc;

Stk.Initialise();
Stk.SetTempo(120, 12);
Stk.Start();

Stk.SetRawPath('D:\samples\Music\STKEngine3\samples');

var osc = new Stk.SamplerOsc();
osc.Filename = 'BA Power.wav';

Stk.Stop();
Stk.Shutdown();
