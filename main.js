canvas=document.getElementById("MyCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokestyle="red";
ctx.lineWidth="2";
ctx.arc(400,200,40,0,2* Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
x=e.clientX-canvas.offsetLeft;
y=e.clientY-canvas.offsetTop;
ctx.beginPath();
ctx.arc(x,y,40,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokestyle="purple";
ctx.lineWidth="2";
ctx.arc(400,200,40,0,2* Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
x=e.clientX-canvas.offsetLeft;
y=e.clientY-canvas.offsetTop;
ctx.beginPath();
ctx.arc(x,y,40,0,2*Math.PI);
ctx.stroke();
}



ctx.beginPath();
ctx.strokestyle="green";
ctx.lineWidth="2";
ctx.arc(400,200,40,0,2* Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
x=e.clientX-canvas.offsetLeft;
y=e.clientY-canvas.offsetTop;
ctx.beginPath();
ctx.arc(x,y,40,0,2*Math.PI);
ctx.stroke();
}


ctx.beginPath();
ctx.strokestyle="blue";
ctx.lineWidth="2";
ctx.arc(400,200,40,0,2* Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
x=e.clientX-canvas.offsetLeft;
y=e.clientY-canvas.offsetTop;
ctx.beginPath();
ctx.arc(x,y,40,0,2*Math.PI);
ctx.stroke();
}




ctx.beginPath();
ctx.strokestyle="yelow";
ctx.lineWidth="2";
ctx.arc(400,200,40,0,2* Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
x=e.clientX-canvas.offsetLeft;
y=e.clientY-canvas.offsetTop;
ctx.beginPath();
ctx.arc(x,y,40,0,2*Math.PI);
ctx.stroke();

}
