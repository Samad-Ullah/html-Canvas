const canvas = document.getElementById('#canvas');
const ctx = canvas.getContext('2d');
console.log(ctx);

canvas.width= window.innerWidth;
canvas.height = window.innerHeight;


const mouse = {
    x:undefined,
    y:undefined,
}




canvas.addEventListener("mousemove",function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    draw();
})

function draw(){
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 10, 0 ,Math.PI*2);
    ctx.fill();
}
draw();
