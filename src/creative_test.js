function setup(){
    createCanvas(windowWidth, windowHeight);
    background(100)
}

function draw(){
	noFill();
	// 線の幅をランダムに
	strokeWeight(2);
	//線の色をランダムに
	stroke(random(0,255), random(0, 255), random(0,255));
	rect(mouseX, mouseY, random(20,80), random(20,80), 5);
}
