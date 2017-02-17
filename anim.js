var canvas, ctx;
var h = 0;
var r = 0;
var circle = function() {
    var height = canvas.height;
    var width = canvas.width;

    ctx.beginPath()
    ctx.arc(canvas.width/2, canvas.height/2, r, 0, Math.PI * 2);
    document.getElementsByTagName("BODY")[0].style.background = "hsl(" + h%360 + ", " + (r/Math.min(canvas.width, canvas.height)*100) + "%, " + (r/Math.min(canvas.width, canvas.height)*100) + "%)";
    ctx.fillStyle = "hsl(" + (h+180)%360 + ", " + (r/Math.min(canvas.width, canvas.height)*100) + "%, " + (r/Math.min(canvas.width, canvas.height)*100) +"%)";
    ctx.fill();
    ctx.fillRect(width-200, height-30, 70, 20);
    ctx.fillRect(width-120, height-30, 50, 20);
    ctx.fillRect(width-60, height-30, 50, 20);
    ctx.font='15px Courier New';
    ctx.fillStyle = "#000000";
    ctx.fillText("Circle", width - 193, height-15);
    ctx.fillText("DVD", width - 110, height-15)
    ctx.fill();
    h++;
    window.requestAnimationFrame(circle);
};

var resize = function(e) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    r =  Math.sqrt(Math.pow(canvas.width/2 - e.offsetX, 2)+Math.pow(canvas.height/2 - e.offsetY, 2))
}

window.onload = function() {
    canvas = document.getElementById("doodle");
    canvas.addEventListener('mousemove', resize);
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    r = canvas.width/3;
    circle();
}



