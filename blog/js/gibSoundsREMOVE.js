$(function(){
	
var section = 0;
var stringSection;

// Initialise Gibber
var bpmSet = 120; 
var bpmInterval = (60/bpmSet)*1000;

Gibber.init();
Clock.bpm = bpmSet;

//FX
r = Reverb({ roomSize: Add( .75, Sine( .05, .245 )._ ) })

var looper =setInterval(function(){
	
	if(section==88) {
		section = 24;
		runGibber(section);
	} else {
		runGibber(section)		
	}
	section++;
}, bpmInterval);

 $('#inClickBool').change(function() {
if($('#inClickBool').is(':checked'))
		{
			$("#inputClicked").text("MUSIC PLAYED  ");
			section = 8;
			
		} else {
			
			$("#inputClicked").text("MUSIC STOPPED");
			section=120;
			
			
			
			
		}
 });

	


function runGibber(sectionNum) { 




 switch(sectionNum)
{
	case 0:
	Gibber.clear();

	h = EDrums('****');
	break;
	
	case 8:
	Gibber.clear();
	h = EDrums('****');
	aa = Triangle({
		attack:ms(0.5),
		decay:1/8
	})
	
	r = Reverb({ roomSize: Add( .75, Sine( .1, .3 )._ ) })
	aa.frequency
	.seq([130.81,155.56,196, 233.08], [1/32,1/32,1/32,1/16])
	.amp(.5)
	.fx.add(r)

	break;

	case 24:
	Gibber.clear();
	
	aa = Triangle({
		attack:ms(0.5),
		decay:1/8
	})
	
	r = Reverb({ roomSize: Add( .75, Sine( .1, .3 )._ ) })
	aa.frequency
	.seq([130.81,155.56,196, 233.08], [1/32,1/32,1/32,1/16])
	.amp(.5)
	.fx.add(r)
	h = EDrums('*-*-*-*-')
	.amp(.5);
	bloom = Sine({attack: ms(500), decay: 1/8})
	.frequency.seq([50, 75], 1/8)
	.amp(.6)
	
	d2 = EDrums('x.x.').amp = 1;
	

	
	r2 = Reverb({ roomSize: Add( .6, Sine( .1, .275 )._ ) })
	pp = Pluck({ maxVoices: 3})
	.play([600, 600, 800, 400, 800], [1/8, 1/8, 1/4, 1/4, 1/4] )
	.fx.add(r2)
	.amp(.8);
	
	
	break;
	
	case 32:
	pp.amp(0); 
	break;
	
	case 40:
	pp.amp(.8);
	break;
	
	case 47:
	pp.amp(0);
	break;
	
	case 56:
	pp.amp(.8);

	break;
	
	case 64:
	pp.amp(0);
	break;
	
	case 72:
	pp.amp(.8);
	break;
	
	case 79:
	pp.amp(0);
	break;
	
	case 120:	
	Gibber.clear();

	break;	
	

}



}

function introSong() {
	
	
	s = Synth({ maxVoices:2, waveform:'Noise', attack:ms(1), decay:ms(1) })

	f = FM({ maxVoices:2 })
f.chord( [0,3,5,7])
.note.seq( [800, 600, 880, 480], 1/2)
 .amp(.1)
 .fx.add(Delay())
 .fx.add(Reverb())
 .pan.seq( [-1,1, -1, 1])
.pitch = Mouse.Y

aa = Sine({
		attack:ms(0.5),
		decay:1/8
})
aa.frequency
	.seq([400,300,440, 240], [1/2,1/4,1/16,1/16])
	.amp(.5)
	.fx.add(r)


b = Sine()
   .note.seq( [200, 150, 220, 120], [1/4,1/2,1/4,1/8]) 
   .amp(.6)

   
   
   

d = EDrums('x.x.')
	d.amp = 1;
	
d3 = EDrums('.o.o')
	
	d3.snare.snappy(1)
	d3.amp = 1;
	d3.fx.add(Distortion(1))
	


	sampler = Sampler().record( n, 1 )
    .note.seq( [1,2,1,2].rnd(), 1/4 )
    .fx.add( Delay(1/64))



d2 = EDrums('********')
	.amp.seq([1,.5,1,.4])
	.pan.seq([.4,-.3,.3,-.35] )
	.add.fx(Reverb())
	
}




  
});