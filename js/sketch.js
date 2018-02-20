var xoff = 0.0;
var inc = 0.005;

var str1 = "rgba(0,0,0,";
var str2 = ")";

function setup() {

	createCanvas(windowWidth,windowHeight);

}

function draw() {

	xoff += inc;
	var lumi = (noise(xoff));
	
	var lumiValue = lumi.toString();
	var lumiString = str1.concat(lumiValue,str2);
	
	document.body.style.backgroundColor = lumiString;
	//println(document.getElementsByTagName("body")[0].style)
	
}
