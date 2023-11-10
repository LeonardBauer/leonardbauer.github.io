const myCanvas = document.getElementById("myCanvas");
const parent = document.getElementById("par");
const ctx = myCanvas.getContext("2d");
ctx.fillStyle = "red";
myCanvas.width = parent.offsetWidth;
myCanvas.height = parent.offsetHeight;
ctx.translate(myCanvas.width/2, myCanvas.height/2);

if (!localStorage.getItem("progress")) {
    localStorage.setItem("progress", 1);
}
ctx.beginPath();
for (let i = 1; i <= localStorage.getItem("progress"); i++) {

}
ctx.stroke();


onresize(e => {
    myCanvas.width = parent.offsetWidth;
    myCanvas.height = parent.offsetHeight;
    ctx.translate(myCanvas.width/2, myCanvas.height/2);
})