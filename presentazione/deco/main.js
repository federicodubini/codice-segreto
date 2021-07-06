let pg
let input

function preload(){
	input= loadImage("out_1620121702581.png")
}

function setup(){

	createCanvas(600, 600)
	pixelDensity(1)

	background(220)

	image(input, 10, 10)
	let output= "";

	for(let x=0; x<input.width; x++){
		for(let y=0; y<input.height; y++){
			let pixel= input.get(x, y)
			let b= brightness(pixel)

			if(b>50){
				let codice= y
				let carattere = String.fromCharCode(codice);

				console.log(carattere)
				output += carattere
			}
		}
	}
	console.log(output)
	
}

function draw(){
	
}


function keyPressed() {
	
}


