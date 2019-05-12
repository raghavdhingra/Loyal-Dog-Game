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