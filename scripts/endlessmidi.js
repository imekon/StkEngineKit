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

MIDI.Initialise();

var count = MIDI.GetOutputCount();

System.Log('MIDI output count: ' + count);

for(var device = 0; device < count; device++)
{
    System.Log('MIDI device(' + device + '): ' + MIDI.GetOutputName(device));
}

var scale = [ 0, 2, 4, 5, 7, 9, 11 ];

if (MIDI.Open(2))
{
    while(true)
    {
        var note = getRandomNote(48);
        
        MIDI.Send(0x90, note, 96);
        System.Sleep(350);
        MIDI.Send(0x80, note, 0);
        System.Sleep(150);
    }
    MIDI.Close();
}

MIDI.Shutdown();
