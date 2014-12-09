(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1600,
	height: 800,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"images/benchmark.jpg", id:"benchmark"},
		{src:"images/car.png", id:"car"},
		{src:"images/distinction.jpg", id:"distinction"},
		{src:"images/luxury.jpg", id:"luxury"}
	]
};



// symbols:



(lib.benchmark = function() {
	this.initialize(img.benchmark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,800);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,800);


(lib.distinction = function() {
	this.initialize(img.distinction);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,800);


(lib.luxury = function() {
	this.initialize(img.luxury);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,800);


(lib.Tween3copy3 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.benchmark();
	this.instance.setTransform(-800,-400);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-800,-400,1600,800);


(lib.Tween3copy2 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.distinction();
	this.instance.setTransform(-800,-400);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-800,-400,1600,800);


(lib.Tween3copy = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.luxury();
	this.instance.setTransform(-800,-400);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-800,-400,1600,800);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.car();
	this.instance.setTransform(-800,-400);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-800,-400,1600,800);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eh8/A+gMAAAh8/MD5/AAAMAAAB8/g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-800,-400,1600,800);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C2003").s().p("EgSIA+gMAAAh8/MAkRAAAMAAAB8/g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116.1,-400,232.3,800);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4XGDIAAsFMAwvAAAIAAMFg");
	this.shape.setTransform(277.7,40.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtRAJIAAgRIajAAIAAARg");
	this.shape_1.setTransform(276.2,77,1.047,1);

	this.text = new cjs.Text("ENQUIRE HERE", "bold 23px 'Neutra Text'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 551;
	this.text.setTransform(275.4,46);

	this.text_1 = new cjs.Text("BY INVITATION ONLY", "bold 28px 'Neutra Text'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 41;
	this.text_1.lineWidth = 551;
	this.text_1.setTransform(275.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text},{t:this.shape_1}]}).to({state:[]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,554.9,89.4);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("THE NEW BENCHMARK\nOF COUTURE LIVING", "bold 28px 'Neutra Text'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 551;
	this.text.setTransform(275.8,9,0.8,0.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(55.5,9,443.9,71.6);


(lib.Symbol5copy2 = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("DISTINCTION", "bold 82px 'Neutra Text'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 84;
	this.text.lineWidth = 614;
	this.text.setTransform(231.8,25.7,0.5,0.5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(78.4,25.7,308.8,51.4);


(lib.Symbol5copy = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("LUXURY", "bold 82px 'Neutra Text'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 84;
	this.text.lineWidth = 467;
	this.text.setTransform(234.4,25.7,0.5,0.5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(117.7,25.7,235.4,51.4);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("PRESTIGE", "bold 82px 'Neutra Text'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 84;
	this.text.lineWidth = 467;
	this.text.setTransform(234.4,25.7,0.5,0.5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(117.7,25.7,235.4,51.4);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A55E3B").s().p("AhDBrQgFgCgBgCQgBgBAAgFIABgmQABgIAEAAQAEAAAAAFQAAAHADAIQAKAdAqAAQAVAAAOgKQAMgKAAgNQAAgMgGgJQgIgMgVgNIgOgLQgegRgNgQQgNgQAAgSQAAgbAUgOQAWgRApACQAfACASADQAFABAAADIgBAjQAAAJgEAAQgEAAAAgGQAAgKgKgJQgNgOgbAAQgSAAgMAIQgLAIAAAOQAAAWAkAXIAKAGQAiASAMAPQANAPAAAVQAAAiggASQgYALghAAQggAAgVgHg");
	this.shape.setTransform(347.9,132.5,1.045,1.045);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A55E3B").s().p("AhCBvQgGAAAAgDQAAgDAEAAIALgBQAHgBABgPQACgMAAgyIgBhwQAAgIgCgDQgDgEgHgBIgLgBQgGAAAAgDQABgCAGAAICAAAIASgDQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgCATIgBATQAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBgBAAgBQAAgGgCgEQgCgJgRgCIg1gBQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABIAABKQAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAIArAAQALgBADgEQADgEABAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIgDAnQAAAFgCAAQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgCgLQgBgKgPgBIglgBQgBAAAAAAQAAABgBAAQAAAAAAABQAAABAAAAIAABEQABAPAHAFQAGAFAXAAQAVAAAHgEQAKgEAEgRQAAgFACAAQADAAAAAFQAAASgEAPQgBAFgEACQgBABgKAAg");
	this.shape_1.setTransform(311.8,132.8,1.045,1.045);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A55E3B").s().p("AggBwQgHAAABgCQAAgDAEAAIALgBQAGgBACgPQACgNAAgxIAAh3IgeACQgOABgFABQgGABgEAFQgDAGgBAFQgBAAAAABQAAABAAAAQgBABAAAAQgBAAgBAAQgCAAAAgEIAGgiQABgGACAAIAFABIAIADQANABAQAAIBNAAQAOAAANgBIAHgCQADAAAAAGIgBAiQAAAFgDAAQgCAAAAgGIgBgDQgBgHgKgEQgMgFgSAAIgMgCIAAB3QABAxABANIACAKQACAFAGAAIAOACQAFAAgBADQABACgGAAg");
	this.shape_2.setTransform(274.7,132.7,1.045,1.045);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A55E3B").s().p("AgnBuQgGAAAAgDQAAgCAFAAIAKgBQAHgCACgNQABgMAAg0IAAhvQgBgPgJgCIgLgBQgFAAAAgDQAAgCAHAAIBIAAQAGAAAAACQAAADgEAAIgJABQgGABgBAEIgBALIgBBXQAABQABAIQABAPALABIAMABQAFAAAAACQAAADgGAAg");
	this.shape_3.setTransform(241.5,132.9,1.045,1.045);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A55E3B").s().p("AgqBhQghgXAAg3IAAgoQAAg1gBgJQgBgJgBgDQgCgFgHgCIgLAAQgFAAAAgDQAAgDAGAAIBPAAQAGAAABADQgBADgEAAIgJAAQgKACgBAPIAABlQAAAeAGASQAFAPAMAJQAJAIAPgBQARgCAIgJQALgLAEgUQACgNAAgcIgBhhQAAgHgCgEQgDgEgHgCIgKAAQgGAAAAgDQAAgDAHAAIBCAAQAHAAAAADQAAADgGAAIgIAAQgGABgCAEQgCAEgBAIQAAAJAAA1IAAAdQgBAegEATQgGAZgRAOQgQAOgeAAIgFABQgZAAgRgMg");
	this.shape_4.setTransform(206.4,132.3,1.045,1.045);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A55E3B").s().p("AhDBrQgFgCgBgCQgBgBAAgFQAAgUACgSQAAgIAEAAQAEAAAAAFQAAAFADAKQALAdApAAQAVAAAOgKQANgKAAgNQAAgMgGgJQgIgMgVgNIgPgLQgegRgNgQQgNgQAAgSQAAgbAUgOQAWgRApACQAfACASADQAFABAAADIgBAjQAAAJgEAAQgEAAAAgGQAAgJgKgKQgNgOgbAAQgSAAgMAIQgLAIAAAOQAAAWAkAXIAKAGQAiASAMAPQANAPAAAVQAAAjggARQgYALghAAQggAAgVgHg");
	this.shape_5.setTransform(170.8,132.5,1.045,1.045);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A55E3B").s().p("Ah9CgQgHAAAAgDQAAgBABgBQAAAAAAAAQABgBAAAAQABAAABAAQAFAAAIgCQAGgBADgDQACgEABgKQACgSAAhLIAAioQgBgMgEgFQgEgGgKgCIgPgBQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgEAHAAICJAAQA1AAAcAIQAOAFAOAKQAXAPABAfQABAyhBAgQg3AZg3gBIgJAAQgFAAAAgDQAAgEAOgBQAngDAngOQAsgSANgZQAHgNgDgSQgEgVgPgNQgSgRgtgEIhBAAQgMAAgHACQgDABAAAIIAACoQAABLACASQABAKADAEQAEADAJABIAUACQABAAAAAAQABAAAAABQABAAAAAAQAAABAAABQAAADgHAAg");
	this.shape_6.setTransform(141.1,73.8,1.045,1.045);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A55E3B").s().p("ABdCJIhjh3IhAhJIgjgqIAGDJQAAAZAEALQADAKAJADQAIACANAAQABAAABAAQAAABABAAQAAAAAAABQAAAAAAABQABADgIAAIgtgBIgpABQgHAAAAgDQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAQALAAAHgCQAHgCADgMQACgKAAgeIAAjxQABgVAEAAQACAAAFAFIAIAIIAkAvQApAyAmArQAXAYAlAsIAnAvIgFjWQgBgVgDgIQgDgJgJgCQgKgCgLAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBgBAAAAQAAgDAJAAIAsABIAkgBQAIAAAAADQgBADgEAAIgKABQgKACgDAIQgDAIAAAUIgBD2QAAAUgBAGQAAAEgCAAQgEAAgcgbg");
	this.shape_7.setTransform(375,73.7,1.045,1.045);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A55E3B").s().p("Ah5BvQglgvAAhAQAAg8AmgwQAtg5BLAAQBFAAAtArQAtAsAABIQAABHgsAyQguAzhFAAQhOAAgrg3gAhWhzQghAlAABDQgBBHAmAuQAlAsA1AAQAoAAAegbQAqgmAAhRQAAhHgmgrQgigogxAAQg1AAggAjg");
	this.shape_8.setTransform(334.1,73.8,1.045,1.045);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A55E3B").s().p("AgtCgQgGAAgBgEQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABAAQAIAAAEgCQAGgBADgGQACgFACgLQACgSAAhKIAAhJQAAhOgBgNQAAgVgOgDIgNgCQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgEAHAAIBSAAQAHAAAAAEQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgLABQgJACgDAGQgCAFgBAMQgBANAABOIAABJQAABKACASQABALADAFQADAGAKABIATACQAAAAABAAQABAAAAAAQABABAAAAQAAABAAAAQAAAEgHAAg");
	this.shape_9.setTransform(302.3,73.8,1.045,1.045);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A55E3B").s().p("AhnCfQgHAAAAgEQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAHAAAGgBQAGgCADgGQACgEABgMQACgRAAhLIAAhJQAAhNgBgOQgBgLgCgGQgFgFgKgCIgOgCQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgEAIABIBdAAQAHgBAAAEQAAABAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgPACQgJABgDAGQgDAFgBAMQgBAOAABNIAABKQAAAyACATQACAXAFAFQAKAKBKAAQAVAAAJgCQAOgDAHgIQAJgLACgPQABgFADAAQACAAAAAHIgCASQgCAPgCAJQgCAHgEACQgEACgQABg");
	this.shape_10.setTransform(273.2,73.9,1.045,1.045);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A55E3B").s().p("AgsCgQgIAAABgEQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAABAAQAHAAAGgCQAGgBACgGQACgFACgLQACgSAAhKIAAhJQAAhOgBgNQAAgVgOgDIgNgCQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgEAHAAIBTAAQAGAAAAAEQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgLABQgIACgDAGQgEAFgBAMQgBANAABOIAABJQABBKACASQABALADAFQAEAGAIABIATACQABAAABAAQABAAAAAAQABABAAAAQAAABAAAAQAAAEgHAAg");
	this.shape_11.setTransform(241.2,73.8,1.045,1.045);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A55E3B").s().p("AgECdIgJgVIhpkCQgGgRgGgGQgGgGgMgDQgHgCgJAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBQgBgDAMAAIBZAAQALAAAAADQAAADgEAAQgLAAgFACQgGACAAAHQAAAFAMAeIBPDXQASgpAhhUQAhhUAHgYIAEgQQAAgIgGgCQgFgCgLAAQgEAAgBgCQAAgEAKAAIBLAAQAGAAAAADQAAADgEAAQgMAAgJAFQgKAIgNAgIgvBxIg3CBIgMAZQgDAHgDAAQgBAAgDgGg");
	this.shape_12.setTransform(208.1,74.1,1.045,1.045);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A55E3B").s().p("ABWCiQgNgBAAgCQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAgBQAGgCgDgJIgohpQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBAAAAAAIhZAAQgDAAgCADIgaBLQgFARAAAMQAAAGAFADQAFADAGAAIAEAAQAFAAAAACQAAAEgHAAIhRAAQgIAAAAgEQAAAAAAgBQAAAAABgBQAAAAABAAQABAAAAAAIANgBQAOgBAIgMQAHgIAHgTIBgkFQAGgRADAAQADAAAEAQIBjD9QARAqAUAFQAGADALAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQAAAEgIAAgAgNhdIglBwQAAABAAABQAAAAAAABQAAAAAAAAQABAAAAAAIBPAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBgBgBIglhwQgCgFgCAAQgBAAgCAFg");
	this.shape_13.setTransform(173.7,73.5,1.045,1.045);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A55E3B").s().p("AzzAFIAAgJMAnnAAAIAAAJg");
	this.shape_14.setTransform(259.1,106.1,1.045,1.045);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A55E3B").s().p("AApA4QgKAAgGgDQgFgEgOgTIgPgVIgBgBIgTAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIAAADQAAAaABAHQAAAHAFABIAHAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABgBAAIggAAQgBAAAAgBQgBAAAAAAQAAAAAAAAQgBgBAAAAIABgBIAFAAQAEgBAAgHIABhYQgBgIgFgBIgGAAIgBgBQAAgBABAAQAAAAAAAAQAAAAABAAQAAgBAAAAIAjAAQASAAAHAHQAKAHAAANQAAASgRAOIAeAmQAIAIAKADIAGAAIABABQAAAAAAABQAAAAgBAAQAAAAgBAAQgBABgBAAgAgdgxIgBABIAAAwIABABQAEACAMAAQAHAAAEgCQAHgFAAgRQAAgNgFgIQgHgIgMAAg");
	this.shape_15.setTransform(386,168.9,1.045,1.045);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A55E3B").s().p("AgbAuQgNgNAAgaIAAgzQgBgIgFgBIgFAAIgCgBQAAgBAAAAQABAAAAAAQAAAAABAAQAAgBABAAIAfAAQAAAAABABQAAAAABAAQAAAAAAAAQAAAAAAABIgBABIgEAAQgFAAAAAJIAAAyQAAAaAKALQAJAHALAAQAOABAJgLQAIgKAAgaIAAgwQAAgIgGgBIgFAAIgBgBQAAgBAAAAQAAAAAAAAQABAAAAAAQABgBAAAAIAcAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAABIgBABIgEAAQgFAAAAAJIAAAtQAAAggOANQgMALgSgBQgRAAgKgKg");
	this.shape_16.setTransform(360.9,169,1.045,1.045);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A55E3B").s().p("AgeA4QgBAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAIAAgBIAFAAQADgBABgHIABhYQAAgIgHgBIgEAAIgCgBQAAgBAAAAQAAAAABAAQAAAAAAAAQABgBABAAIAhAAQASABAJAHQAIAIAAAKQAAAQgKAKQgLAHgPAAIgCAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAKAAAHgFQAIgHAAgKQAAgOgJgJQgHgHgLAAIgGAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAAAIAAA7QAAAaABAHQABAHAFABIAFAAIAAABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_17.setTransform(339.1,168.9,1.045,1.045);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A55E3B").s().p("AAsA4QgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBAAAAIABgBIAAgFIgHhLIgBAAIgiBLQgDAIAAAAQgCAAgDgHIgkhKIgBAAIgGBDIAAAHQABAEAEABIAFAAIABABQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAgBAAIgZAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAEAAQAFgBABgLIAKhfQAAAAAAgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABIAsBbIAphbQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAABQAAAAAAABIAKBZQABAOAHACIAJABIABABQAAABAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_18.setTransform(314.6,168.7,1.045,1.045);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A55E3B").s().p("AgcAuQgOgNAAgaIAAgzQAAgIgGgBIgFAAIgBgBQAAgBAAAAQAAAAAAAAQABAAAAAAQABgBAAAAIAgAAQABAAAAABQABAAAAAAQAAAAAAAAQABAAAAABIgCABIgEAAQgFAAAAAJIAAAyQgBAaAMALQAIAHAMAAQAOABAJgLQAJgLAAgZIAAgwQAAgIgHgBIgFAAIgBgBQAAgBAAAAQAAAAABAAQAAAAAAAAQABgBABAAIAbAAQABAAABABQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAABgBAAIgDAAQgFAAgBAJIAAAtQABAhgOAMQgMALgTgBQgSAAgKgKg");
	this.shape_19.setTransform(287.2,169,1.045,1.045);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A55E3B").s().p("AgVA3IgIABQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAgBAAAAIABgBIAEAAQAEgBABgHIAAhYQAAgIgGgBIgFAAIgCgBQAAgBAAAAQABAAAAAAQAAAAABAAQAAgBABAAIAfAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAABIgBABIgDAAQgGAAAAAJIAAA3QAAAfADAEQADADANAAQAOAAAEgEQADgFABgEIABgCQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAABIgCAOIgCAEIgIABg");
	this.shape_20.setTransform(264.1,168.9,1.045,1.045);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A55E3B").s().p("AAeA4QgBAAgBAAQgBAAgBAAQAAAAAAAAQgBgBAAAAIABgBQABAAAAAAQAAgBAAAAQABgBAAAAQgBgBAAgBIgOgkIgBgBIgeAAIgBABIgJAaIgCAKQAAAEAFAAIACAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgcAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIABgBIAFAAQAHgBAFgNIAihaIADgGQAAAAABAGIAjBXQAGAPAHACIAFAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAgAgEggIgNAmIABACIAaAAIABgCIgMgmIgBgBIgCABg");
	this.shape_21.setTransform(223.8,168.7,1.045,1.045);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A55E3B").s().p("AgdA4QgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAEAAQADgBABgHQABgHAAgaIAAg3QgBgIgGgBIgFAAIgBgBQAAgBAAAAQABAAAAAAQAAAAABAAQAAgBABAAIAfAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAABIgBABIgDAAQgGAAAAAJIAAA3QAAAfADAEQADADANAAQAOAAADgEQADgFABgEQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAAIgDAGIgCAEIgHABg");
	this.shape_22.setTransform(201.6,168.9,1.045,1.045);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A55E3B").s().p("AAeA4QgBAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIABgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBgBgBIgNgkIgCgBIgeAAQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIgJAaQgCAFAAAFQAAAEAFAAIACAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgdAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIAFAAQAHgBAFgNIAihaQACgGABAAQAAAAACAGIAiBXQAFAOAIADIAFAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAgAgDggIgOAmQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAIAbAAIAAgCIgMgmIgBgBIgBABg");
	this.shape_23.setTransform(179.2,168.7,1.045,1.045);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A55E3B").s().p("AgcAuQgNgMAAgbIgBgzQAAgIgGgBIgFAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQABgBAAAAIAgAAQAAAAABABQAAAAABAAQAAAAAAAAQAAAAAAABIgBABIgEAAQgFAAAAAJIAAAyQAAAbALAKQAIAHAMAAQAPABAIgLQAJgLAAgZIAAgwQgBgIgGgBIgFAAIgBgBQAAgBAAAAQAAAAABAAQAAAAAAAAQABgBAAAAIAdAAQAAAAABABQAAAAABAAQAAAAAAAAQAAAAAAABIgBABIgEAAQgFAAAAAJIgBAtQAAAhgNAMQgMALgTgBQgRAAgLgKg");
	this.shape_24.setTransform(155.6,169,1.045,1.045);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A55E3B").s().p("AAsA4IgKgBQgJgBgJgIQgKgIgigmIAAAAIAAAtQABAHAFABIAGAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAIggAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAIABgBIAFAAQADgBABgHIAAhYQAAgIgGgBIgFAAIgBgBQAAgBAAAAQAAAAAAAAQAAAAABAAQAAgBABAAIAeAAQABAAABABQAAAAAAAAQABAAAAAAQAAAAAAABIgBABIgEAAQgFAAAAAJIAAAoIAAAAIAggkQAIgHAAgEQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAIgBgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQABgBAAAAIAZAAQABAAABABQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAABgBAAQgEAAgEACQgFABgLALIgeAhIARASIAVAWQAQAOAGACQAEACAGAAIACABQgBAAAAABQAAAAAAAAQgBAAAAAAQgBABgBAAg");
	this.shape_25.setTransform(132.3,168.9,1.045,1.045);

	this.addChild(this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(126.5,56.5,265.4,118.5);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#692003","#EE773D","#FFD79A"],[0,0.467,1],400,0,-400,0).s().p("Eg+eA+gMAAAh8/MB8+AAAMAAAB8/g");
	this.shape.setTransform(1200,400);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#692003","#EE773D","#FFD79A"],[0,0.467,1],-400,0,400,0).s().p("Eg+fA+gMAAAh8/MB8/AAAMAAAB8/g");
	this.shape_1.setTransform(400,400);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD79A").s().p("EgJXA+gMAAAh8/ISvAAMAAAB8/g");
	this.shape_2.setTransform(800,400);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1600,800);


(lib.Path_1_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BC8B52").ss(1.5).p("EBnyBBmMjPjAAAMAAAiDLMDPjAAAg");
	this.shape.setTransform(665,420.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.2,1330.4,841.8);


(lib.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BC8B52").ss(1.5).p("EBldBDmMjK5AAAMAAAiHLMDK5AAAg");
	this.shape.setTransform(650.1,433.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.2,1300.7,867.2);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_1_0();
	this.instance.setTransform(748,360.3,1.126,0.832,0,0,0,665,421);

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(747.8,360.3,1.126,0.832,0,0,0,650.1,433.7);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.6,1497.6,721.2);


(lib.Symbol4copy3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_159 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(159).call(this.frame_159).wait(1));

	// Layer 1
	this.instance = new lib.Tween3copy3("synched",0);
	this.instance.setTransform(800,400,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},159).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-40,1760.1,880.1);


(lib.Symbol4copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3copy2("synched",0);
	this.instance.setTransform(800,400,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},159).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-40,1760.1,880.1);


(lib.Symbol4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3copy("synched",0);
	this.instance.setTransform(800,400,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},159).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-40,1760.1,880.1);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(800,400,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},159).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-40,1760.1,880.1);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(0,0,1,1,0,0,0,800,400);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1600},84).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(-1600,0,1,1,0,0,0,800,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:0},84).wait(1));

	// Layer 3
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(-812,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:788},84).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2400,-400,3200,800);


