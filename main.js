const canvas = document.getElementById("tetris")
const ctx = canvas.getContext('2d')

let randomBtn = document.getElementById("random")
let fieldCreateBtn = document.getElementById("fieldCreate")
let fieldWidth = document.getElementById("width")
let fieldHeight = document.getElementById("height")

let canvasWidth = 150
let canvasHeight = 300

canvas.width = canvasWidth
canvas.height = canvasHeight


let blockSize = 15
let playfield = [
]

let clone

function createField(e) {
    e.preventDefault()
    playfield = []

    let width = parseInt(fieldWidth.value, 10)
    let height = parseInt(fieldHeight.value, 10)

    canvas.width = width * blockSize
    canvas.height = height * blockSize

    for (let row = 0; row < height; row++) {
        let row = []
        for (let cell = 0; cell < width; cell++) {
            row.push(0)
        }
        playfield.push(row)
    }

    clone = structuredClone(playfield)
}

function randomArt() {
    playfield = structuredClone(clone)
    for (let row = 0; row < playfield.length; row++) {
        for (let cell = 0; cell < playfield[row].length; cell++) {
            if (Math.floor(Math.random() * 2) == true) {
                playfield[row][cell] = 1
            }
        }
    }
    draw()
}

function draw() {
    ctx.clearRect(-canvasWidth / 2, -canvasHeight / 2, canvas.width * 2, canvas.height * 2)
    



    for (let row = 0; row < playfield.length; row++) {
        for (let cell = 0; cell < playfield[row].length; cell++) {
            if (playfield[row][cell] === 1) {
                ctx.fillStyle = `rgb(
                    ${Math.floor(Math.random() * 256)},
                    ${Math.floor(Math.random() * 256)},
                    ${Math.floor(Math.random() * 256)})`;
                ctx.fillRect(cell * blockSize, row * blockSize, blockSize, blockSize)
            }
        }
    }

}


randomBtn.addEventListener("click", randomArt)

fieldCreateBtn.addEventListener("click", createField)