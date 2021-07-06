
let canvas

function setup() {
	canvas = createCanvas(10, 128)
	canvas.parent("targetCanvasContainer")

	const input = createFileInput(handleFile)
	input.parent("targetFileUploadContainer")
}	

//const decode_button = document.getElementById("decode_button");

/*
decode_button.addEventListener('click', event => { 	
	const file = document.getElementById("input_text").value
	const localFile = file.replace('C:\\fakepath\\',"")
	loadImage(localFile, function(img) {
		const testo = decode(img)
		console.log(testo)
		document.getElementById("demo").innerHTML = testo
		
	})
})

*/

function draw() {	
		
}

function decode(img) {
	let output = ''
	for(let x=0; x<img.width; x++){
		for(let y=0; y<img.height; y++){
			const pixel = img.get(x, y)
			const lum = brightness(pixel)
			if(lum>50){
				let codice = y
				let carattere = String.fromCharCode(codice)
				output += carattere
				continue
			}
		}
	}
	return output
}

function handleFile(file) {
	if (file.type === 'image') {
		const img = createImg(file.data, '')
		img.hide()
		resizeCanvas(img.width, img.height)
		image(img, 0, 0)
		const testo = decode(canvas)
		document.getElementById("demo").innerHTML = testo


	} 
}