// stage content:



(lib.animation2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_467 = function() {
		this.clickthis.addEventListener("click", fl_clicktogotowebpage_1);  
		  
		function fl_clicktogotowebpage_1 () {  
		     window.open("registration", "_blank");  
		}
	}
	this.frame_479 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(467).call(this.frame_467).wait(12).call(this.frame_479).wait(1));

	// Layer 17
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(800,400);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14).to({_off:true},1).wait(465));

	// Layer 1
	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(800.1,400,1,1,0,0,0,748,359.9);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(480));

	// Layer 2
	this.clickthis = new lib.Symbol8();
	this.clickthis.setTransform(800,476.2,0.8,0.8,0,0,0,277.4,44.7);
	this.clickthis.alpha = 0;
	this.clickthis._off = true;
	new cjs.ButtonHelper(this.clickthis, 0, 1, 2, false, new lib.Symbol8(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthis).wait(467).to({_off:false},0).to({alpha:1},12).wait(1));

	// Layer 18
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(800,476.2,1,1,0,0,0,277.4,44.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(393).to({_off:false},0).to({alpha:1},15).wait(48).to({alpha:0},10).to({_off:true},1).wait(13));

	// Layer 6
	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(800,256.5,0.584,0.584,0,0,0,259.1,115.7);
	this.instance_3.alpha = 0;
	this.instance_3.compositeOperation = "lighter";
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_3.cache(125,55,269,123);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(378).to({_off:false},0).to({alpha:1},15).wait(87));

	// Layer 16
	this.instance_4 = new lib.Symbol4copy3();
	this.instance_4.setTransform(800,400,1,1,0,0,0,800,400);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(363).to({_off:false},0).to({alpha:1},15).wait(102));

	// Layer 13
	this.instance_5 = new lib.Symbol5copy2();
	this.instance_5.setTransform(800,401.1,1,1,0,0,0,235.3,51.4);
	this.instance_5.alpha = 0;
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,40);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(275).to({_off:false},0).to({alpha:1},15).to({_off:true},88).wait(102));

	// Layer 14
	this.instance_6 = new lib.Symbol4copy2();
	this.instance_6.setTransform(800,400,1,1,0,0,0,800,400);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(260).to({_off:false},0).to({alpha:1},15).to({_off:true},103).wait(102));

	// Layer 11
	this.instance_7 = new lib.Symbol5copy();
	this.instance_7.setTransform(800,401.1,1,1,0,0,0,235.3,51.4);
	this.instance_7.alpha = 0;
	this.instance_7.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,40);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(172).to({_off:false},0).to({alpha:1},15).to({_off:true},88).wait(205));

	// Layer 12
	this.instance_8 = new lib.Symbol4copy();
	this.instance_8.setTransform(800,400,1,1,0,0,0,800,400);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(157).to({_off:false},0).to({alpha:1},15).to({_off:true},103).wait(205));

	// Layer 10
	this.instance_9 = new lib.Symbol5();
	this.instance_9.setTransform(800,401.1,1,1,0,0,0,235.3,51.4);
	this.instance_9.alpha = 0;
	this.instance_9.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,40);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(69).to({_off:false},0).to({alpha:1},15).to({_off:true},88).wait(308));

	// Layer 9
	this.instance_10 = new lib.Symbol4();
	this.instance_10.setTransform(800,400,1,1,0,0,0,800,400);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(54).to({_off:false},0).to({alpha:1},15).to({_off:true},103).wait(308));

	// Layer 1
	this.instance_11 = new lib.Symbol3();
	this.instance_11.setTransform(800,400,1,1,0,0,0,259.2,115.7);
	this.instance_11.alpha = 0;
	this.instance_11.compositeOperation = "lighter";
	this.instance_11._off = true;
	this.instance_11.cache(125,55,269,123);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15).to({_off:false},0).to({alpha:1},14).to({_off:true},143).wait(308));

	// Layer 4
	this.instance_12 = new lib.Symbol2();
	this.instance_12.setTransform(0,400,1,1,0,0,0,-800,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},69).wait(411));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-800,400,3200,800);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;