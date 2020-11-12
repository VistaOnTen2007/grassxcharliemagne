(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"shitty ass flash_HTML5 Canvas_atlas_", frames: [[0,2108,483,167],[0,2277,483,167],[0,1026,1920,1080],[0,0,3700,1024],[1922,1026,1700,1024],[1922,2052,900,1024]]}
];


// symbols:



(lib.playbuttonblank = function() {
	this.spriteSheet = ss["shitty ass flash_HTML5 Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.playbutton = function() {
	this.spriteSheet = ss["shitty ass flash_HTML5 Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.thegame = function() {
	this.spriteSheet = ss["shitty ass flash_HTML5 Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.thelogoaltv2 = function() {
	this.spriteSheet = ss["shitty ass flash_HTML5 Canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.thelogoalt = function() {
	this.spriteSheet = ss["shitty ass flash_HTML5 Canvas_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.themotion = function() {
	this.spriteSheet = ss["shitty ass flash_HTML5 Canvas_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.thelogoalt();
	this.instance.parent = this;
	this.instance.setTransform(-850,-512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-850,-512,1700,1024);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.themotion();
	this.instance.parent = this;
	this.instance.setTransform(-450,-512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450,-512,900,1024);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.themotion();
	this.instance.parent = this;
	this.instance.setTransform(-450,-512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450,-512,900,1024);


(lib.theworkingplaybutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.playbutton();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,483,167);


(lib.theendlogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.thelogoaltv2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3700,1024);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpGPIAAkwIj7nuIBYAAIDMGRIDNmRIBYAAIj6HuIAAEwg");
	this.shape.setTransform(2.8,-1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADnGPIhIjOIk/AAIhFDOIhWAAIEVseIBOAAIETMegAiGB1IEKAAIiEmcg");
	this.shape_1.setTransform(-64.1,-1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjeGPIAAseIBUAAIAALRIFpAAIAABNg");
	this.shape_2.setTransform(-127.6,-1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Aj2GPIAAseIFpAAQA5AAAmAmQAlAmAAA5IAADHQAAA6glAlQgmAmg5AAIkWAAIAAFNgAijgLIEBAAQAhAAASgSQASgSAAghIAAirQAAghgSgSQgSgTghAAIkBAAg");
	this.shape_3.setTransform(-189,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-225.9,-67.8,451.9,135.8), null);


(lib.PlayButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.playbuttonblank();
	this.instance.parent = this;
	this.instance.setTransform(-239,-81.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239,-81.9,483,167);


(lib.motionfade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.themotion();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,900,1024);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.motionfade("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-411.1,0,1,1,0,0,0,450,512);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-861.1,-512,1722.3,1024.1);


(lib.theplaybutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.movieClip_3 = new lib.Symbol4();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.parent = this;
	this.movieClip_3.setTransform(225.9,67.9);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.theplaybutton, new cjs.Rectangle(0,0,451.9,135.8), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.PlayButton("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(892.8,454.5,1,1,0,0,0,2.5,-0.5);

	this.instance_1 = new lib.thegame();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-783.7,-540);

	this.instance_2 = new lib.theendlogo("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,7.8,1,1,0,0,0,1850,512);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-1850,-540,3700,1080), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.movieClip_3.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("https://youtu.be/3gOHvDP_vCs?t=36", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.theplaybutton();
	this.instance.parent = this;
	this.instance.setTransform(-6,0,1,1,0,0,0,225.9,67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-231.9,-67.8,451.9,135.8), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.movieClip_2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://youtu.be/3gOHvDP_vCs?t=34", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_2 = new lib.Symbol3();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(-16,0);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-247.9,-67.8,451.9,135.8), null);


(lib.thegame_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.movieClip_4 = new lib.Symbol5();
	this.movieClip_4.name = "movieClip_4";
	this.movieClip_4.parent = this;
	this.movieClip_4.setTransform(1850,540);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.thegame_1, new cjs.Rectangle(0,0,3700,1080), null);


// stage content:
(lib.shittyassflash_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_225 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_6.addEventListener("click", fl_ClickToGoToWebPage_6);
		
		function fl_ClickToGoToWebPage_6() {
			window.open("https://youtu.be/3gOHvDP_vCs?t=36", "_blank");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_6.addEventListener("click", fl_ClickToGoToWebPage_7);
		
		function fl_ClickToGoToWebPage_7() {
			window.open("https://youtu.be/te0gsxnUnf4?t=6", "_blank");
		}
		playSound("changingmynumber215");
		playSound("changingmynumber215");
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://youtu.be/3gOHvDP_vCs?t=34", "_blank");
		}
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(225).call(this.frame_225).wait(1));

	// Actions
	this.button_6 = new lib.theworkingplaybutton();
	this.button_6.name = "button_6";
	this.button_6.parent = this;
	this.button_6.setTransform(1678.5,996.5,1,1,0,0,0,241.5,83.5);
	this.button_6._off = true;
	new cjs.ButtonHelper(this.button_6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_6).wait(225).to({_off:false},0).wait(1));

	// Layer 2
	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(1753.4,998.8);
	this.movieClip_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(225).to({_off:false},0).wait(1));

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2365.2,540.2);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1705.3,548.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1828.6,548.1);
	this.instance_2._off = true;

	this.instance_3 = new lib.theendlogo("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(2427.1,547.8,1,1,0,0,0,1850,512);
	this.instance_3._off = true;

	this.movieClip_5 = new lib.thegame_1();
	this.movieClip_5.name = "movieClip_5";
	this.movieClip_5.parent = this;
	this.movieClip_5.setTransform(783.7,540,1,1,0,0,0,1850,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},24).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},17).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_2}]},64).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},44).to({state:[{t:this.instance_3}]},44).to({state:[{t:this.movieClip_5}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:1705.3,y:548.1},24).wait(202));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},24).to({x:1619.3},15).to({x:1478.4},17).to({x:1468.7},6).to({_off:true,x:1828.6},1).wait(163));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(62).to({_off:false},1).to({x:1731.4},8).to({x:1437.5},64).to({_off:true,regX:1850,regY:512,x:2427.1,y:547.8},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(135).to({_off:false},1).to({x:783.7},44).to({alpha:0},44).to({_off:true,regY:540,y:540,alpha:1,mode:"independent"},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2875.2,568.2,900,1024);
// library properties:
lib.properties = {
	id: 'CE170B44DCC1114ABE4B68036F2D018A',
	width: 1920,
	height: 1080,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/shitty ass flash_HTML5 Canvas_atlas_.png", id:"shitty ass flash_HTML5 Canvas_atlas_"},
		{src:"sounds/changingnumearrape.mp3", id:"changingnumearrape"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CE170B44DCC1114ABE4B68036F2D018A'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;