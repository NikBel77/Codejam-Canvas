function drawPic () {
    let ctx = document.querySelector('.canvas').getContext("2d");
    let image = document.createElement('img');
    image.src = 'data/image.png';
    image.onload = function() {
        ctx.drawImage(image, 0, 0, 512, 512)
    }
}

function drawMatrix (matrix, format) {
    let ctx = document.querySelector('.canvas').getContext("2d");
    let scale = 512 / matrix.length;
    let isRgba = format === 'rgba' ? true : false;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (isRgba) ctx.fillStyle = `rgba(${matrix[i][j]})`;
            else ctx.fillStyle = `#${matrix[i][j]}`;
            ctx.fillRect(i*scale, j*scale, scale, scale);
        }
    }
}

document.querySelector('#img_lg').addEventListener('click', function () {
    drawPic ();
})
document.querySelector('#img_sm').addEventListener('click', function () {
    drawMatrix (matrix4 ,'#');
})
document.querySelector('#img_md').addEventListener('click', function () {
    drawMatrix (matrix32, 'rgba');
})