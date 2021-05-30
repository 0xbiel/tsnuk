let pic
let centeredCanvas

function preload() {
    pic = loadImage('assets/me.png')
}

function setup() {
    centeredCanvas = createCanvas(pic.width, pic.height)
    let centerX = (windowWidth - pic.width) / 2
    let centerY = (windowHeight - pic.height) / 2
    centeredCanvas.position(centerX, centerY)
}

function draw() {
    background(220)
}
