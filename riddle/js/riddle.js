const myCanvas = document.getElementById("myCanvas");
const parent = document.getElementById("par");
var progress;

const ctx = myCanvas.getContext("2d");


ctx.fillStyle = "red";
ctx.imageSmoothingEnabled = false;
myCanvas.width = parent.offsetWidth;
myCanvas.height = parent.offsetHeight;
ctx.translate(myCanvas.width/2, myCanvas.height/2);

if (!localStorage.getItem("progress")) {
    localStorage.setItem("progress", 1);
}
else {
    progress = localStorage.getItem("progress");
}
const img = new Image();
img.src = "./images/document.png";
console.log(img);
var obj;
img.onload = () =>{
    obj = ctx.createImageData(16,16,);
    ctx.putImageData(obj, -8, -8);
    //ctx.drawImage(img, -8,-8);

}




document.addEventListener("resize", e => {
    myCanvas.width = parent.offsetWidth;
    myCanvas.height = parent.offsetHeight;
    ctx.translate(myCanvas.width/2, myCanvas.height/2);
})
