let pg
const altezza = 128;

function setup(){

	let myCanvas = createCanvas( 1, altezza);

    myCanvas.parent("#container"); 

    pg = createGraphics(1, 1)

    pixelDensity(1)


	pg.pixelDensity(1)

	console.log(pg)
	

	//let input = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta eu metus non posuere. Nam tristique augue rutrum, fringilla lectus vel, porttitor metus. Maecenas sodales justo eget fermentum dictum. Maecenas ac convallis lorem, vitae consequat eros. Vestibulum posuere sapien erat, eget pellentesque magna congue ut. Sed tincidunt sagittis neque sollicitudin sagittis. Sed dapibus venenatis ex eu facilisis. Donec mauris quam, congue sit amet tincidunt non, eleifend nec enim. In feugiat nunc sit amet elit hendrerit lobortis. "
	let input = document.querySelector("#input_text")
	input.addEventListener('input', e => encode(input.value))


	// let encode_button = document.getElementById("encode_button");
	// encode_button.addEventListener('click', event => {
	// 	let input = document.getElementById("input_text").value;
	//  	encode(input);
	// });



	let save_button = document.getElementById("save_button");
	save_button.addEventListener('click', event => {
	 	let nomeFile = "out_" + new Date().getTime()
		saveCanvas(pg, nomeFile, "png") ;
	});

}

function draw(){
	background(32, 32, 32)
	image(pg, 0, 0)

}

function encode(input) {
	let larghezza = input.length

	resizeCanvas(larghezza,altezza)

	pg.canvas.parentNode.removeChild(pg.canvas)
	//pg.resizeCanvas(larghezza, 128)
	pg = createGraphics(larghezza, altezza)

	console.log(pg.width, pg.height)

	pg.background(15,15,15)
	pg.stroke(0)

	for (let i=0; i<larghezza; i++) {
		let x = i
		let y = input.charCodeAt(i)
		console.log( x + " ----> " + y )
		pg.set( x, y, color(255));
	}
	pg.updatePixels();

}



