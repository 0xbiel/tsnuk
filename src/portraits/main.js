let pic

function preload() {
    pic = loadImage('assets/me.png')
}

function setup() {
    createCanvas(pic.width, pic.height)

    //Get the image's pixels information.
    for(let width = 0; width < pic.width; width+=5) {
	for(let height = 0; height < pic.height; height+=5) {
	    let imgColor = pic.get(width, height)
	    stroke(color(imgColor))
	    point(width, height)
	}
    }
}
