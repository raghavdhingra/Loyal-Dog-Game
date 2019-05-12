const text = document.getElementById("text");
const box = document.getElementById("box");
const human = document.getElementById("human");
const play_1 = document.getElementById("play_1");
for (i=0;i<=500;i++){
    val1 = Math.random();
    val2 = Math.random();
    val3 = Math.random();
    ran1 = val1*77;
    ran2 = val2*79;
    ran3 = val3*50;
    elmt = document.createElement("div");
    elmt.className="dot";
    elmt.style.top = `${ran1}%`;
    elmt.style.left = `${ran2}%`;
    document.getElementById("play_1").appendChild(elmt);
}

document.getElementById("playground").addEventListener("mousemove",(eve)=>{
    var x = eve.clientX;
    var y = eve.clientY;
    setTimeout(()=>{
        if (y>645 && x>225){
            box.style.top="645px";
            box.style.left=`${x}px`;
        }
        else if (y>645 && x<225){
            box.style.top="645px";
            box.style.left="225px";
        }
        else if (y < 90 && x < 225) {
            box.style.top = "90px";
            box.style.left = "225px";
        }
        else if (y < 90 && x >= 225) {
            box.style.top = "90px";
            box.style.left = `${x}px`;
        }
        else if (y >= 90 && x < 225) {
            box.style.top = `${y}px`;
            box.style.left = "225px;"
        }
        else if (y >= 90 && x >= 225) {
            box.style.left = `${x}px`;
            box.style.top = `${y}px`;
        }
        text.innerText = `The coordinates are: X -> ${x}px and Y -> ${y}px`;
    }
    ,300);
    setTimeout(()=>{
        human.style.top=`${y}px`;
        human.style.left=`${x}px`;
    },0);
});