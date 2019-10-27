let btnImg = document.querySelector('#img_lg');
let canvas = document.querySelector('.canvas')
let ctx = canvas.getContext("2d");
let image = document.createElement('img');

function drawPic () {
    image.src = 'data/image.png';
    image.onload = function() {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    }
}

btnImg.addEventListener('click', function () {
    drawPic ()
})